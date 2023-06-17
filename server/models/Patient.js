const { Schema, model } = require("mongoose");

const patientSchema = new Schema(
  {
    first_name: {
      type: String,
      trim: true,
      required: true,
    },

    last_name: {
      type: String,
      trim: true,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    phone_number: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },

    insurance: {
      type: String,
      required: true,
    },

    reason_for_visit: {
      type: String,
      required: true,
      maxlength: 255,
    },

    appointments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
  },
  {
    collection: "patients",
  }
);

const Patient = model("Patient", patientSchema);

module.exports = Patient;