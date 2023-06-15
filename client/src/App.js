import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client"; //


import UpdateAppt from "./components/UpdateAppt";

// import AptConfirmation from "./components/aptConfirmation/confirmation";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", //only for local testing
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      </div>

      <UpdateAppt/>

    </ApolloProvider>
  );
}

export default App;