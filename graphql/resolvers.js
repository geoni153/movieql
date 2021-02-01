const geoni = {
    name: "geoni",
    age: 18,
    gender: "female"
};

const resolvers = {
    Query: {
    //    name:() => "geoni"
        person: () => geoni
    }
};

export default resolvers;