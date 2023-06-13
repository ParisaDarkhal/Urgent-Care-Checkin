const { Patient, Appointment } = require('../models');

const resolvers = {

    Query: {




    },

    Mutation: {
        addPatient: async (parent, { PatientInput }) => {
            const patient = await Patient.create({ PatientInput });
            return patient;
        },
        addAppointment: async (parent, { AppointmentInput }) => {
            const appointment = await Appointment.create({ AppointmentInput });

            await Patient.findOneAndUpdate(
                { phone_number: referenceNumber },
                { $addToSet: { appointments: appointment._id } }
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
        // updateClass: async (parent, { id, building }) => {
        //     // Find and update the matching class using the destructured args
        //     return await Class.findOneAndUpdate(
        //       { _id: id }, 
        //       { building },
        //       // Return the newly updated object instead of the original
        //       { new: true }
        //     );
        //   }
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




module.exports = resolvers;