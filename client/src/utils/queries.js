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

export const VIEW_PATIENT = gql`
  query viewPatientById($patientId: ID) {
    patient(patientId: $patientId) {
      first_name
      last_name
      appointments {
        appt_date
        appt_time
        id
      }
    }
  }
`;

export const VIEW_APPOINTMENT = gql`
  query appointment($appointmentId: ID) {
    appointment(appointmentId: $appointmentId) {
      id
      appt_date
      appt_time
      patient
    }
  }
`;

export const GET_APPOINTMENTS = gql`
  query appointmentsByDate($appt_date: String) {
    appointmentsByDate(appt_date: $appt_date) {
      appt_date
      appt_time
    }
  }
`;

// export const GET_PATIENT_BY_APPT_ID = gql`
//   query patientByApptId($appointmentId: ID) {
//     patientByApptId(appointmentId: $appointmentId) {
//       id
//       first_name
//       last_name
//     }
//   }
// `;
