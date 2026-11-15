import Cocoa
import WebKit

// Opening Lab for macOS: a native window that hosts the bundled, offline trainer page.
final class AppDelegate: NSObject, NSApplicationDelegate, WKNavigationDelegate {
    var window: NSWindow!
    var web: WKWebView!

    func applicationDidFinishLaunching(_ notification: Notification) {
        let config = WKWebViewConfiguration()
        config.mediaTypesRequiringUserActionForPlayback = []
        config.websiteDataStore = .default()   // keeps your mastered lines between launches

        web = WKWebView(frame: .zero, configuration: config)
        web.navigationDelegate = self
        web.setValue(false, forKey: "drawsBackground")

        window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 1320, height: 860),
                          styleMask: [.titled, .closable, .miniaturizable, .resizable],
                          backing: .buffered, defer: false)
        window.title = "Opening Lab"
        window.titlebarAppearsTransparent = true
        window.appearance = NSAppearance(named: .darkAqua)
        window.backgroundColor = NSColor(red: 0x31 / 255, green: 0x2e / 255, blue: 0x2b / 255, alpha: 1)
        window.minSize = NSSize(width: 960, height: 660)
        window.contentView = web
        window.center()
        window.setFrameAutosaveName("OpeningLabMain")
        window.makeKeyAndOrderFront(nil)

        loadPage()
        NSApp.activate(ignoringOtherApps: true)
    }

    func loadPage() {
        guard let url = Bundle.main.url(forResource: "index", withExtension: "html") else { return }
        web.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
    }

    // Open outside links in the default browser instead of inside the app.
    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = action.request.url, url.scheme == "http" || url.scheme == "https" {
            NSWorkspace.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }

    @objc func reloadPage(_ sender: Any?) { loadPage() }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }
}

func buildMenu() -> NSMenu {
    let main = NSMenu()

    let appItem = NSMenuItem(); main.addItem(appItem)
    let appMenu = NSMenu()
    appMenu.addItem(withTitle: "About Opening Lab", action: #selector(NSApplication.orderFrontStandardAboutPanel(_:)), keyEquivalent: "")
    appMenu.addItem(.separator())
    appMenu.addItem(withTitle: "Hide Opening Lab", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
    appMenu.addItem(.separator())
    appMenu.addItem(withTitle: "Quit Opening Lab", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
    appItem.submenu = appMenu

    let editItem = NSMenuItem(); main.addItem(editItem)
    let edit = NSMenu(title: "Edit")
    edit.addItem(withTitle: "Undo", action: Selector(("undo:")), keyEquivalent: "z")
    edit.addItem(.separator())
    edit.addItem(withTitle: "Cut", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
    edit.addItem(withTitle: "Copy", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
    edit.addItem(withTitle: "Paste", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
    edit.addItem(withTitle: "Select All", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")
    editItem.submenu = edit

    let viewItem = NSMenuItem(); main.addItem(viewItem)
    let view = NSMenu(title: "View")
    view.addItem(withTitle: "Reload", action: #selector(AppDelegate.reloadPage(_:)), keyEquivalent: "r")
    let fs = view.addItem(withTitle: "Enter Full Screen", action: #selector(NSWindow.toggleFullScreen(_:)), keyEquivalent: "f")
    fs.keyEquivalentModifierMask = [.command, .control]
    viewItem.submenu = view

    let winItem = NSMenuItem(); main.addItem(winItem)
    let win = NSMenu(title: "Window")
    win.addItem(withTitle: "Minimize", action: #selector(NSWindow.performMiniaturize(_:)), keyEquivalent: "m")
    win.addItem(withTitle: "Close", action: #selector(NSWindow.performClose(_:)), keyEquivalent: "w")
    winItem.submenu = win
    NSApp.windowsMenu = win

    return main
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.mainMenu = buildMenu()
app.run()
