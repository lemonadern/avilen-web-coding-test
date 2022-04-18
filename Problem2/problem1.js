process.stdin.setEncoding("utf8");

let lines = []; 
const reader = require("readline").createInterface({
  input: process.stdin,
});

// 改行イベント
reader.on("line", (line) => {
  lines.push(line); 
});

// 標準入力終了時イベント
reader.on("close", () => {
  const [firstLine, secondLine] = lines;
  const [_, N] = firstLine.split(" ").map( v => parseInt(v, 10));

  m = secondLine.split(" ").map( v => parseInt(v, 10));

  const max = Math.max(...m);
  const min = Math.min(...m);

  if(N <= max && N >= min){
    console.log("Yes");
  } else {
    console.log("No");
  }
});
