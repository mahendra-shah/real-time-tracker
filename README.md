# Real-Time Location Tracker


## Overview

**Real-Time Location Tracker** is a web application that provides real-time location tracking of multiple users on an interactive map. Built using modern technologies such as **Leaflet.js** for map rendering and **Socket.io** for real-time communication, this application is perfect for scenarios like delivery tracking, ride-sharing, or real-time location sharing.

## Features

- 🗺 **Interactive Map**: Real-time updates on an easy-to-use map interface.
- ⚡ **Real-Time Updates**: Track multiple users simultaneously with instant location updates.
- 🎯 **Center Map Button**: Quickly center the map on your current location or any tracked user.
- 🎨 **Modern UI Design**: Sleek, dark mode interface with smooth animations and responsive design.

## Tech Stack

- **Frontend**:
  - [Leaflet.js](https://leafletjs.com/): For rendering the interactive map.
  - [Socket.io](https://socket.io/): For real-time, bi-directional communication between the server and clients.
  - HTML5, CSS3, JavaScript (ES6+)

- **Backend**:
  - [Node.js](https://nodejs.org/): JavaScript runtime for the server.
  - [Express.js](https://expressjs.com/): Web framework for Node.js.
  - [Socket.io](https://socket.io/): For handling real-time communication.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/real-time-tracker.git
    cd real-time-tracker
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the server:**

    ```bash
    npm start
    ```

4. **Open the application:**

    Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
📁 public
│ ├── 📂 css
│ │ └── styles.css - Custom styles for the project
│ ├── 📂 js
│ │ └── script.js - Main client-side JavaScript
├── 📁 views
│ └── index.ejs - EJS template for rendering the main page
├── server.js - Express server with Socket.io integration
├── package.json - Project dependencies and scripts
└── README.md - This file
```

## Usage

- **Start Tracking**: Once the server is running, users can connect, and their locations will automatically be shared and displayed on the map in real-time.
- **Center the Map**: Click the "Center Map" button to re-center the map to your current location or the tracked user's location.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
