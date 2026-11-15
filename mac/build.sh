#!/bin/bash
# Builds "Opening Lab.app" and installs it into /Applications.
set -euo pipefail
cd "$(dirname "$0")/.."
python3 build.py

OUT=mac/build
APP="$OUT/Opening Lab.app"
rm -rf "$OUT" && mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

# Icon (from brand/icon-1024.png)
cp brand/icon-1024.png "$OUT/icon1024.png"
ICONSET="$OUT/AppIcon.iconset"; mkdir -p "$ICONSET"
for s in 16 32 128 256 512; do
  sips -z $s $s "$OUT/icon1024.png" --out "$ICONSET/icon_${s}x${s}.png" >/dev/null
  sips -z $((s*2)) $((s*2)) "$OUT/icon1024.png" --out "$ICONSET/icon_${s}x${s}@2x.png" >/dev/null
done
iconutil -c icns "$ICONSET" -o "$APP/Contents/Resources/AppIcon.icns"

# App
# Universal binary (Apple Silicon + Intel), runs on macOS 13 and later
for arch in arm64 x86_64; do
  swiftc -O -target $arch-apple-macos13.0 mac/main.swift -o "$OUT/OpeningLab-$arch" -framework Cocoa -framework WebKit
done
lipo -create "$OUT/OpeningLab-arm64" "$OUT/OpeningLab-x86_64" -output "$APP/Contents/MacOS/OpeningLab"
cp mac/index.html "$APP/Contents/Resources/index.html"
cat > "$APP/Contents/Info.plist" <<'PLIST'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>CFBundleName</key><string>Opening Lab</string>
  <key>CFBundleDisplayName</key><string>Opening Lab</string>
  <key>CFBundleIdentifier</key><string>io.github.princepeniyel.openinglab</string>
  <key>CFBundleExecutable</key><string>OpeningLab</string>
  <key>CFBundleIconFile</key><string>AppIcon</string>
  <key>CFBundlePackageType</key><string>APPL</string>
  <key>CFBundleShortVersionString</key><string>1.3</string>
  <key>CFBundleVersion</key><string>1</string>
  <key>LSMinimumSystemVersion</key><string>13.0</string>
  <key>LSApplicationCategoryType</key><string>public.app-category.board-games</string>
  <key>NSHighResolutionCapable</key><true/>
  <key>NSHumanReadableCopyright</key><string>Pieces by Colin M.L. Burnett, CC BY-SA 3.0</string>
</dict></plist>
PLIST
codesign --force --deep -s - "$APP"

# Downloadable zip
(cd "$OUT" && ditto -c -k --sequesterRsrc --keepParent "Opening Lab.app" Opening-Lab-mac.zip)

# Install
rm -rf "/Applications/Opening Lab.app"
cp -R "$APP" /Applications/
touch "/Applications/Opening Lab.app"
echo "Installed /Applications/Opening Lab.app"
