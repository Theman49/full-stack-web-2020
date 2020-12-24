const promise = new Promise((resolve, reject) => {
    if(true){
        resolve("Stuff Worked");
    } else {
        reject("error, it's broke");
    }
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HIII")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "cuy")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "is it me you looking for?")
})


Promise.all([promise, promise1, promise2, promise3])
    .then(value => console.log(value))

promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2)   
    })
    .catch(() => console.log("error!"))
    
    
/////////////////////////////

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


Promise.all(urls.map(url => {
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(() => console.log("error"))
}))
