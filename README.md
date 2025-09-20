# Docker K8s Express App

A production-ready Express.js application designed for Docker and Kubernetes deployment.

## Features

- ✅ Express.js server with security middleware
- ✅ CORS and Helmet for security
- ✅ Morgan logging
- ✅ Environment variable support
- ✅ Health check endpoint
- ✅ Error handling middleware
- ✅ Sample API routes

## Quick Start

### Prerequisites

- Node.js (>= 16.0.0)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
copy .env.example .env
```

3. Start development server:
```bash
npm run dev
```

4. Start production server:
```bash
npm start
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api` - API information and available endpoints
- `GET /api/users` - Sample users endpoint

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (not implemented yet)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production) | development |
| `PORT` | Server port | 3000 |

## Project Structure

```
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Docker Support

This application is designed to work with Docker and Kubernetes. Docker configuration files will be added in future updates.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC License