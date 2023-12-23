# Chat App

This is a simple chat application built with Node.js, Express, Socket.IO, and MongoDB. It enables users to engage in group chat conversations and saves their chat history.

## Features

- **Real-time Communication:** Utilizes WebSocket-based communication for real-time messaging.
- **Group Chat:** Users can join and participate in group chat rooms.
- **Persistent Chat History:** Chat messages are stored in a MongoDB database for retrieval and history tracking.

## Technologies Used

- Node.js
- Express.js
- Socket.IO
- MongoDB
- EJS templating engine

## Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/ArunRawat404/Chat-App-Nodejs
   ```

2. **Install dependencies:**

   ```bash
   cd Chat-App-Nodejs
   npm install
   ```

3. **Configure environment variables:**

   - Create a `.env` file and provide necessary configurations (e.g., MongoDB URI, PORT(3000)).

4. **Start the application:**

   ```bash
   node server.js
   ```

   The app should be running on `http://localhost:3000`.

## Usage

- Access the application by navigating to `http://localhost:3000` in your web browser.
- Once on the homepage, proceed to `http://localhost:3000/group`.
- Here, you'll have the option to enter a username and specify a chat room name in the provided areas.
- Upon submission, you'll be directed to the corresponding room or group you've specified. To include new members in this room or group, simply share the room ID found in the URL with the individuals you wish to add.

## EJS Templating

- The app uses EJS (Embedded JavaScript) as the templating engine for rendering dynamic content on the client-side.

## Database

- MongoDB is used as the database to store chat messages.
- The schema includes fields for the user's name, message content, roomid, and group information.
