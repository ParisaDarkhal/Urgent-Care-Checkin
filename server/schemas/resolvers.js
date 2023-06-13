const { Patient, Appointment} = require('../models');

const resolvers = {

    Query: {
        appointment: async (parent, {appointmentId}) => {
            return Appointment.findOne({_id: appointmentId})
        }



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


// addAppointment:async (parent,{AppointmentInput})=>{
//     const appointment = await Appointment.create({AppointmentInput});

//     await Patient.findOneAndUpdate(
//         {phone_number: referenceNumber},
//         {$push:{appointments: appointment._id}}
//     );
//     return appointment;
// },

module.exports = resolvers;