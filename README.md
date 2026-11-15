# Opening Lab

A chess opening trainer in a single web page. Study and drill 35 openings and 19 traps for White and Black.

**Live site:** https://princepeniyel.github.io/opening-lab/

## Features
- Move-by-move notes for every line, with a next-move arrow
- **Study** mode: you move your side, the opponent replies by itself (book moves, then a small engine if you leave the book)
- **Practice** mode: find the book moves yourself; mistakes are flagged and hints are available
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
