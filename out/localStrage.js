import { writeFile } from "fs";

// 書き込むデータ準備
const data = "Hello Node";

// 書き込み
writeFile("file2.txt", data, (err) => {
  if (err) throw err;
  console.log('正常に書き込みが完了しました');
});