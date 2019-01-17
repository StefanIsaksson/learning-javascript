//Pure function
// 1. Does not depend on any data other than what it is passed.
// 2. Does not modify any data but returns new data.

//Change name on dinosaur and return new object
dinosaur ={
        name : "Brontosaurus",
        description: "Big animal"
    };

new_dinosaur = Object.assign({}, dinosaur, {
    name: 'Apatosaurus'
  });

//manipulate description to see if new_dinosaur is a copy
dinosaur.description="Long neck";
console.log(dinosaur);
console.log(new_dinosaur);

//Problem with deeply nested properties
friend ={
    name : "Alice",
    pets : {
        type: "cat",
        description : "cute"
    }
};

const new_friend = Object.assign({}, friend, {
    name: 'Bob'
  });

friend.pets.type="dog";
console.log(friend);
console.log(new_friend); 

//We need to also deeply copy pets object:
const another_new_friend = Object.assign({}, friend, {
    name: 'Cid',
    pets: Object.assign({}, friend.pets, {})
  });



friend.pets.type="bird";
console.log(friend);
console.log(another_new_friend); 

//Using spread operators
const last_friend = {
    ...friend,
    pets: {
      ...friend.pets,
      type: "lizard",
    }
  }

friend.pets.type = "monkey";

console.log(friend);
console.log(last_friend); 