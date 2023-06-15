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
