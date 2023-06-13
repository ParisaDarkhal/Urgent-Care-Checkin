const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Patient {
    id: ID!
    first_name: String!
    last_name: String!
    date_of_birth: String!
    gender: String!
    phone_number: String!
    email: String!
    insurance: Boolean!
    reason_for_visit: String!
    appointments: [Appointment]
  }

  type Appointment {
    id: ID!
    timeSlot: String!
    selectedDate: String!
    patient: Patient
  }

  type Query {
    patients(appointment_id: ID) : Patient
    appointments(appointmentId: ID) : Appointment
  }

  type Mutation {
    addPatient(input:PatientInput): Patient
    addAppointment(input: AppointmentInput): Appointment
    deleteAppointment(appointmentId:ID!): Appointment
    updateAppointment(appointmentId:ID!): Appointment
}

  input PatientInput {
    first_name: String!
    last_name: String!
    date_of_birth: String!
    gender: String!
    phone_number: String!
    email: String!
    insurance: Boolean!
    reason_for_visit: String!
    appointments: ID
  }

  input AppointmentInput {
    appt_date: String
    appt_time: String
    timeSlot: String!
    patient:ID
    referencePhoneNumber: String
    }
`;

module.exports = typeDefs;
