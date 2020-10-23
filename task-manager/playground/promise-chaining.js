require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f1ede65b32df910565160be

// User.findByIdAndUpdate('5f1ee8495df50d18073a84bd', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments( {age: 1} )
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f1ee8495df50d18073a84bd', 2).then((count) =>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})