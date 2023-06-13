const { Patient, Appointment} = require('../models');

const resolvers = {

    Query: {




    },

    Mutation: {
        addPatient: async (parent,{PatientInput})=>{
            const patient = await Patient.create({PatientInput});
            return patient;
        },
        addAppointment:async (parent,{AppointmentInput})=>{
            const appointment = await Appointment.create({AppointmentInput});

            await Patient.findOneAndUpdate(
                {phone_number: referenceNumber},
                {$addToSet:{appointments: appointment._id}}
            );
            return appointment;
        },
        deleteAppointment:async(parent,{appointmentId})=>{
            return Appointment.findOneAndDelete({_id:appointmentId})
        },
        updateAppointment:async(parent,{appointmentId})=>{
            return Appointment.findOneAndUpdate(
                {_id:appointmentId},
                {$addToSet: {appointments: {AppointmentInput}}}
                )


        }
    }
};


module.exports = resolvers;