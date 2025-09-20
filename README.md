# Docker K8s Express App

A production-ready Express.js application designed for Docker and Kubernetes deployment with beautiful CI/CD pipeline visualization.

## Features

- ✅ Express.js server with clean architecture
- ✅ Beautiful CI/CD pipeline visualization page
- ✅ Professional responsive design
- ✅ Environment variable support
- ✅ Ready for Docker containerization
- ✅ Kubernetes deployment ready

## Quick Start

### Prerequisites

- Node.js (>= 16.0.0)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Start production server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## What You'll See

The application displays a beautiful CI/CD pipeline visualization showing:

1. **Development & Source Control** - Express.js app development
2. **Jenkins CI/CD Pipeline** - Automated build and deployment
3. **Docker Containerization** - Application packaging
4. **Kubernetes Deployment** - Container orchestration

## API Endpoints

- `GET /` - Beautiful CI/CD pipeline visualization page

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
├── Dockerfile          # Docker configuration
└── README.md           # This file
```

## Technology Stack

- **Express.js** - Fast web framework for Node.js
- **Node.js** - JavaScript runtime
- **Docker** - Container platform (ready for containerization)
- **Kubernetes** - Container orchestration (ready for deployment)
- **Jenkins** - CI/CD automation (pipeline visualization)

## Docker Support

This application is designed to work with Docker and Kubernetes. The Dockerfile is included for containerization.

## CI/CD Pipeline

The application demonstrates a complete DevOps pipeline:
1. Code development and Git commits
2. Jenkins automated builds
3. Docker image creation
4. Kubernetes deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC License
