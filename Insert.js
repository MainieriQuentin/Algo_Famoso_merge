const fs = require("fs");

const list = process.argv[2];

// Méthode asynchrone
fs.readFile(list, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  data = data.split(" ").map(Number);
  console.log(insertSort(data));
});

function insertSort(list) {
  let count = 0;
  for (i = 1; i < list.length; i++) {
    let x = list[i];
    j = i;
    count++;
    while (j > 0 && list[j - 1] > x) {
      list[j] = list[j - 1];
      j = j - 1;
    }
    list[j] = x;
  }
  console.log("Nombre de comparaison :" + count);
  return list;
}
