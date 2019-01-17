//Functions are objects that can be passed to other functions

animals = [
    {
        name : "Butterfly",
        dangerous : false
    },
    {
        name : "Tiger",
        dangerous : true
    }
]

activities = [
    {
        id : 1,
        name : "Sleeping",
        dangerous : false
    },
    {
        id : 2,
        name : "Shark tank",
        dangerous : true
    }
]


const isDangerous = (item) => { return item.dangerous; }

dangerousAnimals = animals.filter(isDangerous);
dangerousActivities = activities.filter(isDangerous);

console.log(dangerousActivities);
console.log(dangerousAnimals);