
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");

// 書き込むデータ準備

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
    // let formatted = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`.replace(/\n|\r/g, '');

    //試験的
    //保存された場所C:\Users\iwasaki\AppData\Local\Programs\Microsoft VS Code
    //保存したい場所C:\Users\iwasaki\.vscode\extensions\amiralrouter.keypress-counter-1.0.0\out
    let obj = {
        "dayArr":[
            "","","","","","","",
            "","","","","","","",
            "","","","","","","",
            "","","","","","","",
            "","","","","","","",
            "","","","","","",""
        ],
        "totalCountArr":[
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0
        ]
    };
    //json型に変換
    let data = JSON.stringify(obj,null,4);
    //javascript型に変換
    let datajs = JSON.parse(data);
    
 //ここまでは思ったように動いてる----------------------------------------------------------------------------------------------------
    // let jsonText = fs.readFileSync("../../../../.vscode/extensions/amiralrouter.keypress-counter-1.0.0/out/file2.json", "utf-8");
    
    //要るか分からん
    const storage = new LocalStorage(context.globalState);
    let beforeDay;
    storage.setValue("beforeDay", d);

    //試験的
    let pastDay = new Date('2022-8-25');
    // pastDay.setTime(data.getTime() + 1000*60*60*9);

    if(storage.getValue("beforeDay",0) == null){
        storage.setValue("beforeDay", d);

        //動く
        let oneBackDate = new Date();

        for(let setday = 0; setday < datajs.dayArr.length; setday++){
            let oneBackDay = oneBackDate.toLocaleDateString().substring(5);
            datajs.dayArr[setday] = oneBackDay;
            oneBackDate.setDate(oneBackDate.getDate() - 1);
        }
        data = JSON.stringify(datajs,null,4);
        fs.writeFileSync("../../../../.vscode/extensions/amiralrouter.keypress-counter-1.0.0/out/file2.json", data, (err) => {
            if (err) throw err;
            console.log('正常に書き込みが完了しました');
          });
        
        //現在の日付と前回の日付が違うか
     }else if(storage.getValue("beforeDay",0).toLocaleDateString() != pastDay.toLocaleDateString()){

        let distDate = new Date();
        // distDate = storage.getValue("beforeDay",0);
        // let diffMilliSec = distDate.getTime() - pastDay.getTime();
        let diffDays = parseInt((distDate - pastDay) / 1000 / 60 / 60 / 24);
        
        for(let offDay = 0; offDay < 5; offDay++){
            datajs.dayArr[offDay] = diffDays;
        }
        
        data = JSON.stringify(datajs,null,4);
        fs.writeFileSync("../../../../.vscode/extensions/amiralrouter.keypress-counter-1.0.0/out/file2.json", data, (err) => {
            if (err) throw err;
            console.log('正常に書き込みが完了しました');
          });
         //テキストファイルが変更された回数を初期化
         //storage.setValue("beforeDay", d);
        //  total_keypress_count = storage.setValue("total_keypress_count", 0);
     }

    // if(storage.getValue("beforeDay",0) != dayStr){
    //     storage.setValue("beforeDay", dayStr);
    //     //現在の日付と前回の日付が違うか
    //  }
     //前回テキストファイルが変更された回数を取得
     
     //beforeDay = storage.getValue("beforeDay", 0);

    let totalCount = 0;
    
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-omikuji.helloWorld', () => {
            // vscode.window.showInformationMessage('ヤハ！');
            vscode.env.openExternal(vscode.Uri.parse('file:///C:/Users/iwasaki/.vscode/extensions/amiralrouter.keypress-counter-1.0.0/out/index.html',true));
            //file:///C:/Users/iwasaki/.vscode/extensions/amiralrouter.keypress-counter-1.0.0/out/index.html
        })
    );

    //VSCodeの右下にボタンを表示
    const button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    // //↓ちょっとこれ分からんかった
    button.command = 'vscode-omikuji.helloWorld';
    button.text = "$(flame)" + totalCount + " " + beforeDay;
    context.subscriptions.push(button);
    button.show();
    beforeDay = storage.getValue("beforeDay",0).toLocaleDateString();

    
    const updateLabel = () => {
        // format total_keypress_count as  1,234,567
        //let formatted_count = total_keypress_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        button.text = "$(flame)" + totalCount + " " + beforeDay;
    };
    
    updateLabel();
    

    //テキストファイルが変更された回数を更新
    const onKeyPressed = () => {
            //現在の曜日を取得
        d = new Date();
        dayStr = d.toLocaleDateString();

        //前回の日付の更新、変数のリセット
        // if(storage.getValue("beforeDay",0).toLocaleDateString() != d.toLocaleDateString()){
        //     storage.setValue("beforeDay", d);
        //     beforeDay = storage.getValue("beforeDay",0).toLocaleDateString();
        // }

        totalCount++;
        updateLabel();

        //total_keypress_count = storage.getValue("total_keypress_count", 0);
        //storage.setValue("total_keypress_count", total_keypress_count);

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