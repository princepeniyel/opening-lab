import Cocoa

// Draws the 1024px app icon: green rounded square with a white pawn.
let size: CGFloat = 1024
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: Int(size), pixelsHigh: Int(size), bitsPerSample: 8,
                           samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB,
                           bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)

let tile = NSRect(x: 100, y: 100, width: 824, height: 824)
let shadow = NSShadow(); shadow.shadowBlurRadius = 24; shadow.shadowOffset = NSSize(width: 0, height: -10)
shadow.shadowColor = NSColor(white: 0, alpha: 0.35)
NSGraphicsContext.saveGraphicsState(); shadow.set()
let bg = NSBezierPath(roundedRect: tile, xRadius: 185, yRadius: 185)
NSColor(red: 0.37, green: 0.56, blue: 0.22, alpha: 1).setFill(); bg.fill()
NSGraphicsContext.restoreGraphicsState()
NSGradient(starting: NSColor(red: 0.62, green: 0.80, blue: 0.40, alpha: 1),
           ending: NSColor(red: 0.33, green: 0.53, blue: 0.20, alpha: 1))!.draw(in: bg, angle: -90)

// subtle board squares in the corner
NSColor(white: 1, alpha: 0.07).setFill()
for i in 0..<4 { for j in 0..<4 where (i + j) % 2 == 0 {
    NSBezierPath(rect: NSRect(x: 100 + CGFloat(i) * 103, y: 100 + CGFloat(j) * 103, width: 103, height: 103)).fill() } }
bg.addClip()

let pawnShadow = NSShadow(); pawnShadow.shadowBlurRadius = 18; pawnShadow.shadowOffset = NSSize(width: 0, height: -12)
pawnShadow.shadowColor = NSColor(white: 0, alpha: 0.3)
NSGraphicsContext.saveGraphicsState(); pawnShadow.set()
NSColor.white.setFill()
NSBezierPath(ovalIn: NSRect(x: 512 - 112, y: 640, width: 224, height: 224)).fill()          // head
NSBezierPath(roundedRect: NSRect(x: 512 - 150, y: 590, width: 300, height: 64), xRadius: 32, yRadius: 32).fill() // collar
let body = NSBezierPath()
body.move(to: NSPoint(x: 330, y: 300))
body.curve(to: NSPoint(x: 445, y: 600), controlPoint1: NSPoint(x: 360, y: 420), controlPoint2: NSPoint(x: 440, y: 470))
body.line(to: NSPoint(x: 579, y: 600))
body.curve(to: NSPoint(x: 694, y: 300), controlPoint1: NSPoint(x: 584, y: 470), controlPoint2: NSPoint(x: 664, y: 420))
body.close(); body.fill()
NSBezierPath(roundedRect: NSRect(x: 280, y: 215, width: 464, height: 110), xRadius: 40, yRadius: 40).fill() // base
NSGraphicsContext.restoreGraphicsState()

NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: CommandLine.arguments[1]))
