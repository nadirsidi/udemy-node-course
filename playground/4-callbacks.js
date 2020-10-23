// Example library code of a function that takes a callback
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // Structure of callback if there's an error
        // callback('This is my error!', undefined)

        // Structure of callback if the function is successful
        callback(undefined, [1, 4, 7])
    }, 2000)
}


// Example client calling a function that takes a callback
doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    return console.log(result)
})