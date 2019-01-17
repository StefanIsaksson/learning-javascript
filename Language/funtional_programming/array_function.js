users = [
    {
        id : 1,
        name : "Bob",
        isCustomer : false
    },
    {
        id : 2,
        name : "Alice",
        isCustomer : true
    },
    {
        id : 2,
        name : "Dave",
        isCustomer : true
    }
]

//Imperative way to find users that are customers
let customers = [];
for(let i = 0; i < users.length; i++){
    let u = users[i];
    if(u.isCustomer){
        customers.push(u);
    }
}
console.log(customers);

//Filter returns all items which pass its test
const also_customers = users.filter((u) => { return u.isCustomer === true });
console.log(also_customers);

//Find returns the first item which pass its test
const found_user = users.find((u) => { return u.id === 2 });
console.log(found_user);

customers.map((u) => { 
    u.name = u.name + " the customer";
    return u; 
});

console.log(customers);