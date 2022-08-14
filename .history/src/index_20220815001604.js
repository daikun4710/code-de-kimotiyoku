const body = document.getElementById('body');

const content = document.getElementById('content');

//レイアウトの作成(col)
for (let i = 0; i < 25; i++) {
    const contentRow = document.createElement('div');
    contentRow.setAttribute('class', 'row');
    content.appendChild(contentRow);
    for (let j = 0; j < 7; j++) {
        const contentCol = document.createElement('div');
        contentCol.innerHTML = i;
        contentCol.setAttribute('class', 'col-md-' + (12 / 7));
        contentRow.appendChild(contentCol);
    }
}



//曜日によって変更する位置が変更される
const dayArr = ['日', '月', '火', '水', '木', '金', '土'];

//現在の
const weekGet = () => {
    let day = dayArr[now.getDay()];
};
//表示するdivのタグ数の取得



//曜日によって表示するdivの取得