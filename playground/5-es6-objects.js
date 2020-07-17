// Object property shorthand

const name = 'Nadir'
const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'Rochester, NY'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating) // defaults to value of 5

// Note, added a default empty object and defaults for label and stock if these parameters are missing
const transaction = (type, { label = 'default', stock = 0 } = {} ) => {
    console.log(type, label, stock)
}

transaction('order', product)