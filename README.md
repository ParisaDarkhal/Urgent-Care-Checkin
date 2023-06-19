# RapidReserve

RapidReserve is an app designed for an Urgent Care practice, providing users with the ability to book, update, and cancel doctor's appointments. The app offers a user-friendly interface with various features to streamline the appointment management process.

## Features

- **Landing Page**: The landing page displays a navigation bar containing essential information and links for updating or canceling appointments. The footer provides additional information about the practice.

![Landing Page](/images/landingPage.jpg)

- **Make Appointment**: By clicking the "Make Appointment" button on the landing page, users are redirected to a page with two forms. Returning patients can enter their email address, while new patients can fill out the necessary information. Clicking the "Next" button directs users to the "Book an Appointment" page.

![Make Appointment](/images/makeAppointment.jpg)

- **Book an Appointment**: On this page, users can view available time slots for the current day. Taken times are shown but disabled. Users can select their preferred time by clicking on it. After choosing a time, users can click "Save Appointment" to confirm their booking. The confirmation page displays the date, time, and a unique confirmation number for reference.

![TimeSlots](/images/timeSlots.jpg)

- **Confirmation**

![Confirmation](/images/confirmation.jpg)

- **Reschedule or Cancel**: Users can reschedule or cancel their appointments using the links in the navigation bar. The confirmation number obtained during booking is used to access these features.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.

- **MongoDB**: A popular NoSQL database for storing and retrieving data.

- **GraphQL**: A query language for APIs, providing a flexible and efficient approach to data fetching.

- **Express**: A fast and minimalist web application framework for Node.js.

- **Apollo**: A comprehensive GraphQL ecosystem that includes client and server libraries.

- **Node.js**: A JavaScript runtime environment for executing server-side code.

- **Bootstrap**: A front-end framework for designing responsive and visually appealing websites.

## npm Packages Used

- **@apollo/client**: Apollo's client library for connecting to a GraphQL server.

- **react-bootstrap**: A library that provides pre-styled React components based on Bootstrap.

- **react-dom**: A package for rendering React components in the browser.

- **react-router-dom**: A routing library for managing navigation within a React application.

- **react-scripts**: A set of scripts and configurations for creating React apps.

- **graphql**: A JavaScript implementation of the GraphQL specification.

- **apollo-server-express**: An integration of Apollo Server with Express.

- **mongoose**: A MongoDB object modeling tool designed for Node.js.

## Styling

To facilitate styling, a template from [ThemeFisher](https://themefisher.com/) was utilized. This template ensures a visually appealing and cohesive design throughout the application.

## Deployment

The application is deployed on [Heroku](https://rapid-checkin-98d3ad3f1287.herokuapp.com/), a cloud-based platform that provides hosting and deployment services.

## Project Contributors

RapidReserve was created by the following contributors:

- Parisa Darkhal
- Elizabeta Sirota
- Marjorie Bautista

## License

This project is licensed under the MIT License. You can find the details in the [LICENSE](LICENSE) file.
