const fs = require("fs");

const list = process.argv[2];

// Méthode asynchrone
fs.readFile(list, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  data = data.split(" ").map(Number);
  console.log(selectSort(data));
});

function selectSort(list) {
  let count = 0;
  n = list.length;
  for (i = 0; i < list.length; i++) {
    let min = i;
    for (j = i + 1; j < list.length; j++) {
      count++;
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min != i) {
      [list[i], list[min]] = [list[min], list[i]];
    }
  }
  console.log("Nombre de comparaison :" + count);
  return list;
}
