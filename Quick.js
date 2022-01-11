const fs = require("fs");

const list = process.argv[2];

// Méthode asynchrone
fs.readFile(list, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  data = data.split(" ").map(Number);
  console.log(quickSort(data));
});

let count = 0;

function swap(list, leftIndex, rightIndex) {
  var temp = list[leftIndex];
  list[leftIndex] = list[rightIndex];
  list[rightIndex] = temp;
}

function partition(list, left, right) {
  var pivot = list[Math.floor((right + left) / 2)];
  i = left;
  j = right;

  while (i <= j) {
    while (list[i] < pivot) {
      count++;
      i++;
    }

    while (list[j] > pivot) {
      count++;
      j--;
    }

    if (i <= j) {
      swap(list, i, j);
      i++;
      j--;
    }
  }
  console.log(count);
  return i;
}

function quickSort(list, left, right) {
  var index;
  if (list.length > 1) {
    index = partition(list, left, right);
    if (left < index - 1) {
      quickSort(list, index, right);
    }
  }

  return list;
}
