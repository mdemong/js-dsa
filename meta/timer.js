const NS_PER_SEC = 1e9;

export default function(alg, n) {
    const startTime = process.hrtime.bigint();
    alg(n);
    const endTime = process.hrtime.bigint();
    return Number(endTime - startTime) / 1e9;
}