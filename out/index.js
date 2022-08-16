
console.log(total_keypress_count);
const body = document.getElementById('body');

const content = document.getElementById('content');

//曜日によって変更する位置が変更される

const dayArr = ['日', '月', '火', '水', '木', '金', '土'];


//レイアウトの作成(col)
for (let i = 0; i < 25; i++) {
    const contentRow = document.createElement('div');
    contentRow.setAttribute('class', 'contentRow');
    contentRow.style.display = 'flex';
    content.appendChild(contentRow);
    for (let j = 0; j < 7; j++) {
        const contentCol = document.createElement('div');
        contentCol.id = i * 10 + j;
        contentCol.setAttribute('class', 'contentCol');
        contentCol.style.width = '200px';
        contentCol.style.height = '200px';
        contentRow.appendChild(contentCol);
    }
}

//現在の日にちから現在の週の日曜日までの日付を出力
for(let m = dayofweek; m >= 0; m--){
    let contentDay = document.getElementById(m);
    contentDay.innerHTML = dayStr;
    day = d.setDate(d.getDate() - 1);
    dayStr = d.toLocaleDateString();
}

//残りの日付を出力
for (let k = 1; k < 25; k++) {
    for (let l = 6; l >= 0; l--) {
        let contentDay = document.getElementById(k * 10 + l);
        contentDay.innerHTML = dayStr;
        day = d.setDate(d.getDate() - 1);
        dayStr = d.toLocaleDateString();
        
    }
}


//表示するdivのタグ数の取得



//曜日によって表示するdivの取得



 //前回の日付を取得したい
 let beforeDay = storage.getValue("beforeDay", 0);

if(beforeDay == null){
   storage.setValue("beforeDay", dayStr);
   //現在の日付と前回の日付が違うか
}else if(beforeDay != dayStr){
    //テキストファイルが変更された回数を初期化
    total_keypress_count = storage.setValue("total_keypress_count", 0);
}

