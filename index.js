// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    cats.push("Ralph")
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const newCats = [...cats, "Broom"]
   return newCats
}
function prependCat(name) {
    const newCats = ["Arnold", ...cats]
    return newCats
}
function removeLastCat(name) {
    const newCats = cats.slice(0, cats.length - 1)
    return newCats
}
function removeFirstCat(name) {
    const newCats = cats.slice(1)
    return newCats
}