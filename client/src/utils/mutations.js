import {gql} from '@apollo/client';

// delete an appointment
export const DELETE_APPT = gql`
mutation deleteAppointment($appointmentId: ID!) {
  deleteAppointment(appointmentId: $appointmentId) {
    id
  }
}
`