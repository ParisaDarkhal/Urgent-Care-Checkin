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

import InfoForm from "./components/personalInfoForm/InfoForm";

// import AptConfirmation from "./components/aptConfirmation/confirmation";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", //only for local testing
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <InfoForm />
      </div>

      <TimeSlots />
    </ApolloProvider>
  );
}

export default App;
