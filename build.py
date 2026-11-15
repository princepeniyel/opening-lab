"""Build index.html (GitHub Pages) and opening-lab.html (fragment) from src/."""
import pathlib
root = pathlib.Path(__file__).parent
src = root / "src"
page = (src / "app.html").read_text()
page = page.replace("/*PIECES*/", (src / "pieces.js").read_text()).replace("/*DATA*/", (src / "data.js").read_text())
(root / "opening-lab.html").write_text(page)
head = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
title_end = page.index("</style>") + len("</style>")
(root / "index.html").write_text(head + page[:title_end] + "\n</head><body>\n" + page[title_end:] + "\n</body></html>\n")
# Offline copy for the Mac app: chess.js inlined, no network needed.
cdn = '<script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"></script>'
offline = (root / "index.html").read_text().replace(cdn, "<script>" + (src / "vendor" / "chess.min.js").read_text() + "</script>")
(root / "mac" / "index.html").write_text(offline)
print("built index.html, opening-lab.html and mac/index.html")
