const fs = require("fs");

const list = process.argv[2];

// Méthode asynchrone
fs.readFile(list, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  data = data.split(" ").map(Number);
  console.log(bubbleSort(data));
});

function bubbleSort(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      count++;
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  console.log("Nombre de comparaison :" + count);
  return list;
}
