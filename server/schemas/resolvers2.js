const { Patient, Appointment } = require("../models");

const resolvers = {
  Query: {
    // find all the appointments
    appointments: async (parent, { appointmentId }) => {
      return Appointment.findById(appointmentId);
    },
    // find patient by patient id
    patient: async (parent, { id }) => {
      return Patient.findById(id);
    },

    // Return patients with a specific appointment
    patients: async (parent, { appointment_id }) => {
      if (appointment_id) {
        return Patient.find({ appointments: appointment_id });
      }
      // Add a default return statement when appointment_id is not provided
      return Patient.find();
    },
  },
  Mutation: {
    // create a new patient
    addPatient: async (parent, { input }) => {
      const patient = await Patient.create(input);
      return patient;
    },

    // create a new appointment
    addAppointment: async (parent, { input }) => {
      const appointment = await Appointment.create(input);
      const patient = await Patient.findById(input.patient);
      patient.appointments.push(appointment);
      await patient.save();
      return appointment;
    },

    // delete an appointment
    deleteAppointment: async (parent, { appointmentId }) => {
      return Appointment.findByIdAndDelete(appointmentId);
    },

    // update an appointment
    updateAppointment: async (parent, { appointmentId, input }) => {
      return Appointment.findByIdAndUpdate(appointmentId, input, {
        new: true,
      });
    },
  },
};

module.exports = resolvers;
