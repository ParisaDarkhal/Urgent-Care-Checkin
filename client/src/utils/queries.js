import { gql } from "@apollo/client"

export const VIEW_APPOINTMENTS = gql `
    query view_apointments {
        patient {
        first_name
        last_name
        }
        appointment {
        appt_date
        appt_time
        id
        patientId {
            first_name
            last_name
            appointments {
            appt_date
            appt_time
            id
            patientId {
                date_of_birth
                email
                first_name
                gender
                id
                insurance
                last_name
                phone_number
                reason_for_visit
            }
            }
        }
        }
    }

`