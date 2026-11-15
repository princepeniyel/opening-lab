# Opening Lab

A chess trainer in a single web page: 35 openings, 19 traps, 34 puzzles, middlegame tactics and endgame drills for White and Black.

**Live site:** https://princepeniyel.github.io/opening-lab/

## Features
- Move-by-move notes for every line, with a next-move arrow
- **Study** mode: you move your side, the opponent replies by itself (book moves, then a small engine if you leave the book)
- **Practice** mode: find the book moves yourself; mistakes are flagged and hints are available
- **Puzzles**: mate-in-1/2 patterns and the key moment of every trap (each solution checked with a solver)
- **Middlegame drills**: forks, skewers and discovered attacks
- **Endgame drills**: play basic mates, opposition, the square rule and the Lucena position against the computer
- Random drill, search by name / ECO code / moves, progress saved in your browser
- Synthesised wooden move, capture, castle, check and game-end sounds

## Editing
Lines live in `src/data.js` (SAN moves with `{comments}`). The UI is `src/app.html`.
After editing, run:

```bash
python3 build.py
```

## Credits
Pieces: Colin M.L. Burnett (cburnett), CC BY-SA 3.0. Move logic: chess.js.

## Mac app
A native macOS app wraps the same trainer and works offline. To build it and install it into `/Applications`:

```bash
./mac/build.sh
```

It needs the Xcode command line tools (`xcode-select --install`).
