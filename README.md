# Opening Lab

A chess trainer in a single web page: 35 openings with 110 lines (main lines plus variations), 19 traps, 34 puzzles, middlegame tactics and endgame drills for White and Black.

**Live site:** https://princepeniyel.github.io/opening-lab/

## Download the desktop app
Get the latest version from the [Releases page](https://github.com/princepeniyel/opening-lab/releases/latest). It works offline.

- **Mac** (Apple Silicon and Intel, macOS 13+): download `Opening-Lab-mac.zip`, unzip it and drag **Opening Lab** to Applications.
  The app isn't notarized by Apple, so the first time: right-click the app → **Open** → **Open**
  (or System Settings → Privacy & Security → **Open Anyway**).
- **Windows** (10/11, 64-bit): download `Opening-Lab-Windows.zip`, right-click → **Extract All**, then run **Opening Lab.exe**.
  If SmartScreen warns about an unknown publisher, click **More info** → **Run anyway**.

## Features
- Move-by-move notes for every line, with a next-move arrow
- **Study** mode: you move your side, the opponent replies by itself (book moves, then a small engine if you leave the book)
- **Practice** mode: find the book moves yourself; mistakes are flagged and hints are available
- **Puzzles**: mate-in-1/2 patterns and the key moment of every trap (each solution checked with a solver)
- **Middlegame drills**: forks, skewers and discovered attacks
- **Endgame drills**: play basic mates, opposition, the square rule and the Lucena position against the computer
- Random drill, search by name / ECO code / moves, progress saved in your browser

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

## Windows app
Built with Electron from your Mac or any PC:

```bash
python3 build.py && cp mac/index.html win/index.html && cd win && npm install && npm run dist
```

The zip lands in `win/dist/`.
