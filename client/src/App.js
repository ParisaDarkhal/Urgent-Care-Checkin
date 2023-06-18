import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client"; //

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TimeSlots from "./components/dateTimeSlots/DateTimeSlots";
import InfoForm from "./components/personalInfoForm/InfoForm";
import AptConfirmation from "./components/aptConfirmation/confirmation";
import CancelAppt from "./components/updateAppointment/CancelAppt";
import RescheduleAppointment from "./components/updateAppointment/RescheduleAppointment";
import Main from "./components/Main";
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", //only for local testing
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

            <Route path="/bookAppointment/timeSlots/:patientId" element={<TimeSlots />}/>
            <Route path="/confirmation/:patientId" element={<AptConfirmation />}/>
            <Route path="/cancelAppointment" element={<CancelAppt/>}/>
            <Route path="/rescheduleAppointment" element={<RescheduleAppointment/>}/>

          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
