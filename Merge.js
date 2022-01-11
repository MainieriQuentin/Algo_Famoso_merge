const fs = require("fs");

const fileName = process.argv[2];
function readFileData() {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    return data;
  } catch (error) {
    console.error("cannot read file");
  }
}
let data = readFileData()
  .split(" ")
  .map((n) => parseInt(n, 10));

class Result {
  constructor(arr) {
    this.arr = arr;
    this.ctr = 0;

    return [this.mergeSort(this.arr), this.ctr];
  }

  mergeSort(arr) {
    const half = arr.length / 2;
    if (arr.length <= 1) {
      return arr;
    }
    const left = arr.splice(0, half);
    const right = arr;
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
      this.ctr++;
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  }
}

let mergeResult = new Result(data);
console.log(mergeResult);
