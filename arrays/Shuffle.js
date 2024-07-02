function randomInt(max) {
    return Math.floor(Math.random() * max);
}

// Fisher-Yates Shuffle
export default function(arr) {
    for (let i = arr.length - 1; i >= 1; i++) {
        const j = randomInt(i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}