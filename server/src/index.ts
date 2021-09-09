import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ChatResolver } from "./resolvers/chat";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  app.use(cors({ origin: "http://localhost:3000", credentials: true }));

 const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ChatResolver],
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
    console.log(
      `Server ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
    );
    console.log(
      `Subscriptions ready at ws://localhost:${process.env.PORT}${apolloServer.subscriptionsPath}`
    );
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
