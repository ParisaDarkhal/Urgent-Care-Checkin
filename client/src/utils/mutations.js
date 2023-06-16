import { gql } from "@apollo/client";

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($input: AppointmentInput) {
    addAppointment(input: $input) {
      appt_date
      appt_time
      id
      patient {
        id
      }
    }
  }
`;

export const CREATE_PATIENT = gql`
  mutation addPatient($input: PatientInput) {
    addPatient(input: $input) {
      date_of_birth
      email
      first_name
      gender
      id
      insurance
      last_name
      phone_number
      reason_for_visit
      appointments {
        appt_date
        appt_time

        id
      }
    }
  }
`;
// -----CURRENT
// export const DELETE_APPT = gql`
// mutation deleteAppointment($appointmentId: ID!) {
//   deleteAppointment(appointmentId: $appointmentId) {
//     id
//   }
// }
// `;
export const DELETE_APPT = gql`
mutation deleteAppointment($appointmentId: ID!) {
  deleteAppointment(appointmentId: $appointmentId) {
    id
  }
}
`

