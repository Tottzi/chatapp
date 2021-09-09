"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const chat_1 = require("./resolvers/chat");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const main = async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    app.use((0, cors_1.default)({ origin: "http://localhost:3000", credentials: true }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [chat_1.ChatResolver],
            validate: false,
        }),
        subscriptions: {
            path: "/subscriptions",
            onConnect: () => {
                console.log("Client connected for subscriptions");
            },
            onDisconnect: () => {
                console.log("Client disconnected from subscriptions");
            },
        },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
        console.log(`Subscriptions ready at ws://localhost:${process.env.PORT}${apolloServer.subscriptionsPath}`);
    });
    // app.listen(process.env.PORT, () => {
    //   console.log(
    //     `Server ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
    //   );
    // });
};
main().catch((err) => {
    console.log(err);
});
