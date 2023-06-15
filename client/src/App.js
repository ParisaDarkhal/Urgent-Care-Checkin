import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client"; //
import TimeSlots from "./components/dateTimeSlots/DateTimeSlots";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", //only for local testing
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">Hello</div>
      <TimeSlots />
    </ApolloProvider>
  );
}

export default App;
