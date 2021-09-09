"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const client_2 = require("@apollo/client");
const react_1 = require("react");
const client = new client_1.ApolloClient({
    uri: 'http://localhost:9000/graphql',
    cache: new client_1.InMemoryCache(),
});
const App = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [entered, setEntered] = (0, react_1.useState)(false);
    return (React.createElement(client_2.ApolloProvider, { client: client },
        React.createElement("div", { className: "App" },
            !entered && (React.createElement("div", null,
                React.createElement("input", { type: "text", id: "name", value: name, onChange: (e) => setName(e.target.value) }),
                React.createElement("button", { onClick: () => setEntered(true) }, "Enter chat"))),
            name !== "" && entered && (React.createElement("div", null, "Chats")))));
};
exports.default = App;
