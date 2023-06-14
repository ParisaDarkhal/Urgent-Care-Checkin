const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');



const appointmentSchema = new Schema({
    appt_date: {
        type: Date,
        required: true,
    },
    appt_time: {
        type: Date,
        required: true,
    },
}
);
const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;

    //Parisa's suggestion
//     timeSlot: {
//         type: Date,
        // added
//         required: true,
//     },
    //Parisa's suggestion
    // I dont think we dont need it MB
    // timeSlot: {
    //     type: Date,
    //     required: true,
    // },
    //End Parisa's suggestion
    //   appoitment ID id the phone number
    // referencePhoneNumber: {
    //     type: String,
    //     required: true,
    // }
    // // ITHINK WE HAVE TO UPDATE DEF LINE 62 WITH REFERENCEid

