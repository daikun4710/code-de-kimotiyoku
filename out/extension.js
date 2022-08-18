"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");

// const fs = require("fs");

// // 書き込むデータ準備
// const data = "Hello Node";

// // 書き込み
// fs.writeFile("file2.txt", data, (err) => {
//   if (err) throw err;
//   console.log('正常に書き込みが完了しました');
// });

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


// if(beforeDay == null){
//    storage.setValue("beforeDay", dayStr);
//    //現在の日付と前回の日付が違うか
// }else if(beforeDay != dayStr){
//     //テキストファイルが変更された回数を初期化
//     total_keypress_count = storage.setValue("total_keypress_count", 0);
// }



    //要るか分からん
    const storage = new LocalStorage(context.globalState);

    let beforeDay;

    // if(storage.getValue("beforeDay",0) == null){
    //     storage.setValue("beforeDay", dayStr);
    //     //現在の日付と前回の日付が違うか
    //  }
     //前回テキストファイルが変更された回数を取得
     
     //beforeDay = storage.getValue("beforeDay", 0);

    let totalCount = 0;
    

    //VSCodeの右下にボタンを表示
    const label = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    // //↓ちょっとこれ分からんかった
    label.show();
    context.subscriptions.push(label);
    beforeDay = storage.getValue("beforeDay",0);

    
    const updateLabel = () => {
        // format total_keypress_count as  1,234,567
        //let formatted_count = total_keypress_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        label.text = "$(flame)" + totalCount + " " + beforeDay;
    };
    
    updateLabel();
    

    //テキストファイルが変更された回数を更新
    const onKeyPressed = () => {
            //現在の曜日を取得
        d = new Date(2022,8,20);
        day = d.getDate();  //日
        dayofweek = d.getDay(); //曜日
        changeDay = d.toLocaleDateString();
        dayStr = d.toLocaleDateString();

        //前回の日付の更新、変数のリセット
        if(storage.getValue("beforeDay",0) !== dayStr){
            storage.setValue("beforeDay", dayStr);
            beforeDay = storage.getValue("beforeDay",0);
        }
        //total_keypress_count = storage.getValue("total_keypress_count", 0);
        totalCount++;
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