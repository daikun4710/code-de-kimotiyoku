"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
class LocalStorage {
    constructor(storage) {
        this.storage = storage;
    }
    getValue(key, def) {
        return this.storage.get(key, def);
    }
    setValue(key, value) {
        this.storage.update(key, value);
    }
}
function activate(context) {
    const storage = new LocalStorage(context.globalState);
    const label = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    label.show();
    context.subscriptions.push(label);
    let total_keypress_count = storage.getValue("total_keypress_count", 0);
    let consecutive_count = 0;
    let timeout_handle;
    const updateLabel = () => {
        // format total_keypress_count as  1,234,567
        let formatted_count = total_keypress_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        label.text = "$(flame)" + formatted_count + (consecutive_count > 0 ? ` | ${consecutive_count} combo` : '');
    };
    updateLabel();
    const onKeyPressed = () => {
        consecutive_count++;
        updateLabel();
        if (timeout_handle) {
            clearTimeout(timeout_handle);
        }
        timeout_handle = setTimeout(() => {
            onConsecutiveEnded();
        }, 3000);
    };
    const onConsecutiveEnded = () => {
        total_keypress_count = storage.getValue("total_keypress_count", 0);
        total_keypress_count += consecutive_count;
        storage.setValue("total_keypress_count", total_keypress_count);
        consecutive_count = 0;
        updateLabel();
    };
    vscode.workspace.onDidChangeTextDocument(event => {
        onKeyPressed();
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map