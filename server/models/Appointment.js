const {Schema, model} = require('mongoose');
const appointmentSchema = new Schema({
    appt_date:{
        type: Date,
        default: Date.now,
    },
    appt_time:{
        type: Data
    },
    patient:[
        {
            type:Schema.types.ObjectId,
            ref:'Patient',
        }
    ]
});

module.exports= Appointment;