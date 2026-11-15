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
print("built index.html and opening-lab.html")
