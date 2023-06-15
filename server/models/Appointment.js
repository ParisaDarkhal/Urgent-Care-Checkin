const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');



const appointmentSchema = new Schema({
    appt_date: {
        type: String,
        required: true,
    },
    appt_time: {
        type: String,
        required: true,
    },
}
);
const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;
