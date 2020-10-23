const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, b*1000)
    })
}

const doWork = async () => {
    // sums = await Promise.allSettled([add(1,2), add(2,-3), add(3,6)])
    const sum = await add(1, 2)
        .finally(() => console.log('Finally!'));
    // const sum2 = await add(sum, 50)
    // const sum3 = await add(sum2, -3)
    console.log('Sum is ' + sum);
    // return sums
}

doWork();

// doWork().then((result) => {
//     console.log('result', result)
// }).catch((e) => {
//     console.log('e', e)
// })