import { gql } from "@apollo/client";


// export const VIEW_APPOINTMENTS = gql`
//   query Query($patientId: ID) {
//     patient(patientId: $patientId) {
//       first_name
//       last_name
//       appointments {
//         appt_date
//         appt_time
//         id
//       }
//     }
//   }
// `;

export const VIEW_APPOINTMENTS = gql`
  query viewAppointment($appointmentId: ID) {
    viewAppointment(appointmentId: $appointmentId) {
      appt_date
      appt_time
      patientId {
        first_name
        last_name
        email
        date_of_birth
        gender
        insurance
        phone_number
        id
        reason_for_visit
      }
    }
  }
`;

