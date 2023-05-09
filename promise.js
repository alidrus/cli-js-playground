/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const stats = {
    counter: 0,
    tailsProbability: 20,
    headsCount: 0,
    tailsCount: 0,
};

const flipCoin = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rando = Math.floor(Math.random() * 100);

            if (rando < stats.tailsProbability) {
                reject(rando);
            }

            resolve(rando);
        }, 1);
    });
};

const checkResult = () => {
    if (stats.counter >= 1000) {
        console.log(stats);
    }
};

for (let i = 0; i < 1000; i++) {
    flipCoin()
        .then(() => {
            stats.counter += 1;
            stats.headsCount += 1;
            checkResult();
        })
        .catch(() => {
            stats.counter += 1;
            stats.tailsCount += 1;
            checkResult();
        });
}

console.log('Waiting for 1000 coin flips...');
