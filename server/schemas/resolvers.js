const { Patient, Appointment } = require('../models');

const resolvers = {

    Query: {

        //Find appointments
        appointments: async () => {
            return Appointment.find()
        },
        // Find apointment by ID (for page #3)
        appointment: async (parent, { id }) => {
            return Appointment.findOne(id)
        },
        // Find patients
        patients: async () => {
            return Patient.find()
        },

        // Find patient by ID
        patient: async (parent, { id }) => {
            return Patient.findOne(id)
        },

    },
    // 

    Mutation: {
        // Add a patient
        addPatient: async (parent, { input }) => {
            const patient = await Patient.create(input);
            return patient;
        },
        // // Add a appointment
                addAppointment: async (parent, { input }) => {
                    const appointment = await Appointment.create(input);
                    const patient = await Patient.findById(input.patient);
                    patient.appointments.push(appointment);
                    await patient.save();
                    return appointment;
                },
   
        // Delete an appointment--------
        // deleteAppointment: async (parent, { appointmentId }) => {
        //     console.log("this is the AppointmentID is ",appointmentId);

        //     const deleteAppt = await Appointment.findOneAndDelete({ _id: appointmentId })
        //     if(!deleteAppt){
        //         throw new Error('apppointment not found') 
        //         console.log("this is appt deleteaapt",deleteAppt);
    
        //     }
        //     return deleteAppt;
         
        // },

// hopefule right
        deleteAppointment: async (parent, { appointmentId }) => {
            console.log("this is the AppointmentID is ",appointmentId);

            const deleteAppt = await Appointment.findOneAndDelete({ _id: appointmentId })
            if(!deleteAppt){
                throw new Error('apppointment not found') 
                console.log("this is appt deleteaapt",deleteAppt);
    
            }
            return deleteAppt;
         
        },
        // ---------
    
        // Reschedule an appoitment
        // updateAppointment: async (parent, { appointmentId, input }) => {
        //     return Appointment.findOneAndUpdate(
        //         { _id: appointmentId },
        //         { $addToSet: { appointments: { AppointmentInput } } }
        //     )

        updateAppointment: async (parent, { appointmentId, input }) => {
            return Appointment.findOneAndUpdate(
                { _id: appointmentId },
                input
                , {
                    new: true,
                })
        },
    },
};
module.exports = resolvers;





