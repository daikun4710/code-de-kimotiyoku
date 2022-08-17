


const content = document.getElementById('content');

//曜日によって変更する位置が変更される

const dayArr = ['日', '月', '火', '水', '木', '金', '土'];

    //現在の曜日を取得
    let d = new Date();
    let day = d.getDate();  //日
    let dayofweek = d.getDay(); //曜日
    let changeDay = d.toLocaleDateString();
    let dayStr = d.toLocaleDateString().substring(5);

    let contentRow;
    let contentCol;
//レイアウトの作成(col)
for (let i = 0; i < 25; i++) {
    contentRow = document.createElement('div');
    contentRow.setAttribute('class', 'contentRow');
    contentRow.style.display = 'flex';
    content.appendChild(contentRow);
    for (let j = 0; j < 7; j++) {
        contentCol = document.createElement('div');
        contentCol.id = i * 10 + j;
        contentCol.setAttribute('class', 'contentCol');
        contentCol.style.width = '100px';
        contentCol.style.height = '100px';
        contentCol.style.marginRight = '5px';
        contentCol.style.marginBottom = '5px';
        contentRow.appendChild(contentCol);
    }
}

//現在の日にちから現在の週の日曜日までの日付を出力
for(let m = dayofweek; m >= 0; m--){
    let contentDay = document.getElementById(m);
    contentDay.innerHTML = dayStr;
    contentDay.style.backgroundColor = '#f5f5f5';
    day = d.setDate(d.getDate() - 1);
    dayStr = d.toLocaleDateString().substring(5);
}

//残りの日付を出力
for (let k = 1; k < 25; k++) {
    for (let l = 6; l >= 0; l--) {
        let contentDay = document.getElementById(k * 10 + l);
        contentDay.innerHTML = dayStr;
        contentDay.style.backgroundColor = '#f5f5f5';
        day = d.setDate(d.getDate() - 1);
        dayStr = d.toLocaleDateString().substring(5);
        
    }
}




//表示するdivのタグ数の取得



//曜日によって表示するdivの取得



