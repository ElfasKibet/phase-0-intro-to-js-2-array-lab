// Write your solution here!
const cats = [];
cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  const copyOfCats = cats.slice();
  copyOfCats.push(name);
  return copyOfCats;
}

function prependCat(name) {
  const copyOfCats = cats.slice();
  copyOfCats.unshift(name);
  return copyOfCats;
}
function removeLastCat() {
  const copyOfCats = cats.slice();
  copyOfCats.pop();
  return copyOfCats;
}
function removeFirstCat() {
  const copyOfCats = cats.slice();
  copyOfCats.shift();
  return copyOfCats;
}
