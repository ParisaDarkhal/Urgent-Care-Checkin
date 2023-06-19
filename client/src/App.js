import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"; //

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DateTimeSlots from "./components/dateTimeSlots/DateTimeSlots";
import InfoForm from "./components/personalInfoForm/InfoForm";
import AptConfirmation from "./components/aptConfirmation/confirmation";
import CancelConfirmation from "./components/aptConfirmation/ConfirmationCanceled";
import CancelAppt from "./components/updateAppointment/CancelAppt";
import Main from "./components/Main";
import UpdateAppt from "./components/updateAppointment/UpdateAppt";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  // uri: "/graphql", //only for local testing
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/bookAppointment" element={<InfoForm />} />

            <Route
              path="/bookAppointment/timeSlots/:patientId"
              element={<DateTimeSlots />}
            />
            <Route
              path="/canceledAppointment/:patientId"
              element={<CancelConfirmation />}
            />
            <Route
              path="/confirmation/:patientId"
              element={<AptConfirmation />}
            />
            <Route path="/cancelAppointment" element={<CancelAppt />} />
            <Route path="/updateAppointment" element={<UpdateAppt />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
