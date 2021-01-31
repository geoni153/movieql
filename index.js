import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({

});

server.server(() => console.log("Graphql Server is Running"));