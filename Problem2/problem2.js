process.stdin.setEncoding("utf8");

let lines = []; 
const reader = require("readline").createInterface({
  input: process.stdin,
});

reader.on("line", (line) => {
  lines.push(line); 
});

reader.on("close", () => {

  const [_, ...restLines] = lines;
 
  for(const line of restLines) {
    const [a, b, c] = line.split(" ").map( v => parseInt(v, 10));
    console.log(solver(a, b, c));
  }

});

const solver = (a, b, c) => {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    
    // すべて同じ
    if(a == b && b == c ){
        // 3より小さい
        if (a < 3) {
            return -1;
        } else {
            return 3;
        }
    }   

    // すべて異なる
    if(a != b && b != c && a != c){
        // b が最大または最小
        if(b == max || b == min) {
            return 0;
        }
        // b が中間 
        else {
            const midToMax = max - b;
            const MinToMid = b - min;
            // b が3より小さい
            if(b < 3) {
                return -1;
            }else{
                if(midToMax < MinToMid) {
                    return midToMax + 1;
                } else {
                    return MinToMid + 1;
                }
            }
        }

    }

    // 2つが同じ
    // b が最大
    if(b == max) {
        // a と c が同じ
        if(a == c) {
            // 最小値が1
            if(min == 1) {
                return -1;
            } else {
                return 1;            }
        } else {
            // 幅が1より大きい
            if(max - min > 1) {
                return 1;
            } else {
                if(min == 1) {
                    return -1;
                } else {
                    return 2;
                }
            }
        }
    }

    // 2つが同じ
    // b が最小
    if(b == min) {
        // a と c が同じ
        if(a == c) {
            // 幅が1より大きい
            if(max - min > 1){
                return 1;
            } else {
                if(min == 1) {
                    return -1;
                } else {
                    return 2;
                }
            }
        } else {
            // bが1より大きい
            if(b > 1){
                return 1;
            } else {
                return -1;
            }
        }
    }
}
