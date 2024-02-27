import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GridBackground from "./components/ui/GridBackgroun.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	// TODO => Update the uri on production
	uri: "http://localhost:4000/graphql", // the URL of our GraphQL server.
	cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
	credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<GridBackground>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</GridBackground>
		</BrowserRouter>
	</React.StrictMode>
);
