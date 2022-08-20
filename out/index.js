// let jsonsData;
// let fromJson;
// let dataArr = [];
// const promise = new Promise((resolve) => {
//         //jsonデータの取得
//     fetch("data.json")
//     .then(function (response) {
//         // console.log(response);
//         return response.json();
//     })
//     .then(function (json) {
//         jsonsData = JSON.stringify(json);
//         fromJson = JSON.parse(jsonsData);
        
//         for(let i = 0; i < fromJson.totalCount.length; i++){
//             dataArr.unshift(fromJson.totalCount[i].count);
//             console.log(fromJson.totalCount[i].count);
//         }
//         let newData = fromJson;
//         let addData = {
//             "day":"2022/8/14",
//             "count":4000
//         }
//         newData.totalCount.push(addData);
//         fromJson = newData;
//         console.log(fromJson.totalCount[3].count);

        // // fromJson.totalCount.day = "2022/8/19";
        // // fromJson.totalCount.count = 4000;
        // // console.log(fromJson.totalCount[3].count);
        // // ここの処理が終わったら次に行く

    //     resolve("終わり");
    // });
//}).then((val) => {
    //console.log(localStorage.getItem("test"));
    //console.log(val);
        const content = document.getElementById('content');

        const windowOpen = () => {
            window.open("https://developer.mozilla.org/ja/docs/Web/API/Window/open");
        }

    //曜日によって変更する位置が変更される

    const dayArr = ['日', '月', '火', '水', '木', '金', '土'];

        //現在の曜日を取得
        let d = new Date();
        let day = d.getDate();  //日
        let dayofweek = d.getDay(); //曜日
        let changeDay = d.toLocaleDateString();
        let dayStr = d.toLocaleDateString().substring(5);

        //変数宣言
        let contentRow;
        let contentCol;
        let row = 6;
        let col = 7;

        //左が濃い
        let colorArr = [
            ['#022D10', '#088D34', '#3AF478', '#CBFCDB'],//緑
            ['#8F1209', '#EF1E0F', '#F34A3E', '#F9A49E'],//赤
            ['#0E0157', '#1E02BC', '#4727FD', '#9D8CFE'] //青
        ];
        let coffeeArr = ['coffee4.svg','coffee3.svg','coffee2.svg','coffee1.svg']

    //レイアウトの作成(col)
    for (let i = 0; i < row; i++) {
        contentRow = document.createElement('div');
        contentRow.setAttribute('class', 'contentRow');
        contentRow.style.display = 'flex';
        content.appendChild(contentRow);
        for (let j = 0; j < col; j++) {
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

    let beforeDay;
    let beforeDayPlace;
    let totalCount;
    beforeDayPlace = 6 - dayofweek;
    //localStorage.setItem(beforeDay,dayStr);
    if(localStorage.getItem("beforeDay") == dayStr){
        localStorage.setItem("beforeDay",dayStr);
        localStorage.setItem("totalCount",0);
    }
    //console.log(localStorage.getItem("totalCount"));

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
    for (let k = 1; k < row; k++) {
        for (let l = col - 1; l >= 0; l--) {
            contentDay = document.getElementById(k * 10 + l);
            contentDay.innerHTML = dayStr;
            contentDay.style.backgroundColor = '#dcdcdc';
            day = d.setDate(d.getDate() - 1);
            dayStr = d.toLocaleDateString().substring(5);
            
        }
    }




    //【仮】試験的に、書いた回数、左が最新
    let totalCountArr = [4000,3000,2000,1000,0,4000,3000,2000,1000,0,4000,3000,2000,1000,0,4000,3000,2000,1000,0,];


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
    for (let k = 1; k < row; k++) {
        for (let l = col - 1; l >= 0; l--) {
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

         // coffee画像の処理
        if(selectColorNum == 3){
            let coffeeImg = document.createElement('img');
           if(totalCountArr[i] >= 4000){
                coffeeImg.src = `../images/${coffeeArr[0]}`;
            }else if(totalCountArr[i] >= 3000){
                coffeeImg.src = `../images/${coffeeArr[1]}`;
            }else if(totalCountArr[i] >= 2000){
                coffeeImg.src = `../images/${coffeeArr[2]}`;
            }else if(totalCountArr[i] >= 1000){
                coffeeImg.src = `../images/${coffeeArr[3]}`;
            }
        kariokiba.style.backgroundColor = '#ffffff';
        kariokiba.appendChild(coffeeImg);
        }
        else{
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
            coffeeImg.src= "../imagaes/spare.svg";
        }
            i++;
        }
        for (let k = 1; k < row; k++) {
            for (let l = col - 1; l >= 0; l--) {
                kariokiba = document.getElementById(k * 10 + l);

                
                // coffee画像の処理
        if(selectColorNum == 3){
            let coffeeImg = document.createElement('img');
           if(totalCountArr[i] >= 4000){
                coffeeImg.src = `../images/${coffeeArr[0]}`;
            }else if(totalCountArr[i] >= 3000){
                coffeeImg.src = `../images/${coffeeArr[1]}`;
            }else if(totalCountArr[i] >= 2000){
                coffeeImg.src = `../images/${coffeeArr[2]}`;
            }else if(totalCountArr[i] >= 1000){
                coffeeImg.src = `../images/${coffeeArr[3]}`;
            }
        kariokiba.style.backgroundColor = '#ffffff';
        kariokiba.appendChild(coffeeImg);
        }
        else{
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
        coffeeImg.src= "../imagaes/spare.svg";
        }
            i++;
            }
        }
    }


    // for(let i = 0; i < dataArr.length; i++){
    //     console.log(dataArr[i]);
    // }


    // fetch("data.json")
    // .then(function (response) {
    //     // console.log(response);
    //     return response.json();
    //   })
    //   .then(function (json) {
    //     let jsonsData = JSON.stringify(json);
    //     let fromJson = JSON.parse(jsonsData);
    //     console.log(fromJson[0].name);

    //   });





    //表示するdivのタグ数の取得



    //曜日によって表示するdivの取得

    //console.log(localStorage.getItem("beforeDay"));

    // class LocalStorage {
    //     constructor(localStorage) {
    //         this.localStorage = localStorage;
    //     }
    //     getValue(key, def) {
    //         return this.localStorage.get(key, def);
    //     }
    //     setValue(key, value) {
    //         this.localStorage.update(key, value);
    //     }
    // }
    // const storage = new LocalStorage(localStorage);
    // console.log(storage.getValue("beforeDay",0));

// });


// [
//     {
//       "name": "yamada",
//       "age": 30
//     },
//     {
//       "name": "sasaki",
//       "age": 40
//     },
//     {
//       "name": "kondo",
//       "age": 16
//     }
// ]