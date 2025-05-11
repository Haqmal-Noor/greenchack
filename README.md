# Echo Chat - Real-time Chat Application

A full-featured real-time chat application built with React, Node.js, Express, and Socket.IO.

## Features

- Real-time messaging with Socket.IO
- User authentication with JWT
- One-on-one and group chats
- Online/offline status indicators
- Typing indicators
- Read receipts
- File and image sharing
- Responsive design for mobile and desktop
- Dark mode support

## Tech Stack

### Frontend
- React with TypeScript
- Socket.IO Client for real-time communication
- Tailwind CSS for styling
- React Router for routing
- Zustand for state management
- React Hook Form for form handling
- Lucide React for icons

### Backend
- Node.js with Express
- Socket.IO for real-time communication
- MongoDB with Mongoose for database
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas connection)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/echo-chat.git
cd echo-chat
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your MongoDB URI and JWT secret.

### Running the Application

1. Start the development server (frontend):
```bash
npm run dev
```

2. Start the backend server:
```bash
npm run dev:server
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
echo-chat/
├── public/             # Public assets
├── server/             # Backend code
│   ├── controllers/    # API controllers
│   ├── middleware/     # Middleware functions
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── socket/         # Socket.IO handlers
│   └── index.js        # Server entry point
├── src/                # Frontend code
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── store/          # State management
│   ├── types/          # TypeScript types
│   └── App.tsx         # Main app component
└── package.json        # Dependencies and scripts
```

## Deployment

For production deployment:

1. Build the frontend:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start:server
```

The server will serve the static files from the `dist` directory.

## License

This project is licensed under the MIT License.