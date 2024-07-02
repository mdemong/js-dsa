export default function(arr, target) {
    for (const val of arr) {
        if (val === target)
            return true;
    }
    return false;
}