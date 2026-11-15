// Sets the Windows .exe icon and version info in pure JS (no Wine needed on macOS).
const fs = require('fs');
const path = require('path');
const ResEdit = require('resedit');

function pngToIco(png) {               // single 256px PNG-compressed ICO entry
  const h = Buffer.alloc(22);
  h.writeUInt16LE(0, 0); h.writeUInt16LE(1, 2); h.writeUInt16LE(1, 4);
  h.writeUInt8(0, 6); h.writeUInt8(0, 7); h.writeUInt8(0, 8); h.writeUInt8(0, 9);
  h.writeUInt16LE(1, 10); h.writeUInt16LE(32, 12); h.writeUInt32LE(png.length, 14); h.writeUInt32LE(22, 18);
  return Buffer.concat([h, png]);
}

exports.default = async function (ctx) {
  if (ctx.electronPlatformName !== 'win32') return;
  const exe = path.join(ctx.appOutDir, ctx.packager.appInfo.productFilename + '.exe');
  const png = fs.readFileSync(path.join(__dirname, 'icon-256.png'));
  const ico = pngToIco(png);
  fs.writeFileSync(path.join(__dirname, 'icon.ico'), ico);
  const data = fs.readFileSync(exe);
  const pe = ResEdit.NtExecutable.from(data, { ignoreCert: true });
  const res = ResEdit.NtExecutableResource.from(pe);
  const iconFile = ResEdit.Data.IconFile.from(ico);
  const groups = ResEdit.Resource.IconGroupEntry.fromEntries(res.entries);
  const id = groups.length ? groups[0].id : 1, lang = groups.length ? groups[0].lang : 1033;
  ResEdit.Resource.IconGroupEntry.replaceIconsForResource(res.entries, id, lang, iconFile.icons.map(i => i.data));
  const vi = ResEdit.Resource.VersionInfo.fromEntries(res.entries)[0];
  if (vi) {
    const l = { lang: 1033, codepage: 1200 };
    vi.setStringValues(l, { FileDescription: 'Opening Lab', ProductName: 'Opening Lab', CompanyName: 'princepeniyel', OriginalFilename: 'Opening Lab.exe', InternalName: 'Opening Lab' });
    vi.setFileVersion(1, 0, 0, 0, 1033); vi.setProductVersion(1, 0, 0, 0, 1033);
    vi.outputToResourceEntries(res.entries);
  }
  res.outputResource(pe);
  fs.writeFileSync(exe, Buffer.from(pe.generate()));
  console.log('  • set icon and version info on', path.basename(exe));
};
