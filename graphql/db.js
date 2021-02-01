export const people = [
    {
        id: "0",
        name: "geoni",
        age: 18,
        gender: "female"
    },
    {
        id: "1",
        name: "duck",
        age: 20,
        gender: "female"
     },
     {
        id: "2",
        name: "han",
        age: 30,
        gender: "male"
    },
    {
        id: "3",
        name: "ddong",
        age: 31,
        gender: "male"
    }
 ];

 export const getById = id => {
     const filterePeople = people.filter(person => people.id === id);
     return filterePeople[0];
 }