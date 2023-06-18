const { Patient, Appointment } = require("../models");

const resolvers = {
  Query: {
    //Find appointments
    appointments: async () => {
      return Appointment.find();
    },
    // Find apointment by ID (for page #3)
    appointment: async (parent, { appointmentId }) => {
      return Appointment.findById(appointmentId);
    },

    /////// Find apointment by date of today
    appointmentsByDate: async (parent, { appt_date }) => {
      return Appointment.find({ appt_date });
    },

    /////// Find patient by appointment id
    // patientByApptId: async (parent, { appointmentId }) => {
    //   return Patient.find({ appointmentId });
    // },

    // Find patients
    patients: async () => {
      return Patient.find().populate("appointments");
    },

    // Find patient by ID
    patient: async (parent, { patientId }) => {
      return Patient.findById(patientId).populate("appointments");
    },
  },
  //

  Mutation: {
    // Add a patient
    addPatient: async (parent, { input }) => {
      const patient = await Patient.create(input);
      console.log(patient);
      return patient;
    },
    // Add a appointment
    addAppointment: async (parent, { input }) => {
      console.log("input :>> ", input);
      const appointment = await Appointment.create(input);
      const patient = await Patient.findById(input.patient);
      patient.appointments.push(appointment);
      await patient.save();
      console.log("what is appt", appointment);
      return appointment;
    },

    // Delete an appointment
    deleteAppointment: async (parent, { appointmentId }) => {
      console.log("this is the AppointmentID is ", appointmentId);

      const deleteAppt = await Appointment.findOneAndDelete({
        _id: appointmentId,
      });
      if (!deleteAppt) {
        throw new Error("apppointment not found");
        console.log("this is appt deleteaapt", deleteAppt);
      }
      return deleteAppt;
    },

    updateAppointment: async (parent, { appointmentId, input }) => {
      return Appointment.findOneAndUpdate({ _id: appointmentId }, input, {
        new: true,
      });
    },
  },
};
module.exports = resolvers;
