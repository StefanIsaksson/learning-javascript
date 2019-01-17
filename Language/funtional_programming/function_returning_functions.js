//Functions can return other functions

users = [
    {
        id : 1,
        name : "Bob",
        dangerous : false
    },
    {
        id : 2,
        name : "Alice",
        dangerous : true
    },
    {
        id : 2,
        name : "Dave",
        dangerous : true
    }
]

const byId = (id) => {
    return (item) => {
        return item.id === id;
    }
}

user = users.find(byId(1));
console.log(user);


//Pure function
// 1. Does not depend on any data other than what it is passed.
// 2. Does not modify any data but returns new data.