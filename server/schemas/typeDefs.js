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
    appointment: [Appointment]
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
    createPatient(input: PatientInput): Patient
    createAppointment(input: AppointmentInput): Appointment
    updateAppointment(id: ID!, input: AppointmentInput): Appointment
    deletePatient(id: ID!): Patient
    deleteAppointment(id: ID!): Appointment
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
    appointment: [ID]
  }

  input AppointmentInput {
    appt_date: String
    appt_time: String
    timeSlot: String!
    selectedDate: String!
    patient: ID
  }
`;


module.exports = typeDefs;
