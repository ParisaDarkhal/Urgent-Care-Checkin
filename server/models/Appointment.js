const { Schema, model } = require("mongoose");
const appointmentSchema = new Schema(
  {
    appt_date: {
      type: String,
      required: true,
    },
    appt_time: {
      type: String,
      required: true,
    },
  },
  {
    collection: "appointments",
  }
);
const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;