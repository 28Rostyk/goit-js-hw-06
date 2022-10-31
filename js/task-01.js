// кількість категорій
const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

// 2
const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
