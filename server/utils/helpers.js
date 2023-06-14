module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp, adds five years to the date, and formats it as M/D/YYYY The custom helper 'format_date' takes in a timestamp
  format_date: (date) => {
    // Using JavaScript Date methods, we get and format the month, date, and year We need to add one to the month since it is returned as a zero-based value
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};

// to create time slots
const { Appointment } = require("./models");
// Generate time slots for a given day
function generateTimeSlots(date) {
  const timeSlots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM
  const currentDate = new Date(date);
  currentDate.setHours(startHour, 0, 0, 0); // Set starting time
  while (currentDate.getHours() < endHour) {
    timeSlots.push(new Date(currentDate));
    currentDate.setHours(currentDate.getHours() + 1); // Move to next hour
  }
  return timeSlots;
}
// Get appointments for a given date
async function getAppointments(date) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0); // Set start time of the day
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999); // Set end time of the day
  const appointments = await Appointment.find({
    appointmentTime: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  }).populate("patient");
  return appointments;
}
// Example usage
const targetDate = new Date("2023-06-13");
const appointments = await getAppointments(targetDate);
const timeSlots = generateTimeSlots(targetDate);
// Generate the table
console.log("Time Slots\t\tPatient");
console.log("--------------------------------------");
timeSlots.forEach((timeSlot) => {
  const appointment = appointments.find(
    (appt) => appt.appointmentTime.getTime() === timeSlot.getTime()
  );
  const formattedTimeSlot = timeSlot.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  if (appointment) {
    console.log(
      `${formattedTimeSlot}\t\t${appointment.patient.firstName} ${appointment.patient.lastName}`
    );
  } else {
    console.log(`${formattedTimeSlot}\t\tAvailable`);
  }
});
