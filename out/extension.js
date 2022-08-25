
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");


function activate(context) {

    //現在の日付を取得
    let d = new Date();
    let day = d.getDate();  //日
    let dayofweek = d.getDay(); //曜日
    let dayStr = d.toLocaleDateString();
    
    //現在の日付のコピー
    let changeDate = d;
    let changeDay = changeDate.getDate();
    let changeDayStr = changeDate.toLocaleDateString();

    let weekLen = 7;
    let col = 6;
    let dayArrLen = weekLen * col;
    //現在の日付のインデックス値を指定
    let startDay = weekLen - dayofweek - 1;

    //前回開いた日付のインデックス値
    let beforeDayPlace = 0;
    let backNum = 0;
    let dayofweekSpace = 0;

    let beforeDayStr;
    let consecutive_count = 0;
    let timeout_handle;
    let totalCount = 0;

    //パスの取得
    const path = context.asAbsolutePath("");

    //バックスラッシュ置換パス
    const newPath = path.replaceAll('\\','/');
    const absolutePath = newPath.replace('c','C');

    let data = fs.readFileSync(absolutePath + "/out/file2.json", "utf-8");
    let datajs = JSON.parse(data);

    //初めて拡張機能を開いたとき(OK)
    if(datajs.beforeDayStr1 == ""){
        
        let oneBackDate = d;

        for(let setday = startDay; setday < dayArrLen; setday++){
            let oneBackDay = oneBackDate.toLocaleDateString();
            datajs.dayArr[setday] = oneBackDay;
            oneBackDate.setDate(oneBackDate.getDate() - 1);
        }

        datajs.beforeDayStr1 = dayStr;
        beforeDayStr = datajs.beforeDayStr1;
        datajs.beforeDayofweek = dayofweek;
        data = JSON.stringify(datajs,null,4);
        fs.writeFileSync(absolutePath + "/out/file2.json", data, (err) => {
            if (err) throw err;
            console.log('正常に書き込みが完了しました');
        });
        
    //現在の日付と前回の日付が違かったら、順番を整理する
    }else if(datajs.beforeDayStr1 != dayStr){

        //表示する範囲で前回開いた日付が何日前かを求める
        for(let offDay = 0; offDay < dayArrLen - (6 - dayofweek); offDay++){
            if(datajs.beforeDayStr1 == changeDayStr){
                break;
            }
            changeDate.setDate(changeDate.getDate() - 1);
            changeDayStr = changeDate.toLocaleDateString();
            beforeDayPlace++;
        }

        //changeDateの初期化
        changeDate = new Date();
        changeDayStr = changeDate.toLocaleDateString();

        if(beforeDayPlace >= 7 || datajs.beforeDayofweek > dayofweek){
            let startBeforeDay = weekLen - datajs.beforeDayofweek - 1;
            //移動する距離
            let moveDistance = beforeDayPlace + startDay - startBeforeDay;
            //データをmoveDistance分ずらし、totalCountをmoveDistance分0埋めする(OK)
            for(let replaceDay = moveDistance; replaceDay >= 1; replaceDay--){
                datajs.totalCountArr.unshift(0);
                datajs.totalCountArr.pop();
            }
        }

        //日付を最新の状態にする(OK)
        for(let setday = 0; setday < dayArrLen; setday++){
            if(setday < startDay){
                datajs.dayArr[setday] = "";
                continue;
            }
            datajs.dayArr[setday] = changeDayStr;
            changeDate.setDate(changeDate.getDate() - 1);
            changeDayStr = changeDate.toLocaleDateString();
        }

        changeDate = d;
        changeDayStr = changeDate.toLocaleDateString();
        datajs.beforeDayStr1 = dayStr;
        beforeDayStr = datajs.beforeDayStr1;
        datajs.beforeDayofweek = dayofweek;

        data = JSON.stringify(datajs,null,4);
        fs.writeFileSync(absolutePath + "/out/file2.json", data, (err) => {
            if (err) throw err;
            console.log('正常に書き込みが完了しました');
        });
    }

    data = fs.readFileSync(absolutePath + "/out/file2.json", "utf-8");
    datajs = JSON.parse(data);

    beforeDayStr = datajs.beforeDayStr1;

    data = JSON.stringify(datajs,null,4);
    fs.writeFileSync(absolutePath + "/out/file2.json", data, (err) => {
        if (err) throw err;
        console.log('正常に書き込みが完了しました');
    });

    //VSCodeの右下にボタンを表示
    const button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    // //↓ちょっとこれ分からんかった
    button.command = 'vscode-omikuji.helloWorld';
    button.text = "$(flame)" + datajs.totalCountArr[startDay] + " " + beforeDayStr;
    context.subscriptions.push(button);
    button.show();
    
    const updateLabel = () => {
        button.text = "$(flame)" + datajs.totalCountArr[startDay] + " 頑張りを見る";
    };
    const updateLabelAction = () => {
        button.text = "$(flame)" + "処理中です" + "$(flame)";
    }

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-omikuji.helloWorld', () => {
            let term = vscode.window.createTerminal('Dawn');
            term.sendText(`cd ` + absolutePath);
            term.show();
            term.sendText(`npx webpack`);
            updateLabelAction();
            setTimeout(() => {
                vscode.env.openExternal(vscode.Uri.parse("file:///" + absolutePath + "/out/index.html",true));
                updateLabel();
            }, 15000);
        })
    );

    
    
    
    updateLabel();
    
     const onKeyPressed = () => {
        consecutive_count++;
        updateLabel();
        if(timeout_handle){
            clearTimeout(timeout_handle);
        }
        timeout_handle = setTimeout(() => {
            onConsecutiveEnded();
        }, 1000);
    }

    //テキストファイルが変更された回数を更新
    const onConsecutiveEnded = () => {


        totalCount += consecutive_count;

        //jsonファイル読み込み
        data = fs.readFileSync(absolutePath + "/out/file2.json", "utf-8");
        datajs = JSON.parse(data);
        
        let counts = datajs.totalCountArr[startDay];
        datajs.totalCountArr[startDay] = counts + consecutive_count;

        //josnファイル書き込み
        data = JSON.stringify(datajs,null,4);
        fs.writeFileSync(absolutePath + "/out/file2.json", data, (err) => {
            if (err) throw err;
        });

        consecutive_count = 0;
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