import LinearSearch from "../../basic/LinearSearch.js";
import timer from "../timer.js";
import Shuffle from "../../arrays/Shuffle.js"

const testLinearSearch = (n) => {
    const arr = Array.from(Array(n).keys());
    // Shuffle(arr);
    LinearSearch(arr, Math.floor(n / 2));
}

let results = [];

for (let exp = 2; exp <= 24; exp += 2) {
    const timeSeconds = timer(testLinearSearch, Math.pow(2,exp)); 
    results.push({num: `2^${exp}`, time: timeSeconds})
    // console.log(`2^${exp}: ${timeSeconds} seconds`);
}

console.table(results);