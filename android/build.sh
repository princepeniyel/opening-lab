#!/bin/bash
# Builds Opening-Lab-Android.apk without Gradle, using the Android SDK command-line tools.
# Needs Java 17 and the Android SDK (platform 34, build-tools 34.0.0). Defaults to ~/Library/Caches/OpeningLab-Android.
set -euo pipefail
cd "$(dirname "$0")/.."
T="${OPENINGLAB_ANDROID:-$HOME/Library/Caches/OpeningLab-Android}"
export JAVA_HOME="${JAVA_HOME:-$T/jdk/Contents/Home}"
SDK="${ANDROID_HOME:-$T/sdk}"; BT="$SDK/build-tools/34.0.0"; JAR="$SDK/platforms/android-34/android.jar"
KEY="${OPENINGLAB_KEYSTORE:-$T/openinglab-release.jks}"
python3 build.py
OUT=android/build; rm -rf "$OUT"; mkdir -p "$OUT/res" "$OUT/gen" "$OUT/classes" "$OUT/assets"
cp mac/index.html "$OUT/assets/index.html"

"$BT/aapt2" compile --dir android/res -o "$OUT/res.zip"
"$BT/aapt2" link -o "$OUT/base.apk" -I "$JAR" --manifest android/AndroidManifest.xml "$OUT/res.zip" \
  -A "$OUT/assets" --java "$OUT/gen" --min-sdk-version 24 --target-sdk-version 34 --version-code 2 --version-name 1.2
"$JAVA_HOME/bin/javac" -nowarn --release 8 -classpath "$JAR" -d "$OUT/classes" \
  $(find android/src "$OUT/gen" -name '*.java') 2>&1 | grep -v "^warning\|^Note\|^1 warning" || true
"$BT/d8" --release --min-api 24 --lib "$JAR" --output "$OUT" $(find "$OUT/classes" -name '*.class')
cp "$OUT/base.apk" "$OUT/unsigned.apk" && (cd "$OUT" && zip -q unsigned.apk classes.dex)
"$BT/zipalign" -f -p 4 "$OUT/unsigned.apk" "$OUT/aligned.apk"

# Signing key: created once and kept outside the repo. Keep it safe: updates must be signed with the same key.
if [ ! -f "$KEY" ]; then
  "$JAVA_HOME/bin/keytool" -genkeypair -keystore "$KEY" -alias openinglab -keyalg RSA -keysize 2048 -validity 10000 \
    -storepass openinglab -keypass openinglab -dname "CN=Opening Lab" >/dev/null 2>&1
fi
"$BT/apksigner" sign --ks "$KEY" --ks-pass pass:openinglab --key-pass pass:openinglab --out "$OUT/Opening-Lab-Android.apk" "$OUT/aligned.apk"
"$BT/apksigner" verify "$OUT/Opening-Lab-Android.apk" && echo "Built $OUT/Opening-Lab-Android.apk"
