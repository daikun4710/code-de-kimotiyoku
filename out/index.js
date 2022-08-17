
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

    //左が濃い
    let colorArr = [
        ['#022D10', '#088D34', '#3AF478', '#CBFCDB'],//緑
        ['#8F1209', '#EF1E0F', '#F34A3E', '#F9A49E'],//赤
        ['#0E0157', '#1E02BC', '#4727FD', '#9D8CFE'] //青
    ];

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
        contentCol.style.height = '75px';
        contentCol.style.marginRight = '5px';
        contentCol.style.marginBottom = '5px';
        contentRow.appendChild(contentCol);
    }
}


let contentDay;
//現在の日にちから現在の週の日曜日までの日付を出力
for(let m = dayofweek; m >= 0; m--){
    contentDay = document.getElementById(m);
    contentDay.innerHTML = dayStr;
    contentDay.style.backgroundColor = '#022D10';
    day = d.setDate(d.getDate() - 1);
    dayStr = d.toLocaleDateString().substring(5);
}

//残りの日付を出力
for (let k = 1; k < 25; k++) {
    for (let l = 6; l >= 0; l--) {
        contentDay = document.getElementById(k * 10 + l);
        contentDay.innerHTML = dayStr;
        contentDay.style.backgroundColor = '#dcdcdc';
        day = d.setDate(d.getDate() - 1);
        dayStr = d.toLocaleDateString().substring(5);
        
    }
}




//【仮】試験的に、書いた回数、左が最新
let totalCountArr = [4000,3000,2000,1000,0,2000,500];


//【仮】選択した色の二次元配列の番号を入れる。緑=0、赤=1、青=2、初期値=0
let selectColorNum = 0;
//【仮】対象のdiv要素を示す変数
let kariokiba;
let i = 0;

//初回起動時の色の振り分け
for(let n = dayofweek; n >= 0; n--){
    kariokiba = document.getElementById(n);
    if(totalCountArr[i] >= 4000){
        kariokiba.style.backgroundColor = colorArr[selectColorNum][0];
    }else if(totalCountArr[i] >= 3000){
        kariokiba.style.backgroundColor = colorArr[selectColorNum][1];
    }else if(totalCountArr[i] >= 2000){
        kariokiba.style.backgroundColor = colorArr[selectColorNum][2];
    }else if(totalCountArr[i] >= 1000){
        kariokiba.style.backgroundColor = colorArr[selectColorNum][3];
    }else {
        kariokiba.style.backgroundColor = '#dcdcdc';
    }
    i++;
}
for (let k = 1; k < 25; k++) {
    for (let l = 6; l >= 0; l--) {
        kariokiba = document.getElementById(k * 10 + l);
        if(totalCountArr[i] >= 4000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][0];
        }else if(totalCountArr[i] >= 3000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][1];
        }else if(totalCountArr[i] >= 2000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][2];
        }else if(totalCountArr[i] >= 1000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][3];
        }else {
            kariokiba.style.backgroundColor = '#dcdcdc';
        }
        i++;
    }
}

document.getElementById('color').onchange = function(){
    colorClick(this.value);
}

function colorClick(selectColorNum){
    i = 0;
    for(let n = dayofweek; n >= 0; n--){
        kariokiba = document.getElementById(n);
        if(totalCountArr[i] >= 4000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][0];
        }else if(totalCountArr[i] >= 3000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][1];
        }else if(totalCountArr[i] >= 2000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][2];
        }else if(totalCountArr[i] >= 1000){
            kariokiba.style.backgroundColor = colorArr[selectColorNum][3];
        }else {
            kariokiba.style.backgroundColor = '#dcdcdc';
        }
        i++;
    }
    for (let k = 1; k < 25; k++) {
        for (let l = 6; l >= 0; l--) {
            kariokiba = document.getElementById(k * 10 + l);
            if(totalCountArr[i] >= 4000){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][0];
            }else if(totalCountArr[i] >= 3000){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][1];
            }else if(totalCountArr[i] >= 2000){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][2];
            }else if(totalCountArr[i] >= 1000){
                kariokiba.style.backgroundColor = colorArr[selectColorNum][3];
            }else {
                kariokiba.style.backgroundColor = '#dcdcdc';
            }
            i++;
        }
    }
}





//表示するdivのタグ数の取得



//曜日によって表示するdivの取得



