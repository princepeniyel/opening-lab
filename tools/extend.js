// Extends short opening lines with Stockfish's best moves.
// Usage: node tools-extend.js <chess.js path>   (run from the repo root; writes src/extend.js)
const fs = require('fs'), { spawn } = require('child_process');
eval(fs.readFileSync(process.argv[2], 'utf8') + ';global.Chess=Chess');
const load = (f, names) => { eval(fs.readFileSync(f, 'utf8').replace(new RegExp('const (' + names + ')\\b', 'g'), 'global.$1')); };
load('src/explorer.js', 'EXPLORER');
load('src/data.js', 'LINES|PUZZLES|TRAP_PUZZLES|MIDDLEGAME|ENDGAME|VARIATIONS|NEWTRAPS');
const MIN = 24, EXTRA = 6, DEPTH = 16, WORKERS = 10;
const sans = p => { const o = []; const re = /\{([^}]*)\}|(\S+)/g; let m; while ((m = re.exec(p))) if (m[1] === undefined) o.push(m[2]); return o; };

// jobs: [key, sanMoves[], target plies]
const jobs = [];
EXPLORER.forEach((r, i) => { const mv = r[2].split(' '); jobs.push(['x' + i, mv, Math.max(MIN, mv.length + EXTRA)]); });
LINES.filter(L => L.type === 'opening').forEach(P => {
  const mv = sans(P.pgn); if (mv.length < MIN) jobs.push([P.id, mv, MIN]);
  (VARIATIONS[P.id] || []).forEach((v, k) => { const m2 = sans(v.pgn); if (m2.length < MIN) jobs.push([P.id + '-v' + (k + 1), m2, MIN]); });
});

class Engine {
  constructor() { this.p = spawn('stockfish'); this.buf = ''; this.wait = null;
    this.p.stdout.on('data', d => { this.buf += d; let i; while ((i = this.buf.indexOf('\n')) >= 0) { const line = this.buf.slice(0, i); this.buf = this.buf.slice(i + 1); if (this.wait && line.startsWith(this.wait.tok)) { const w = this.wait; this.wait = null; w.res(line); } } });
    this.send('uci'); this.send('setoption name Threads value 1'); this.send('setoption name Hash value 32'); }
  send(s) { this.p.stdin.write(s + '\n'); }
  ask(cmd, tok) { return new Promise(res => { this.wait = { tok, res }; this.send(cmd); }); }
  async best(uciMoves) { await this.ask('isready', 'readyok'); this.send('position startpos moves ' + uciMoves.join(' '));
    const l = await this.ask('go depth ' + DEPTH, 'bestmove'); return l.split(' ')[1]; }
}
const cache = new Map(); const out = {}; let done = 0;
async function run(eng, job) {
  const [key, mv, target] = job; const g = new Chess(); const uci = [];
  for (const s of mv) { const m = g.move(s); uci.push(m.from + m.to + (m.promotion || '')); }
  const ext = [];
  while (mv.length + ext.length < target && !g.game_over()) {
    const fen = g.fen(); let bm = cache.get(fen);
    if (!bm) { bm = await eng.best(uci); cache.set(fen, bm); }
    if (!bm || bm === '(none)') break;
    const m = g.move({ from: bm.slice(0, 2), to: bm.slice(2, 4), promotion: bm[4] }); if (!m) break;
    ext.push(m.san); uci.push(bm);
  }
  out[key] = ext.join(' ');
  if (++done % 250 === 0) console.log(done + '/' + jobs.length);
}
(async () => {
  const engines = Array.from({ length: WORKERS }, () => new Engine()); let next = 0;
  await Promise.all(engines.map(async e => { while (next < jobs.length) await run(e, jobs[next++]); e.send('quit'); }));
  const X = EXPLORER.map((r, i) => out['x' + i] || '');
  const C = {}; Object.keys(out).filter(k => !/^x\d+$/.test(k)).forEach(k => { if (out[k]) C[k] = out[k]; });
  fs.writeFileSync('src/extend.js', '// Engine continuations (Stockfish ' + 'depth ' + DEPTH + ') that extend short opening lines past the named book moves.\n' +
    '// EXT_X[i] continues EXPLORER[i]; EXT_C[lineId] continues an annotated opening line.\nconst EXT_X=' + JSON.stringify(X) + ';\nconst EXT_C=' + JSON.stringify(C) + ';\n');
  console.log('done', jobs.length, 'lines, extended', X.filter(Boolean).length + Object.keys(C).length);
})();
