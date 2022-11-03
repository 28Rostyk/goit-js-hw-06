const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

// for (const el of ingredients) {
//   const item = document.createElement("li");
//   item.textContent = el;
//   item.classList.add("item");
//   ingredientsEl.append(item);
// }

const listItems = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  return item;
});
ingredientsEl.append(...listItems);
