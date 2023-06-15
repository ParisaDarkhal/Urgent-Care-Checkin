import { gql } from "@apollo/client";

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
