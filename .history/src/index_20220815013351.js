const body = document.getElementById('body');

const content = document.getElementById('content');

//曜日によって変更する位置が変更される

const dayArr = ['日', '月', '火', '水', '木', '金', '土'];

//現在の曜日を取得
let d = new Date();
let day = d.getDate();
let dayofweek = d.getDay();
let changeDay = d.toLocaleDateString();
let dayStr = d.toLocaleDateString();


//レイアウトの作成(col)
for (let i = 0; i < 25; i++) {
    const contentRow = document.createElement('div');
    contentRow.setAttribute('class', 'contentRow');
    contentRow.style.display = 'flex';
    content.appendChild(contentRow);
    for (let j = 7; j > 0; j--) {

        const contentCol = document.createElement('div');
        contentCol.innerHTML = dayStr;
        day = d.setDate(d.getDate() - 1);
        dayStr = d.toLocaleDateString();
        contentCol.setAttribute('class', 'contentCol');
        contentCol.style.width = '200px';
        contentCol.style.height = '200px';
        contentRow.appendChild(contentCol);
    }
}




//表示するdivのタグ数の取得



//曜日によって表示するdivの取得