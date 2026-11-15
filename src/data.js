// Opening & trap library. side = the side you play when studying it.
// pgn: SAN moves with {comments} attached to the move before them.
const LINES = [
// ───────────────────────── WHITE OPENINGS ─────────────────────────
{id:'italian',type:'opening',side:'w',eco:'C54',family:'1.e4',name:'Italian Game: Giuoco Piano',
 desc:'A classical setup: quick development, the bishop aims at f7, and c3 + d4 builds a big center.',
 pgn:`e4 {Grabs the center and opens lines for the queen and bishop.} e5 Nf3 {Develops with an attack on e5.} Nc6 Bc4 {The Italian bishop eyes Black's weakest square, f7.} Bc5 c3 {Prepares d4 to build a pawn center.} Nf6 d4 {Strikes in the center at once.} exd4 cxd4 {White now has the ideal e4 + d4 duo.} Bb4+ {Black gains time with a check.} Bd2 Bxd2+ Nbxd2 d5 {Black must break the center before it rolls forward.} exd5 Nxd5 Qb3 {Pressure on d5 and b7. White has an easy, active game.}`},
{id:'ruy',type:'opening',side:'w',eco:'C84',family:'1.e4',name:'Ruy Lopez: Closed',
 desc:'The "Spanish Torture". White pressures the knight that defends e5 and plays for a slow, lasting edge.',
 pgn:`e4 e5 Nf3 Nc6 Bb5 {Attacks the defender of e5.} a6 {The Morphy Defense: question the bishop right away.} Ba4 {Keep the pin-like pressure.} Nf6 O-O {Castle first; e4 is indirectly protected.} Be7 Re1 {Now e4 is solidly defended.} b5 Bb3 d6 c3 {Makes a retreat square for the bishop and prepares d4.} O-O h3 {Stops ...Bg4 before playing d4. A main tabiya of the Closed Ruy Lopez.}`},
{id:'scotch',type:'opening',side:'w',eco:'C45',family:'1.e4',name:'Scotch Game',
 desc:'White opens the center immediately with d4. Clear plans and open lines, popular with Kasparov and Carlsen.',
 pgn:`e4 e5 Nf3 Nc6 d4 {Hits e5 right away and opens the position.} exd4 Nxd4 {White controls the center with a piece.} Nf6 Nxc6 {The Mieses line: trade, then push e5.} bxc6 e5 {Kicks the f6 knight.} Qe7 Qe2 {Pins the e5 pawn's attacker and keeps the pawn.} Nd5 c4 {Drives the knight away and grabs space.} Ba6 {Black pins c4 against the queen; sharp but balanced.}`},
{id:'qgd',type:'opening',side:'w',eco:'D55',family:'1.d4',name:"Queen's Gambit Declined",
 desc:'The most classical answer to 1.d4 d5. White offers the c-pawn to win the center and develops harmoniously.',
 pgn:`d4 d5 c4 {The Queen's Gambit: undermine Black's d5 pawn.} e6 {Declined: Black keeps a strong point on d5.} Nc3 Nf6 Bg5 {Pins the knight that defends d5.} Be7 e3 O-O Nf3 h6 Bh4 {Keeps the pin. White plans Rc1, Bd3 and the minority attack.} b6 cxd5 Nxd5 Bxe7 Qxe7 Nxd5 exd5 Rc1 {Pressure down the c-file against c7.}`},
{id:'london',type:'opening',side:'w',eco:'D02',family:'1.d4',name:'London System',
 desc:'A reliable system: same setup against almost anything. Bf4, e3, c3, Nbd2, Bd3 and a solid pyramid.',
 pgn:`d4 d5 Bf4 {The London bishop comes out before e3 locks it in.} Nf6 e3 e6 Nf3 c5 c3 {The pawn triangle c3-d4-e3 is very hard to break.} Nc6 Nbd2 Bd6 Bg3 {Keeps the bishop; if ...Bxg3 then hxg3 opens the h-file.} O-O Bd3 {Aims at h7. White plays Ne5, Qf3 or a kingside attack.}`},
{id:'english',type:'opening',side:'w',eco:'A29',family:'Flank',name:'English Opening: Four Knights',
 desc:'1.c4 is a Sicilian with an extra tempo. White fianchettoes and fights for the light squares.',
 pgn:`c4 {Controls d5 from the side.} e5 Nc3 Nf6 Nf3 Nc6 g3 {Fianchetto: the g2 bishop will rake the long diagonal.} d5 cxd5 Nxd5 Bg2 Nb6 O-O Be7 d3 O-O a3 {Prepares b4 and queenside expansion.}`},
{id:'vienna',type:'opening',side:'w',eco:'C29',family:'1.e4',name:'Vienna Gambit',
 desc:'An aggressive sideline: Nc3 then f4, like a King\'s Gambit with better preparation.',
 pgn:`e4 e5 Nc3 {Prepares f4 while keeping e4 protected.} Nf6 f4 {The Vienna Gambit.} d5 {Best: Black strikes back in the center.} fxe5 Nxe4 Nf3 {Develop and support e5.} Be7 d4 O-O Bd3 {White has space and attacking chances on the kingside.}`},
{id:'kga',type:'opening',side:'w',eco:'C39',family:'1.e4',name:"King's Gambit: Accepted (Kieseritzky)",
 desc:'The romantic gambit. White gives a pawn for rapid development and an open f-file.',
 pgn:`e4 e5 f4 {Offers a pawn to deflect Black's e-pawn.} exf4 Nf3 {Stops ...Qh4+ and develops.} g5 {Black tries to hold the extra pawn.} h4 {Undermine the pawn chain at once.} g4 Ne5 {The Kieseritzky Gambit: a strong central knight.} Nf6 Bc4 d5 exd5 Bd6 d4 {White has a sharp, dynamic game.}`},
{id:'evans',type:'opening',side:'w',eco:'C52',family:'1.e4',name:'Evans Gambit',
 desc:'A pawn sacrifice in the Italian to gain time for c3 and d4. Loved by Morphy and Kasparov.',
 pgn:`e4 e5 Nf3 Nc6 Bc4 Bc5 b4 {The Evans Gambit: deflect the bishop.} Bxb4 c3 {Gains a tempo on the bishop.} Ba5 d4 {Center with tempo.} exd4 O-O {Fast development over material.} Nge7 cxd4 d5 exd5 Nxd5 Ba3 {Stops Black from castling. Huge initiative.}`},
{id:'catalan',type:'opening',side:'w',eco:'E05',family:'1.d4',name:'Catalan Opening',
 desc:'Queen\'s Gambit + kingside fianchetto. The g2 bishop puts long-term pressure on the queenside.',
 pgn:`d4 Nf6 c4 e6 g3 {The Catalan bishop will aim at b7 and a8.} d5 Bg2 Be7 Nf3 O-O O-O dxc4 {Black takes the pawn.} Qc2 {White wins it back comfortably.} a6 Qxc4 b5 Qc2 Bb7 Bd2 {Prepares Ba5 or Rc1. A quiet, strong positional edge.}`},
{id:'reti',type:'opening',side:'w',eco:'A13',family:'Flank',name:'Réti Opening',
 desc:'Hypermodern: control the center from a distance with pieces, then strike with c4.',
 pgn:`Nf3 {Flexible: no commitment in the center yet.} d5 c4 {Pressure on d5 from the flank.} e6 g3 Nf6 Bg2 Be7 O-O O-O b3 {Double fianchetto: both bishops aim at the center.} c5 Bb2 Nc6 e3 {A flexible, harmonious setup.}`},
{id:'danish',type:'opening',side:'w',eco:'C21',family:'1.e4',name:'Danish Gambit',
 desc:'White sacrifices two pawns for two raking bishops. Dangerous at club level.',
 pgn:`e4 e5 d4 exd4 c3 {Offers a second pawn.} dxc3 Bc4 {Even a third pawn.} cxb2 Bxb2 {Both bishops aim at Black's king. Black must defend precisely.} d5 {The best defense: give a pawn back.} Bxd5 Nf6 Bxf7+ Kxf7 Qxd8 Bb4+ Qd2 Bxd2+ Nxd2 {An equal endgame if Black knows this line.}`},
{id:'morra',type:'opening',side:'w',eco:'B21',family:'1.e4',name:'Smith-Morra Gambit',
 desc:'A gambit against the Sicilian. White gives a pawn for open c- and d-files and fast development.',
 pgn:`e4 c5 d4 cxd4 c3 {The Morra: offer a pawn for development.} dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6 O-O Nf6 Qe2 {Prepares Rd1 against the d6 pawn.} Be7 Rd1 e5 Be3 O-O Rac1 {Every white piece is active.}`},
{id:'friedliver',type:'opening',side:'w',eco:'C57',family:'1.e4',name:'Two Knights: Fried Liver Attack',
 desc:'If Black answers the Two Knights wrongly, White sacrifices a knight on f7 to drag the king out.',
 pgn:`e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 {Double attack on f7.} d5 {The main defense: block the bishop.} exd5 Nxd5 {The mistake! 5...Na5 is the main line.} Nxf7 {The Fried Liver sacrifice.} Kxf7 Qf3+ {Attack the king and the d5 knight.} Ke6 {The king must defend the knight.} Nc3 {Pile on the pinned knight.} Nb4 a3 Nxc2+ Kd1 Nxa1 Nxd5 {White has a crushing attack on the exposed king.}`},
{id:'bishops',type:'opening',side:'w',eco:'C24',family:'1.e4',name:"Bishop's Opening",
 desc:'An early Bc4 keeps options open and can transpose to the Italian or Vienna.',
 pgn:`e4 e5 Bc4 {Aims at f7 and avoids the Petrov.} Nf6 d3 {Solidly protects e4.} c6 Nf3 d5 Bb3 Bd6 Nc3 dxe4 Ng5 {Pressure on f7 again.} O-O Ngxe4 {A balanced position with a slow plan.}`},
{id:'jobava',type:'opening',side:'w',eco:'D00',family:'1.d4',name:'Jobava London',
 desc:'An aggressive London with Nc3, aiming for Nb5 and a fast attack.',
 pgn:`d4 d5 Nc3 {The Jobava move order.} Nf6 Bf4 {Now Nb5 is a real threat against c7.} e6 e3 a6 Nf3 c5 Ne5 {A strong outpost knight.} Nbd7 Bd3 {White aims at h7 with pieces.}`},

// ───────────────────────── BLACK OPENINGS ─────────────────────────
{id:'najdorf',type:'opening',side:'b',eco:'B90',family:'vs 1.e4',name:'Sicilian Najdorf',
 desc:'The sharpest and most respected Sicilian. ...a6 prepares ...e5 or ...b5 with flexible play.',
 pgn:`e4 c5 {The Sicilian: fight for d4 from the side and create imbalance.} Nf3 d6 d4 cxd4 {Trade a wing pawn for a center pawn.} Nxd4 Nf6 Nc3 a6 {The Najdorf: controls b5 and prepares ...e5.} Be3 {The English Attack.} e5 {Kicks the knight and claims space.} Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Nbd7 {Opposite castling: a race of pawn storms.}`},
{id:'dragon',type:'opening',side:'b',eco:'B76',family:'vs 1.e4',name:'Sicilian Dragon',
 desc:'Black fianchettoes the dark bishop. The g7 Dragon bishop is a monster on the long diagonal.',
 pgn:`e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 {The Dragon setup.} Be3 Bg7 f3 {The Yugoslav Attack.} O-O Qd2 Nc6 Bc4 Bd7 O-O-O Rc8 {Rook to the c-file to attack White's king.} Bb3 Ne5 {Heading for c4 to trade off a key bishop.}`},
{id:'sveshnikov',type:'opening',side:'b',eco:'B33',family:'vs 1.e4',name:'Sicilian Sveshnikov',
 desc:'Black accepts a hole on d5 for active pieces and dynamic play.',
 pgn:`e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 {The Sveshnikov: kick the knight.} Ndb5 d6 Bg5 a6 Na3 b5 {Gain space and keep the a3 knight out of play.} Bxf6 gxf6 {Black takes doubled pawns but gets the bishop pair.} Nd5 f5 {Black fights for the center at once.}`},
{id:'french-adv',type:'opening',side:'b',eco:'C02',family:'vs 1.e4',name:'French Defense: Advance',
 desc:'A solid defense. Black attacks White\'s pawn chain at its base with ...c5 and ...Qb6.',
 pgn:`e4 e6 {Prepares ...d5 with solid support.} d4 d5 e5 {The Advance Variation gains space.} c5 {Strike the base of the chain.} c3 Nc6 Nf3 Qb6 {Pile up on d4 and b2.} a3 c4 {Gains space on the queenside and fixes b2.} Nbd2 Na5 {Heading to b3.}`},
{id:'winawer',type:'opening',side:'b',eco:'C18',family:'vs 1.e4',name:'French Defense: Winawer',
 desc:'The most combative French. Black pins the c3 knight and gives up the bishop to damage White\'s pawns.',
 pgn:`e4 e6 d4 d5 Nc3 Bb4 {The Winawer pin.} e5 c5 a3 Bxc3+ bxc3 {White has doubled pawns but the bishop pair.} Ne7 Qg4 {Attacking g7.} Qc7 {Counterattack on c3 and e5.} Qxg7 Rg8 Qxh7 cxd4 {Black gets huge central counterplay for the pawns.}`},
{id:'caro-classical',type:'opening',side:'b',eco:'B19',family:'vs 1.e4',name:'Caro-Kann: Classical',
 desc:'Rock-solid. Black develops the light bishop before ...e6, keeping a sound pawn structure.',
 pgn:`e4 c6 {Prepares ...d5 without locking in the light bishop.} d4 d5 Nc3 dxe4 Nxe4 Bf5 {The Classical: bishop out first.} Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 {A solid position with no weaknesses.}`},
{id:'caro-adv',type:'opening',side:'b',eco:'B12',family:'vs 1.e4',name:'Caro-Kann: Advance',
 desc:'Against e5, Black gets the bishop out to f5, then hits the center with ...e6 and ...c5.',
 pgn:`e4 c6 d4 d5 e5 Bf5 {The good bishop gets outside the pawn chain.} Nf3 e6 Be2 c5 {Strike the center.} Be3 Nd7 O-O Ne7 {Heading to c6 or f5.}`},
{id:'kid',type:'opening',side:'b',eco:'E97',family:'vs 1.d4',name:"King's Indian Defense",
 desc:'Black lets White build a big center, then attacks it and the white king with ...e5 and ...f5.',
 pgn:`d4 Nf6 c4 g6 Nc3 Bg7 {The KID bishop.} e4 d6 Nf3 O-O Be2 e5 {Challenge the center.} O-O Nc6 d5 Ne7 {Black now plays ...Ne8 and ...f5 for a kingside attack.} Ne1 Nd7 Be3 f5 {The classic kingside pawn storm begins.}`},
{id:'nimzo',type:'opening',side:'b',eco:'E54',family:'vs 1.d4',name:'Nimzo-Indian Defense',
 desc:'A top-level defense. ...Bb4 pins the knight and fights for e4 with pieces.',
 pgn:`d4 Nf6 c4 e6 Nc3 Bb4 {The Nimzo pin: controls e4.} e3 O-O Bd3 d5 Nf3 c5 O-O dxc4 Bxc4 Nc6 {Rich, balanced play with targets on both sides.}`},
{id:'slav',type:'opening',side:'b',eco:'D18',family:'vs 1.d4',name:'Slav Defense',
 desc:'Black defends d5 with ...c6 so the light bishop stays free.',
 pgn:`d4 d5 c4 c6 {Supports d5 and keeps the c8 bishop's diagonal open.} Nf3 Nf6 Nc3 dxc4 a4 {Stops ...b5.} Bf5 {The bishop comes out before ...e6.} e3 e6 Bxc4 Bb4 O-O O-O {A very solid position.}`},
{id:'qga',type:'opening',side:'b',eco:'D27',family:'vs 1.d4',name:"Queen's Gambit Accepted",
 desc:'Black takes the pawn and uses the time to play ...c5 and hit the center.',
 pgn:`d4 d5 c4 dxc4 {Accepted. Black does not try to keep the pawn.} Nf3 Nf6 e3 e6 Bxc4 c5 {Hit the center right away.} O-O a6 {Prepares ...b5.} dxc5 Qxd1 Rxd1 Bxc5 {An equal endgame-like position.}`},
{id:'grunfeld',type:'opening',side:'b',eco:'D85',family:'vs 1.d4',name:'Grünfeld Defense',
 desc:'Hypermodern: give White a big center, then demolish it with ...c5 and the g7 bishop.',
 pgn:`d4 Nf6 c4 g6 Nc3 d5 {The Grünfeld strike.} cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 {The bishop bites into c3 and d4.} Nf3 c5 Be3 Qa5 Qd2 Nc6 {Maximum pressure on d4.}`},
{id:'scandi',type:'opening',side:'b',eco:'B01',family:'vs 1.e4',name:'Scandinavian Defense',
 desc:'Black challenges e4 at once. Easy to learn with a clear setup.',
 pgn:`e4 d5 {Challenge e4 immediately.} exd5 Qxd5 Nc3 Qa5 {The queen is safe and pins along a5-e1.} d4 Nf6 Nf3 Bf5 {Bishop outside the pawn chain.} Bc4 e6 Bd2 c6 {A solid "Caro-Kann like" structure.}`},
{id:'pirc',type:'opening',side:'b',eco:'B08',family:'vs 1.e4',name:'Pirc Defense',
 desc:'Black lets White take the center and plans to undermine it later.',
 pgn:`e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6 {Prepares ...b5 or ...Qc7 and ...e5.} a4 Nbd7 {Ready for ...e5.}`},
{id:'dutch',type:'opening',side:'b',eco:'A87',family:'vs 1.d4',name:'Dutch Defense: Leningrad',
 desc:'...f5 grabs e4 and gives an unbalanced game with kingside attacking chances.',
 pgn:`d4 f5 {Controls e4 from the start.} g3 Nf6 Bg2 g6 {The Leningrad: KID-style bishop on g7.} Nf3 Bg7 O-O O-O c4 d6 Nc3 Qe8 {Prepares ...e5.} d5 a5 {Secures c5 for a knight.}`},
{id:'petrov',type:'opening',side:'b',eco:'C42',family:'vs 1.e4',name:'Petrov Defense',
 desc:'Black mirrors White and counterattacks e4. One of the most solid defenses.',
 pgn:`e4 e5 Nf3 Nf6 {Counterattack e4 instead of defending e5.} Nxe5 d6 {Important! Kick the knight first. 3...Nxe4? 4.Qe2 is a known trap.} Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7 {Symmetrical and very solid.}`},
{id:'berlin',type:'opening',side:'b',eco:'C67',family:'vs 1.e4',name:'Ruy Lopez: Berlin Defense',
 desc:'The "Berlin Wall". Black heads for a famous queenless middlegame that is very hard to beat.',
 pgn:`e4 e5 Nf3 Nc6 Bb5 Nf6 {The Berlin.} O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8 {The Berlin endgame: Black has the bishop pair and a solid fortress.}`},
{id:'benko',type:'opening',side:'b',eco:'A58',family:'vs 1.d4',name:'Benko Gambit',
 desc:'Black gives a pawn for long-term pressure down the a- and b-files.',
 pgn:`d4 Nf6 c4 c5 d5 b5 {The Benko Gambit.} cxb5 a6 bxa6 g6 {Black develops before taking back.} Nc3 Bxa6 e4 Bxf1 Kxf1 d6 {White can't castle; Black's rooks will love the open files.}`},
{id:'caro-tal',type:'opening',side:'b',eco:'B10',family:'vs 1.e4',name:'Caro-Kann: Two Knights',
 desc:'How to meet 2.Nc3 and 3.Nf3 calmly with ...Bg4.',
 pgn:`e4 c6 Nc3 d5 Nf3 Bg4 {Pin the knight before White plays d4.} h3 Bxf3 Qxf3 e6 d4 Nf6 Bd3 dxe4 Nxe4 Nxe4 Bxe4 Nd7 {Simple development; Black is very solid.}`},

// ───────────────────────── WHITE TRAPS ─────────────────────────
{id:'scholar',type:'trap',side:'w',eco:'C20',family:'1.e4',name:"Scholar's Mate",
 desc:'The 4-move checkmate on f7. Learn it so you can punish it, and so it never happens to you.',
 pgn:`e4 e5 Qh5 {The queen eyes f7 and e5.} Nc6 Bc4 {Second attacker on f7.} Nf6 {The blunder! 3...g6 or 3...Qe7 defends.} Qxf7# {Checkmate. f7 was guarded only by the king.}`},
{id:'legal',type:'trap',side:'w',eco:'C41',family:'1.e4',name:"Légal's Mate",
 desc:'A queen sacrifice that ends in a minor-piece checkmate when Black grabs the queen.',
 pgn:`e4 e5 Nf3 d6 Bc4 Bg4 {Pins the knight to the queen... or does it?} Nc3 g6 {A careless move.} Nxe5 {Breaks the "pin" and offers the queen.} Bxd1 {Greed!} Bxf7+ Ke7 Nd5# {Three minor pieces deliver checkmate.}`},
{id:'smothered-ck',type:'trap',side:'w',eco:'B10',family:'1.e4',name:'Caro-Kann Smothered Mate',
 desc:'A famous 6-move smothered mate. The e7 pawn is pinned to the king by the queen.',
 pgn:`e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Qe2 {Sets the trap: the e-file is now loaded.} Ngf6 {The natural-looking blunder.} Nd6# {Smothered mate! e7xd6 is illegal because of the pin.}`},
{id:'damiano',type:'trap',side:'w',eco:'C40',family:'1.e4',name:'Damiano Defense Punished',
 desc:'2...f6 weakens the king. A knight sacrifice wins a whole rook.',
 pgn:`e4 e5 Nf3 f6 {A weak move: it takes f6 from the knight and opens the king.} Nxe5 {Sacrifice!} fxe5 Qh5+ {The king is exposed.} g6 Qxe5+ {Fork: check plus the h8 rook.} Qe7 Qxh8 {White is up a rook.}`},
{id:'qga-trap',type:'trap',side:'w',eco:'D20',family:'1.d4',name:"Queen's Gambit Accepted Trap",
 desc:'When Black tries to hold the c4 pawn with ...b5, the long diagonal to a8 opens.',
 pgn:`d4 d5 c4 dxc4 e3 b5 {Trying to keep the extra pawn.} a4 {Undermine the chain.} c6 axb5 cxb5 Qf3 {Double attack on a8 down the long diagonal.} Nc6 Qxc6+ Bd7 Qe4 {White wins a full knight.}`},
{id:'petrov-trap',type:'trap',side:'w',eco:'C42',family:'1.e4',name:'Petrov Copycat Trap',
 desc:'If Black copies with 3...Nxe4?, White wins the queen with a discovered check.',
 pgn:`e4 e5 Nf3 Nf6 Nxe5 Nxe4 {The natural copycat move is a mistake.} Qe2 {Attacks the e4 knight along the e-file.} Nf6 {Black saves the knight... and loses the queen.} Nc6+ {Discovered check from the queen, while the knight hits d8.} Be7 Nxd8 {White is up a queen.}`},
{id:'monticelli',type:'trap',side:'w',eco:'E15',family:'1.d4',name:'Monticelli Trap',
 desc:'A positional trap in the Queen\'s Indian. Ng5 creates two threats at once.',
 pgn:`d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+ Bd2 Bxd2+ Qxd2 O-O Nc3 Ne4 {Black tries to trade knights.} Qc2 Nxc3 Ng5 {Double threat: Qxh7# and Bxb7!} Ne4 Bxe4 Bxe4 Qxe4 Qxg5 Qxa8 {White wins the exchange and keeps the attack.}`},
{id:'tennison',type:'trap',side:'w',eco:'A06',family:'Flank',name:'Tennison Gambit Trap',
 desc:'After ...h6?? a knight sacrifice on f7 and a bishop check uncover the queen on the d-file.',
 pgn:`Nf3 d5 e4 {The Tennison Gambit.} dxe4 Ng5 Nf6 d3 exd3 Bxd3 h6 {The careless move.} Nxf7 {Sacrifice on f7.} Kxf7 Bg6+ {The bishop moves with check and opens the d-file.} Kxg6 Qxd8 {White wins the queen.}`},

// ───────────────────────── BLACK TRAPS ─────────────────────────
{id:'fools',type:'trap',side:'b',eco:'A00',family:'vs Flank',name:"Fool's Mate",
 desc:'The fastest checkmate in chess. Two weakening moves by White and the queen strikes.',
 pgn:`f3 {Weakens the e1-h4 diagonal.} e5 g4 {A second, fatal weakening.} Qh4# {Checkmate in two moves.}`},
{id:'blackburne',type:'trap',side:'b',eco:'C50',family:'vs 1.e4',name:'Blackburne Shilling Trap',
 desc:'3...Nd4 invites White to grab e5. If they do, Black mates or wins a ton of material.',
 pgn:`e4 e5 Nf3 Nc6 Bc4 Nd4 {The bait: it looks like it leaves e5 hanging.} Nxe5 {Greed.} Qg5 {Attacks e5 and g2 at once.} Nxf7 Qxg2 Rf1 Qxe4+ Be2 Nf3# {A beautiful smothered mate.}`},
{id:'englund',type:'trap',side:'b',eco:'A40',family:'vs 1.d4',name:'Englund Gambit Trap',
 desc:'The Englund Gambit hides a cute trap ending in mate on c1.',
 pgn:`d4 e5 {The Englund Gambit.} dxe5 Nc6 Nf3 Qe7 {Hits e5.} Bf4 Qb4+ {Check and attack on b2.} Bd2 Qxb2 Bc3 {Looks strong: it attacks the queen.} Bb4 {Pin!} Qd2 Bxc3 Qxc3 Qc1# {Mate on the back rank.}`},
{id:'elephant',type:'trap',side:'b',eco:'D51',family:'vs 1.d4',name:'Elephant Trap',
 desc:'In the QGD, White grabs d5 thinking the knight is pinned. It isn\'t.',
 pgn:`d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 {Sets the trap.} cxd5 exd5 Nxd5 {White thinks f6 is pinned.} Nxd5 {Black gives up the queen!} Bxd8 Bb4+ {Check! White must give the queen back.} Qd2 Bxd2+ Kxd2 Kxd8 {Black is up a full piece.}`},
{id:'lasker',type:'trap',side:'b',eco:'D08',family:'vs 1.d4',name:'Lasker Trap (Albin Countergambit)',
 desc:'One of the rare traps where an underpromotion to a knight wins the game.',
 pgn:`d4 d5 c4 e5 {The Albin Countergambit.} dxe5 d4 e3 {A natural but bad move.} Bb4+ Bd2 dxe3 Bxb4 {White grabs the bishop.} exf2+ Ke2 fxg1=N+ {Underpromotion with check!} Ke1 Qh4+ Kd2 Nc6 {Black's attack is overwhelming.}`},
{id:'stafford',type:'trap',side:'b',eco:'C42',family:'vs 1.e4',name:'Stafford Gambit Trap',
 desc:'A tricky gambit. If White pins the queen with Bg5, Black ignores it and mates.',
 pgn:`e4 e5 Nf3 Nf6 Nxe5 Nc6 {The Stafford Gambit.} Nxc6 dxc6 {Open lines for the bishops.} d3 Bc5 Bg5 {Pinning the knight to the queen... it seems.} Nxe4 {Ignore it!} Bxd8 Bxf2+ Ke2 Bg4# {Checkmate.}`},
{id:'fishing',type:'trap',side:'b',eco:'C65',family:'vs 1.e4',name:'Fishing Pole Trap',
 desc:'Black dangles a knight on g4. Taking it opens the h-file for a mating attack.',
 pgn:`e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Ng4 {The bait.} h3 h5 {If hxg4, the h-file opens.} hxg4 hxg4 Nxe5 {The knight leaves the defense of h2.} Qh4 {Threatens Qh2#.} Nxc6 Qh2# {Mate with the rook on h8 behind the queen.}`},
{id:'noahs-ark',type:'trap',side:'b',eco:'C71',family:'vs 1.e4',name:"Noah's Ark Trap",
 desc:'In the Ruy Lopez, Black traps the white bishop on b3 with a pawn chain.',
 pgn:`e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 d4 b5 Bb3 Nxd4 Nxd4 exd4 Qxd4 {White recaptures... into the trap.} c5 {Kicks the queen.} Qd5 Be6 Qc6+ Bd7 Qd5 c4 {The bishop on b3 is trapped.}`},
{id:'mortimer',type:'trap',side:'b',eco:'C60',family:'vs 1.e4',name:'Mortimer Trap',
 desc:'3...Ne7 looks passive, but grabbing e5 runs into a queen fork.',
 pgn:`e4 e5 Nf3 Nc6 Bb5 Nf6 d3 Ne7 {The odd-looking Mortimer move.} Nxe5 {Taking the "free" pawn.} c6 Ba4 {The bishop retreats.} Qa5+ {Fork: check plus attacks on a4 and e5.} c3 Qxe5 {Black wins a knight.}`},
{id:'siberian',type:'trap',side:'b',eco:'B21',family:'vs 1.e4',name:'Siberian Trap',
 desc:'In the Smith-Morra, a knight jump to d4 threatens mate and wins the queen.',
 pgn:`e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 Qc7 O-O Nf6 Qe2 Ng4 {Eyes h2 with queen and knight.} h3 {The natural kick... a blunder.} Nd4 {Attacks the queen and threatens Qh2#.} Nxd4 Qh2# {Mate.}`},
{id:'kieninger',type:'trap',side:'b',eco:'A52',family:'vs 1.d4',name:'Kieninger Trap (Budapest)',
 desc:'In the Budapest Gambit, the white king gets mated on its own home square.',
 pgn:`d4 Nf6 c4 e5 {The Budapest Gambit.} dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+ Nbd2 Qe7 a3 Ngxe5 {Bait: the bishop is hanging.} axb4 {Greed.} Nd3# {A smothered mate! e2 is pinned.}`},
];

// ───────────────────────── PUZZLES ─────────────────────────
// Hand-made mate puzzles. Each was checked with a solver: the solution is the only way to mate
// (puzzles with two mating moves accept either one).
const PUZZLES = [
{id:'m-backrank',theme:'Mate in 1',name:'Back-Rank Mate',fen:'6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1',desc:'The king has no air. Find the mate.',pgn:`Rd8# {The king is trapped behind its own pawns. Always give your king a flight square!}`},
{id:'m-smothered',theme:'Mate in 1',name:'Smothered Mate',fen:'6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1',desc:'The king is boxed in by its own pieces.',pgn:`Nf7# {Only a knight can check a king that is surrounded by its own army.}`},
{id:'m-anastasia',theme:'Mate in 1',name:"Anastasia's Mate",fen:'5r2/4Nppk/8/8/8/3R4/8/6K1 w - - 0 1',desc:'Knight and rook against a king on the edge.',pgn:`Rh3# {The e7 knight covers g6 and g8, the rook takes the h-file.}`},
{id:'m-arabian',theme:'Mate in 1',name:'Arabian Mate',fen:'7k/R7/5N2/8/8/8/8/6K1 w - - 0 1',desc:'One of the oldest checkmate patterns.',pgn:`Rh7# {The knight protects the rook and covers g8.}`},
{id:'m-qb',theme:'Mate in 1',name:'Queen and Bishop Mate',fen:'6k1/5p1p/6pB/8/8/8/1Q4PP/6K1 w - - 0 1',desc:'The dark squares around the king are weak.',pgn:`Qg7# {The h6 bishop protects the queen. (Qb8# also works.)}`},
{id:'m-damiano',theme:'Mate in 1',name:"Damiano's Mate",fen:'5rk1/5pp1/6P1/8/8/8/8/6KQ w - - 0 1',desc:'A pawn on g6 is a monster.',pgn:`Qh7# {The g6 pawn protects the queen on h7.}`},
{id:'m-bodens',theme:'Mate in 1',name:"Boden's Mate",fen:'2kr4/p2n4/8/8/5B2/8/4B3/6K1 w - - 0 1',desc:'Two bishops against a queenside-castled king.',pgn:`Ba6# {Two criss-crossing bishops cover every escape square.}`},
{id:'m-queenk',theme:'Mate in 1',name:'Queen and King Mate',fen:'7k/8/6K1/8/8/8/8/5Q2 w - - 0 1',desc:'The basic endgame mate. Use your king!',pgn:`Qf8# {The king on g6 guards g7 and h7.}`},
{id:'m-rooks',theme:'Mate in 1',name:'Rook and King Mate',fen:'6k1/8/6K1/8/8/8/R7/1R6 w - - 0 1',desc:'Finish the endgame cleanly.',pgn:`Ra8# {The king covers the 7th rank; the rook takes the 8th. (Rb8# also works.)}`},
{id:'m-capture',theme:'Mate in 1',name:'Capture With Mate',fen:'3r2k1/5ppp/8/8/8/8/5PPP/3QR1K1 w - - 0 1',desc:'The back rank is weak. Which capture ends the game?',pgn:`Qxd8# {Take the only defender of the back rank with checkmate.}`},
{id:'m2-philidor',theme:'Mate in 2',name:"Philidor's Legacy",fen:'r6k/6pp/7N/8/8/1Q6/6PP/6K1 w - - 0 1',desc:'Sacrifice the queen to smother the king.',pgn:`Qg8+ {The queen sacrifice! The knight covers g8, so only the rook can take.} Rxg8 Nf7# {Smothered mate.}`},
{id:'mb-backrank',theme:'Mate in 1',name:'Back-Rank Mate (Black)',fen:'1r4k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1',desc:'White forgot to make luft.',pgn:`Rb1# {White's own pawns trap the king.}`},
{id:'mb-smother',theme:'Mate in 1',name:'Corner Smothered Mate',fen:'6k1/8/8/8/4n3/8/6PP/6RK b - - 0 1',desc:'The white king is stuck in the corner.',pgn:`Nf2# {Rook and pawns block every escape.}`},
{id:'mb-queen',theme:'Mate in 1',name:'Queen Back-Rank Mate',fen:'4q1k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1',desc:'An open e-file and a weak back rank.',pgn:`Qe1# {The queen sweeps down the open file.}`},
{id:'mb2-philidor',theme:'Mate in 2',name:"Philidor's Legacy (Black)",fen:'6k1/6pp/1q6/8/8/7n/6PP/R6K b - - 0 1',desc:'Give the queen to smother the king.',pgn:`Qg1+ {The knight covers g1, so only the rook can take.} Rxg1 Nf2# {Smothered mate.}`},
];

// Opening traps as puzzles: start from the position just before the winning idea (number = moves played already).
const TRAP_PUZZLES = {scholar:6,legal:10,'smothered-ck':10,damiano:6,'qga-trap':10,'petrov-trap':8,monticelli:18,tennison:10,
  fools:3,blackburne:7,englund:11,elephant:11,lasker:11,stafford:11,fishing:13,'noahs-ark':15,mortimer:11,siberian:17,kieninger:15};

// ───────────────────────── MIDDLEGAME DRILLS ─────────────────────────
// Tactics checked with a search: the solution wins clearly more than any other move.
const MIDDLEGAME = [
{id:'mg-fork-c7',theme:'Knight fork',name:'Knight Fork on c7',fen:'r3k2r/ppp2ppp/8/3N4/8/8/PPP2PPP/4K2R w K - 0 1',desc:'The c7 square is a classic fork target.',pgn:`Nxc7+ {Check, and the a8 rook is attacked too.} Kd7 Nxa8 {White wins the exchange plus a pawn.}`},
{id:'mg-royal-fork',theme:'Knight fork',name:'Royal Fork',fen:'3q3k/6pp/8/6N1/8/8/6PP/6K1 w - - 0 1',desc:'Look for a knight check that also hits the queen.',pgn:`Nf7+ {King and queen are both attacked.} Kg8 Nxd8 {White wins the queen.}`},
{id:'mg-skewer',theme:'Skewer',name:'Bishop Skewer',fen:'8/1q6/8/8/4k3/8/4B1K1/8 w - - 0 1',desc:'King and queen on the same diagonal.',pgn:`Bf3+ {The bishop is protected by the king. The king must move...} Kd3 Bxb7 {...and the queen behind it falls.}`},
{id:'mg-discovered',theme:'Discovered attack',name:'Discovered Attack',fen:'3q3k/8/8/8/8/8/3B4/3RK3 w - - 0 1',desc:'Move the bishop with check and let the rook do the work.',pgn:`Bc3+ {Check from the bishop, and the d1 rook now attacks d8.} Kg8 Rxd8+ {White wins the queen.}`},
{id:'mg-queen-fork',theme:'Queen fork',name:'Queen Fork',fen:'r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1',desc:'One queen move attacks two things.',pgn:`Qd5+ {Check on the diagonal and an attack on a8.} Kf8 Qxa8+ {White wins the rook.}`},
{id:'mg-pawn-fork',theme:'Pawn fork',name:'Pawn Fork',fen:'8/2k5/8/2n1b3/8/3PK3/8/8 w - - 0 1',desc:'Even a pawn can attack two pieces.',pgn:`d4 {The protected pawn forks knight and bishop.} Bd6 dxc5 Bxc5+ {White wins a piece for a pawn.}`},
];

// ───────────────────────── ENDGAME DRILLS ─────────────────────────
// Play these out against the computer. goal: mate | promote | capture (stop the pawn). limit = your moves.
const ENDGAME = [
{id:'eg-kqk',theme:'Basic mates',name:'Queen Checkmate',fen:'8/8/8/4k3/8/8/8/4K2Q w - - 0 1',goal:'mate',limit:20,desc:'Use the queen to push the king to the edge, then bring your own king to help. Watch out for stalemate.'},
{id:'eg-krk',theme:'Basic mates',name:'Rook Checkmate',fen:'8/8/8/4k3/8/8/8/R3K3 w - - 0 1',goal:'mate',limit:30,desc:'Shrink the king\'s box with the rook and use your king for support. Mate happens on the edge.'},
{id:'eg-krrk',theme:'Basic mates',name:'Two-Rook Ladder',fen:'8/8/8/3k4/8/8/8/R3K2R w KQ - 0 1',goal:'mate',limit:12,desc:'The rooks take turns checking and cutting off ranks, like climbing a ladder.'},
{id:'eg-kqk-b',theme:'Basic mates',name:'Queen Checkmate (Black)',fen:'4k2q/8/8/8/3K4/8/8/8 b - - 0 1',goal:'mate',limit:20,desc:'The same technique with Black: box the king in, bring your king, avoid stalemate.'},
{id:'eg-kpk',theme:'Pawn endgames',name:'King and Pawn: Opposition',fen:'4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',goal:'promote',limit:15,desc:'Your king on the 6th rank in front of the pawn wins. Use the opposition and get a queen.'},
{id:'eg-square',theme:'Pawn endgames',name:'Rule of the Square',fen:'8/8/8/4k3/P7/8/8/7K b - - 0 1',goal:'capture',limit:10,desc:'Your king is inside the pawn\'s square. Head for the corner and catch the pawn.'},
{id:'eg-lucena',theme:'Rook endgames',name:'Lucena Position',fen:'1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1',goal:'promote',limit:20,desc:'Win by "building a bridge": Rd1+, then Rd4, so your rook can block the checks.'},
];

// ───────────────────────── VARIATIONS ─────────────────────────
// Extra lines shown as sub-lines under each opening (the entry in LINES is the main line).
const VARIATIONS = {
italian:[
 {name:'Giuoco Pianissimo',eco:'C53',pgn:`e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 {The quiet modern approach: build slowly, keep the tension.} d6 O-O O-O Re1 a6 a4 {Gives the bishop a retreat on a2.} Ba7 h3 {Stops ...Bg4. Typical plans: Nbd2-f1-g3 and d4 later.}`},
 {name:'Two Knights (4.d3)',eco:'C55',pgn:`e4 e5 Nf3 Nc6 Bc4 Nf6 {The Two Knights Defense.} d3 {Avoids sharp lines and keeps a solid center.} Be7 O-O O-O Re1 d6 c3 {Same slow plans as the Pianissimo.}`},
 {name:'Hungarian Defense',eco:'C50',pgn:`e4 e5 Nf3 Nc6 Bc4 Be7 {A passive but solid choice.} d4 {Take the center at once.} d6 d5 {Gain space with tempo.} Nb8 Bd3 Nf6 c4 {White has a clear space advantage.}`},
],
ruy:[
 {name:'Exchange Variation',eco:'C68',pgn:`e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 {Give up the bishop to damage Black's pawns.} dxc6 O-O f6 d4 exd4 Nxd4 c5 Nb3 Qxd1 Rxd1 {White aims for an endgame with the better pawn majority.}`},
 {name:'Open Variation',eco:'C80',pgn:`e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 {The Open Ruy: Black grabs e4 for active play.} d4 b5 Bb3 d5 dxe5 Be6 c3 {Black's pieces are active, White has the e5 pawn.}`},
 {name:'Marshall Attack',eco:'C89',pgn:`e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 {The Marshall Gambit: a pawn for a fierce attack.} exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 d4 Bd6 Re1 Qh4 g3 Qh3 {Black's pieces swarm toward White's king.}`},
 {name:'Berlin Defense',eco:'C67',pgn:`e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8 {The famous Berlin endgame.}`},
],
scotch:[
 {name:'Classical (4...Bc5)',eco:'C45',pgn:`e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 {Develop with pressure on d4.} Be3 Qf6 c3 Nge7 Bc4 {White holds d4 and develops naturally.}`},
 {name:'Scotch Gambit',eco:'C44',pgn:`e4 e5 Nf3 Nc6 d4 exd4 Bc4 {Gambit style: develop first, win d4 back later.} Nf6 e5 d5 Bb5 Ne4 Nxd4 Bd7 {Sharp, open play.}`},
 {name:'Steinitz (4...Qh4)',eco:'C45',pgn:`e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 {Attacks e4 right away.} Nc3 Bb4 Be2 Qxe4 Nb5 {White gets a lot of activity for the pawn.}`},
],
qgd:[
 {name:'Exchange Variation',eco:'D36',pgn:`d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 {Fixes Black's pawn structure.} Bg5 Be7 e3 c6 Bd3 Nbd7 Qc2 O-O Nge2 Re8 O-O {Plans: the minority attack with b4-b5, or f3 and e4.}`},
 {name:'Ragozin',eco:'D38',pgn:`d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 {Nimzo-style pin inside the Queen's Gambit.} cxd5 exd5 Bg5 h6 Bh4 c5 {Black plays actively in the center.}`},
 {name:'Tarrasch Defense',eco:'D34',pgn:`d4 d5 c4 e6 Nc3 c5 {Black accepts an isolated pawn for free piece play.} cxd5 exd5 Nf3 Nc6 g3 {Fianchetto to pressure d5.} Nf6 Bg2 Be7 O-O O-O`},
],
london:[
 {name:'vs King\'s Indian setup',eco:'A48',pgn:`d4 Nf6 Bf4 g6 e3 Bg7 Nf3 O-O Be2 d6 h3 {Keeps a retreat for the bishop on h2.} c5 c3 {The solid London triangle again.}`},
 {name:'vs early ...c5 and ...Qb6',eco:'D02',pgn:`d4 d5 Bf4 c5 e3 Nc6 c3 Qb6 {Black hits b2 once the bishop has left c1.} Qb3 {Offer a queen trade.} c4 Qc2 Bf5 Qc1 {The queen guards b2 and e3.}`},
],
english:[
 {name:'Symmetrical',eco:'A36',pgn:`c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 {Both sides fianchetto.} Nf3 Nf6 O-O O-O d4 cxd4 Nxd4 {White opens the center with a small edge in space.}`},
 {name:'Closed (Botvinnik setup)',eco:'A26',pgn:`c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 e4 {The Botvinnik setup: grip on d5.} d6 Nge2 Nge7 d3 O-O O-O {Slow maneuvering; f4 or b4 are typical plans.}`},
],
vienna:[
 {name:'Frankenstein-Dracula',eco:'C27',pgn:`e4 e5 Nc3 Nf6 Bc4 Nxe4 {Black grabs the pawn with a fork trick.} Qh5 Nd6 Bb3 Nc6 Nb5 g6 Qf3 f5 Qd5 Qe7 Nxc7+ Kd8 Nxa8 b6 {Crazy play: White wins a rook but the knight is trapped.}`},
 {name:'Vienna 2...Nc6',eco:'C25',pgn:`e4 e5 Nc3 Nc6 Bc4 Nf6 d3 Na5 {Hunting the c4 bishop.} Nge2 Nxc4 dxc4 {White gets open lines for the lost bishop.}`},
],
kga:[
 {name:'Falkbeer Countergambit',eco:'C31',pgn:`e4 e5 f4 d5 {Hit back in the center.} exd5 e4 d3 Nf6 dxe4 Nxe4 Nf3 Bc5 Qe2 {Pin the e4 knight. Sharp.}`},
 {name:'Classical Declined (2...Bc5)',eco:'C30',pgn:`e4 e5 f4 Bc5 {Stops White from castling short easily.} Nf3 d6 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 {White has a big center.}`},
 {name:"Bishop's Gambit",eco:'C33',pgn:`e4 e5 f4 exf4 Bc4 {Develop and aim at f7.} Nf6 Nc3 c6 Bb3 d5 exd5 cxd5 d4 {White will win f4 back with Bxf4.}`},
],
evans:[
 {name:'Evans Accepted 5...Bc5',eco:'C52',pgn:`e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 {Lasker's defense idea: give back material, stay solid.}`},
 {name:'Evans Declined',eco:'C51',pgn:`e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 {Declined: keep the bishop.} a4 a6 Nc3 Nf6 Nd5 {White gains space on the queenside.}`},
],
catalan:[
 {name:'Closed Catalan',eco:'E08',pgn:`d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O c6 {Black keeps d5 solid.} Qc2 Nbd7 Nbd2 b6 e4 {White breaks in the center.}`},
 {name:'Catalan with ...Bb4+',eco:'E01',pgn:`d4 Nf6 c4 e6 g3 d5 Bg2 Bb4+ {A check to disrupt White's development.} Bd2 Be7 Nf3 O-O O-O c6`},
],
reti:[
 {name:'Réti Gambit Accepted',eco:'A09',pgn:`Nf3 d5 c4 dxc4 {Black takes the pawn.} e3 Nf6 Bxc4 e6 O-O c5 {A Queen's Gambit Accepted structure.}`},
 {name:'Réti vs 2...d4',eco:'A09',pgn:`Nf3 d5 c4 d4 {Black grabs space.} e3 Nc6 exd4 Nxd4 Nxd4 Qxd4 Nc3 {White develops with tempo on the queen.}`},
],
danish:[
 {name:'Danish Declined (3...d5)',eco:'C21',pgn:`e4 e5 d4 exd4 c3 d5 {The safest answer: return the pawn.} exd5 Qxd5 cxd4 Nc6 Nf3 Bg4 Be2 {An isolated pawn position.}`},
],
morra:[
 {name:'Morra Declined (3...Nf6)',eco:'B21',pgn:`e4 c5 d4 cxd4 c3 Nf6 {Decline and hit e4.} e5 Nd5 cxd4 d6 Nf3 Nc6 {Similar to the Alapin Sicilian.}`},
 {name:'Morra with ...a6 and ...Nge7',eco:'B21',pgn:`e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 a6 O-O Nge7 {A safe setup: knight to g6, avoiding traps.}`},
],
friedliver:[
 {name:'Main line 5...Na5',eco:'C58',pgn:`e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 {The correct move: attack the bishop.} Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4 Ne5 {Black has a pawn less but great activity.}`},
 {name:'Traxler Counterattack',eco:'C57',pgn:`e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5 {The Traxler: ignore f7 and counterattack.} Nxf7 Bxf2+ Kxf2 Nxe4+ Kg1 Qh4 g3 Nxg3 hxg3 Qxg3+ Kf1 Rf8 {Wild complications.}`},
],
bishops:[
 {name:'Urusov Gambit',eco:'C24',pgn:`e4 e5 Bc4 Nf6 d4 {The Urusov Gambit.} exd4 Nf3 Nxe4 Qxd4 Nf6 Bg5 Be7 Nc3 {White has fast development for the pawn.}`},
],
jobava:[
 {name:'vs ...g6',eco:'D00',pgn:`d4 Nf6 Nc3 d5 Bf4 g6 e3 Bg7 h4 {A direct h-pawn attack against the fianchetto.}`},
 {name:'vs ...e6 with Nb5',eco:'D00',pgn:`d4 d5 Nc3 Nf6 Bf4 e6 Nb5 {Attacking c7 at once.} Na6 e3 Be7 {Black covers c7.}`},
],
najdorf:[
 {name:'6.Bg5 Main Line',eco:'B96',pgn:`e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 {The classical attack.} e6 f4 Be7 Qf3 Qc7 O-O-O Nbd7 {Opposite-side castling and a sharp fight.}`},
 {name:'6.Be2 Classical',eco:'B92',pgn:`e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 {Grab space with tempo.} Nb3 Be7 O-O O-O Be3 Be6 {A positional battle for d5.}`},
 {name:'6.Bc4 Sozin (Fischer)',eco:'B87',pgn:`e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bc4 {The bishop aims at e6 and f7.} e6 Bb3 b5 O-O Be7 Qf3 Qc7 {Black blunts the bishop and plays on the queenside.}`},
],
dragon:[
 {name:'Classical 6.Be2',eco:'B73',pgn:`e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 O-O O-O Nb3 Nc6 Be3 Be6 f4 Na5 {Black eyes c4.}`},
 {name:'Yugoslav 9.O-O-O',eco:'B77',pgn:`e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 O-O-O d5 {The central strike against opposite castling.} exd5 Nxd5 Nxc6 bxc6 Bd4 {A sharp line with chances for both.}`},
],
sveshnikov:[
 {name:'9.Nd5 Main Line',eco:'B33',pgn:`e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Nd5 Be7 Bxf6 Bxf6 c3 O-O Nc2 Bg5 {Black's dark bishop is a strong piece.}`},
 {name:'7.Nd5',eco:'B33',pgn:`e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Nd5 Nxd5 exd5 Nb8 {The knight reroutes to d7.} c4 Be7`},
],
'french-adv':[
 {name:'Exchange Variation',eco:'C01',pgn:`e4 e6 d4 d5 exd5 exd5 {A symmetrical structure.} Nf3 Nf6 Bd3 Bd6 O-O O-O {Balanced; play for active pieces.}`},
 {name:'Tarrasch 3.Nd2',eco:'C07',pgn:`e4 e6 d4 d5 Nd2 c5 {Hit the center right away.} exd5 Qxd5 Ngf3 cxd4 Bc4 Qd6 O-O Nf6 {Black has an easy game.}`},
 {name:'Classical 3...Nf6',eco:'C14',pgn:`e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O {Black plays ...c5 and ...f6 next.}`},
],
winawer:[
 {name:'Winawer 7.Nf3',eco:'C18',pgn:`e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Nf3 {The positional line.} Qa5 Bd2 Nbc6 {Pressure on c3 and d4.}`},
 {name:'Winawer 4...Ne7',eco:'C17',pgn:`e4 e6 d4 d5 Nc3 Bb4 e5 Ne7 a3 Bxc3+ bxc3 c5 Qg4 Ng6 {The knight defends g7.}`},
],
'caro-classical':[
 {name:'Karpov (4...Nd7)',eco:'B17',pgn:`e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 {Prepares ...Ngf6 without doubled pawns.} Nf3 Ngf6 Nxf6+ Nxf6 Bc4 Bf5 Qe2 e6 Bg5 Be7`},
 {name:'Exchange Variation',eco:'B13',pgn:`e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4 Bg4 Qb3 Qd7 Nd2 e6 {A Queen's Gambit with colors reversed.}`},
 {name:'Panov Attack',eco:'B14',pgn:`e4 c6 d4 d5 exd5 cxd5 c4 {The Panov: play with an isolated pawn.} Nf6 Nc3 e6 Nf3 Be7 cxd5 Nxd5 {Black blockades d5.}`},
],
'caro-adv':[
 {name:'4.Nc3 e6 5.g4',eco:'B12',pgn:`e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 {Chase the bishop.} Bg6 Nge2 c5 h4 h5 Nf4 Bh7 Nxh5 {Very sharp.}`},
 {name:'3...c5',eco:'B12',pgn:`e4 c6 d4 d5 e5 c5 {A French-style strike.} dxc5 e6 Be3 Nd7 Bb5 a6 Bxd7+ Bxd7 {Black wins c5 back.}`},
],
kid:[
 {name:'Sämisch',eco:'E81',pgn:`d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 {Solid center; often White castles long and attacks.} O-O Be3 e5 d5 Nh5 Qd2 f5`},
 {name:'Four Pawns Attack',eco:'E77',pgn:`d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 {Maximum center.} O-O Nf3 c5 d5 e6 Be2 exd5 cxd5 {A Benoni structure.}`},
 {name:'Fianchetto',eco:'E67',pgn:`d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5 e4 {Classical tension in the center.}`},
],
nimzo:[
 {name:'Classical 4.Qc2',eco:'E34',pgn:`d4 Nf6 c4 e6 Nc3 Bb4 Qc2 {Avoids doubled pawns.} O-O a3 Bxc3+ Qxc3 b6 Bg5 Bb7 {Black fights for the light squares.}`},
 {name:'Sämisch 4.a3',eco:'E25',pgn:`d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 {Bishop pair for doubled pawns.} c5 f3 d5 cxd5 Nxd5 {Black targets c3.}`},
 {name:'Rubinstein 4.e3 b6',eco:'E44',pgn:`d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2 {Recapture on c3 with a knight. (The c3 knight is pinned.)} Bb7 a3 Be7 d5`},
],
slav:[
 {name:'Exchange Slav',eco:'D10',pgn:`d4 d5 c4 c6 cxd5 cxd5 {Symmetrical and solid.} Nc3 Nf6 Bf4 Nc6 e3 Bf5 Nf3 e6`},
 {name:'Semi-Slav Meran',eco:'D47',pgn:`d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 {Gain space with tempo.} Bd3 Bb7 {Black plans ...a6 and ...c5.}`},
],
qga:[
 {name:'3.e4 Central Variation',eco:'D20',pgn:`d4 d5 c4 dxc4 e4 {Take the whole center.} e5 {Strike back at once.} Nf3 exd4 Bxc4 Bb4+ Nbd2 Nc6 O-O`},
],
grunfeld:[
 {name:'Russian System',eco:'D97',pgn:`d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 {Pressure on d5.} dxc4 Qxc4 O-O e4 Bg4 Be3 Nfd7 {Black hits the center with pieces.}`},
 {name:'5.Bf4',eco:'D82',pgn:`d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 c5 dxc5 Qa5 Rc1 dxc4 Bxc4 O-O`},
],
scandi:[
 {name:'Modern (2...Nf6)',eco:'B01',pgn:`e4 d5 exd5 Nf6 {Recapture with the knight later.} d4 Nxd5 Nf3 g6 c4 Nb6 Nc3 Bg7`},
 {name:'3...Qd6',eco:'B01',pgn:`e4 d5 exd5 Qxd5 Nc3 Qd6 {The modern queen retreat.} d4 Nf6 Nf3 a6 Be2 Nc6`},
],
pirc:[
 {name:'Austrian Attack',eco:'B09',pgn:`e4 d6 d4 Nf6 Nc3 g6 f4 {The most aggressive answer.} Bg7 Nf3 O-O Bd3 Na6 O-O c5 d5`},
 {name:'150 Attack',eco:'B07',pgn:`e4 d6 d4 Nf6 Nc3 g6 Be3 c6 Qd2 {Plans Bh6 and h4.} b5 f3 Nbd7`},
],
dutch:[
 {name:'Stonewall',eco:'A90',pgn:`d4 f5 g3 Nf6 Bg2 e6 Nf3 d5 {The Stonewall: pawns on c6, d5, e6, f5.} O-O Bd6 c4 c6 b3 Qe7`},
 {name:'Classical',eco:'A96',pgn:`d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Qe8 {The queen swings to h5.}`},
],
petrov:[
 {name:'3.d4',eco:'C43',pgn:`e4 e5 Nf3 Nf6 d4 {Open the center.} Nxe4 Bd3 d5 Nxe5 Nd7 Nxd7 Bxd7 O-O`},
 {name:'5.Nc3',eco:'C42',pgn:`e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Nc3 Nxc3 dxc3 {White castles long and attacks.} Be7 Be3 O-O Qd2 Nd7`},
],
berlin:[
 {name:'Anti-Berlin 4.d3',eco:'C65',pgn:`e4 e5 Nf3 Nc6 Bb5 Nf6 d3 {Avoids the Berlin endgame.} Bc5 c3 O-O O-O d6 h3 a6 Ba4`},
],
benko:[
 {name:'Benko Declined 4.Nf3',eco:'A57',pgn:`d4 Nf6 c4 c5 d5 b5 Nf3 {Decline the pawn.} bxc4 Nc3 g6 e4 d6 Bxc4 Bg7`},
],
'caro-tal':[
 {name:'3...dxe4',eco:'B11',pgn:`e4 c6 Nc3 d5 Nf3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 h5 Bh7 d4 Nd7 {A Classical Caro-Kann structure.}`},
],
};

// ───────────────────────── MORE ANNOTATED OPENINGS ─────────────────────────
LINES.push(
{id:'four-knights',type:'opening',side:'w',eco:'C47',family:'1.e4',name:'Four Knights Game: Scotch',
 desc:'Both sides bring out their knights first. The Scotch version opens the center with d4.',
 pgn:`e4 e5 Nf3 Nc6 Nc3 Nf6 {The Four Knights: all four knights developed.} d4 {The Scotch Four Knights opens the center.} exd4 Nxd4 Bb4 {Pin and pressure on e4.} Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 c6 {A balanced, open position.}`},
{id:'cow',type:'opening',side:'w',eco:'A00',family:'Flank',name:'The Cow',
 desc:'A fun setup popularized by Anna Cramling: e3 and d3, knights to e2 and d2, then out to g3 and b3. Not objectively good, but hard to prepare against.',
 pgn:`e3 {The Cow starts quietly.} e5 d3 d5 Ne2 {The first knight goes to e2...} Nf6 Ng3 {...and on to g3.} Bd6 Nd2 {The second knight...} O-O Nb3 {...lands on b3. The Cow is complete: two "horns" on g3 and b3.}`},
{id:'alien',type:'opening',side:'w',eco:'B15',family:'1.e4',name:'Alien Gambit',
 desc:'A wild knight sacrifice against the Caro-Kann, popularized by Witty Alien. Engines say it is unsound, but it is dangerous in fast games.',
 pgn:`e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Ng5 {The Alien knight hop, eyeing f7.} h6 Nxf7 {The sacrifice!} Kxf7 Bc4+ {Drag the king into the open.} e6 Nf3 {White has a pawn and a lasting attack for the knight.}`}
);
Object.assign(VARIATIONS,{
'four-knights':[
 {name:'Spanish Four Knights',eco:'C48',pgn:`e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 {The Spanish version: a calm, classical game.} Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 {White gets the bishop pair-like pressure; Black is solid.}`},
 {name:'Halloween Gambit',eco:'C47',pgn:`e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 {The Halloween Gambit: a knight for the center!} Nxe5 d4 {Chase the knight with pawns.} Ng6 e5 Ng8 Bc4 {White has a big center and fast development for the piece.}`},
],
});
