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
    insurance: String!
    reason_for_visit: String!
    appointments: [Appointment]
  }

  type Appointment {
    id: ID!
    appt_date: String!
    appt_time: String!
    patient: [ID]!
  }

  type Query {
    patients: [Patient]
    patient(patientId: ID): Patient
    appointments: [Appointment]
    appointment(appointmentId: ID): Appointment
    appointmentsByDate(appt_date: String): [Appointment]
  }

  type Mutation {
    addPatient(input: PatientInput): Patient
    addAppointment(input: AppointmentInput): Appointment
    deleteAppointment(appointmentId: ID!): Appointment
    updateAppointment(appointmentId: ID!, input: AppointmentInput): Appointment
  }

  input PatientInput {
    first_name: String!
    last_name: String!
    date_of_birth: String!
    gender: String!
    phone_number: String!
    email: String!
    insurance: String!
    reason_for_visit: String!
    appointments: ID
  }

  input AppointmentInput {
    appt_date: String!
    appt_time: String!
    patient: ID!
  }
`;
module.exports = typeDefs;
