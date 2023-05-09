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

const thousandFlips = async function () {
    for (let i = 0; i < 1000; i++) {
        try {
            await flipCoin();

            stats.counter += 1;

            stats.headsCount += 1;
        } catch (error) {
            stats.counter += 1;

            stats.tailsCount += 1;
        };
    }

    console.log(stats);
};

thousandFlips();

console.log('Waiting for 1000 coin flips...');
