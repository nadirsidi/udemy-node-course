const { findByIdAndDelete } = require('../src/models/user')

require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f1eeb06bac1031b5416af9d').then(() => {
//     return Task.countDocuments( { completed: false }) 
// }).then((result) => {
//     console.log(`Uncompleted tasks: ${result}`)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed: false })
    return count
}

deleteTaskAndCount('5f1eeb06bac1031b5416af9d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})