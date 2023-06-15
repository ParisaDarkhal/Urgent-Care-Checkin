import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
 //
import UpdateAppt from "./components/UpdateAppt";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", //only for local testing
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">  Hello
    </div>
    <UpdateAppt/>

    </ApolloProvider>
  );
}

export default App;
