const { Schema, model, default: mongoose } = require("mongoose");
const appointmentSchema = new Schema({
  appt_date: {
    type: Date,
    default: Date.now,
  },
  appt_time: {
    type: Data,
  },

  //Parisa's suggestion
  timeSlot: {
    type: Date,
    required: true,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
  //End Parisa's suggestion

  patient: [
    {
      type: Schema.types.ObjectId,
      ref: "Patient",
    },
  ],
});

// Parisa's suggestion
const Appointment = mongoose.model("Appointment", appointmentSchema);
// End Parisa's suggestion

module.exports = Appointment;
