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

//beforeDay(前回の更新日)どうしよ

function activate(context) {

    //現在の曜日を取得
 let d = new Date();
 let day = d.getDate();  //日
 let dayofweek = d.getDay(); //曜日
 let changeDay = d.toLocaleDateString();
 let dayStr = d.toLocaleDateString();

 //-----------------------------------------------------------------------


if(beforeDay == null){
   storage.setValue("beforeDay", dayStr);
   //現在の日付と前回の日付が違うか
}else if(beforeDay != dayStr){
    //テキストファイルが変更された回数を初期化
    total_keypress_count = storage.setValue("total_keypress_count", 0);
}




    //要るか分からん
    const storage = new LocalStorage(context.globalState);

    storage.setValue("beforeDay", null);

    

    if(storage.getValue("beforeDay",) == null){
        storage.setValue("beforeDay", dayStr);
        //現在の日付と前回の日付が違うか
     }
     //前回テキストファイルが変更された回数を取得
    let beforeDay = storage.getValue("beforeDay", 5);
     

    let totalCouont = 0;
    

    //VSCodeの右下にボタンを表示
    const label = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    // //↓ちょっとこれ分からんかった
    label.show();
    context.subscriptions.push(label);
    
    const updateLabel = () => {
        // format total_keypress_count as  1,234,567
        //let formatted_count = total_keypress_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        label.text = "$(flame)" + totalCouont + " " + beforeDay;
    };
    updateLabel();

    //テキストファイルが変更された回数を更新
    const onKeyPressed = () => {
        //total_keypress_count = storage.getValue("total_keypress_count", 0);
        totalCouont++;
        //storage.setValue("total_keypress_count", total_keypress_count);
        updateLabel();
    };

    //テキストファイルが変更された時に作動
    vscode.workspace.onDidChangeTextDocument(event => {
        onKeyPressed();
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map