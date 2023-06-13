const { Patient, Appointment } = require('../models');

const resolvers = {

    Query: {
        appointment: async (parent, {appointmentId}) => {
            return Appointment.findOne({_id: appointmentId})
        },
        patient: async (parent, {patientId}) => {
            return Appointment.findOne({_id: patientId})
        }
    },

    Mutation: {
        addPatient: async (parent, { PatientInput }) => {
            const patient = await Patient.create({ PatientInput });
            return patient;
        },
        addAppointment: async (parent, { AppointmentInput }) => {
            const appointment = await Appointment.create({ AppointmentInput });

            await Patient.findOneAndUpdate(
                { id: Patient._id },
                { $push: { appointments: appointment._id } }
            );
            return appointment;
        },
        deleteAppointment: async (parent, { appointmentId }) => {
            return Appointment.findOneAndDelete({ _id: appointmentId })
        },
        updateAppointment:async(parent,{appointmentId})=>{
            return Appointment.findOneAndUpdate(
                {_id:appointmentId},
                {$addToSet: {appointments: {AppointmentInput}}}
                )
        },
        // **TEST**
        updateAppointment: async (parent, {id, appt_time }) => {
            return await Appointment.findOneAndUpdate(
                { _id: id },
                { appt_time },
                {new: true}
            );
        },
    }
};



// addAppointment:async (parent,{AppointmentInput})=>{
//     const appointment = await Appointment.create({AppointmentInput});

//     await Patient.findOneAndUpdate(
//         {phone_number: referenceNumber},
//         {$push:{appointments: appointment._id}}
//     );
//     return appointment;
// },

module.exports = resolvers;