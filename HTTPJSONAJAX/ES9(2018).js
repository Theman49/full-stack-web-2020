// object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const { tiger, ...rest } = animals;

rest --> grab lion and monkey

// ---------------------------------------
const array =  [1,2,3,4,5];

function sum(a,b,c,d,e) {
    return a+b+c+d+e;
}

sum(...array) // same with sum(1,2,3,4,5)

// finally()
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
}))
    .then(result => {
        console.log('users', result[0]);
        console.log('posts', result[1]);
        console.log('albums', result[2]);
    })
    .catch(err => console.log('ughhh fix it!', err))
    .finally("extra here")



// for await of

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums] = await Promise.all(urls.map(url =>           fetch(url).then(response => response.json())
        ));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log("error", err);
    }
}

const getDataAsync = async function() {
    const arrayOfPromises = await Promise.all(urls.map(url => fetch(url)));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}
