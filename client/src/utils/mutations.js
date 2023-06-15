import {gql} from '@apollo/client';

export const DELETE_APPT = gql`
mutation deleteAppointment($appointmentId: ID!) {
  deleteAppointment(appointmentId: $appointmentId) {
    id
  }
}
`


// mutation deleteAppointment($appointmentId: ID!) {
//   deleteAppointment(appointmentId: $appointmentId) {
//     id
//   }
// }