const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CI/CD Pipeline</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #fafafa;
            color: #2c3e50;
            line-height: 1.6;
            padding: 40px 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 60px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        h1 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 50px;
            letter-spacing: -0.02em;
        }

        .pipeline {
            display: flex;
            flex-direction: column;
            gap: 40px;
            position: relative;
        }

        .pipeline::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50px;
            bottom: 50px;
            width: 2px;
            background: #e2e8f0;
            transform: translateX(-50%);
            z-index: 0;
        }

        .stage {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 32px;
            position: relative;
            z-index: 1;
            transition: all 0.3s ease;
        }

        .stage:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-color: #cbd5e0;
        }

        .stage-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 24px;
        }

        .stage-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            font-weight: 500;
        }

        .dev-stage .stage-icon { background: #3182ce; }
        .jenkins-stage .stage-icon { background: #e53e3e; }
        .docker-stage .stage-icon { background: #38a169; }
        .k8s-stage .stage-icon { background: #d69e2e; }

        .stage-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #1a202c;
        }

        .stage-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            align-items: start;
        }

        .stage-description {
            color: #4a5568;
            font-size: 1rem;
            line-height: 1.7;
        }

        .stage-details {
            background: #f7fafc;
            border-radius: 8px;
            padding: 24px;
            border-left: 4px solid #e2e8f0;
        }

        .stage-details h4 {
            color: #2d3748;
            margin-bottom: 16px;
            font-size: 1.1rem;
            font-weight: 600;
        }

        .stage-details ul {
            list-style: none;
        }

        .stage-details li {
            padding: 8px 0;
            color: #4a5568;
            position: relative;
            padding-left: 20px;
            transition: color 0.2s ease;
        }

        .stage-details li:hover {
            color: #2d3748;
        }

        .stage-details li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #a0aec0;
            font-weight: bold;
        }

        .flow-arrow {
            text-align: center;
            font-size: 2rem;
            color: #cbd5e0;
            margin: 0;
            z-index: 2;
            position: relative;
        }

        .tools-section {
            margin-top: 60px;
            background: #f8f9fa;
            border-radius: 12px;
            padding: 40px;
        }

        .tools-section h2 {
            text-align: center;
            font-size: 1.8rem;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 32px;
        }

        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
        }

        .tool-card {
            background: white;
            border-radius: 8px;
            padding: 24px;
            text-align: center;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
        }

        .tool-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .tool-icon {
            font-size: 2.5rem;
            margin-bottom: 12px;
            display: block;
        }

        .tool-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 8px;
        }

        .tool-desc {
            color: #4a5568;
            font-size: 0.9rem;
        }

        .dev-stage { border-left: 4px solid #3182ce; }
        .jenkins-stage { border-left: 4px solid #e53e3e; }
        .docker-stage { border-left: 4px solid #38a169; }
        .k8s-stage { border-left: 4px solid #d69e2e; }

        .dev-stage .stage-details { border-left-color: #3182ce; }
        .jenkins-stage .stage-details { border-left-color: #e53e3e; }
        .docker-stage .stage-details { border-left-color: #38a169; }
        .k8s-stage .stage-details { border-left-color: #d69e2e; }

        @media (max-width: 768px) {
            .container {
                padding: 40px 30px;
            }
            
            .stage-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            h1 {
                font-size: 2rem;
            }

            .pipeline::before {
                display: none;
            }
            
            .tools-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CI/CD Pipeline: Docker + Kubernetes + Jenkins</h1>
        
        <div class="pipeline">
            <div class="stage dev-stage">
                <div class="stage-header">
                    <div class="stage-icon">💻</div>
                    <div class="stage-title">Development & Source Control</div>
                </div>
                <div class="stage-content">
                    <div class="stage-description">
                        Developer writes Express.js application code and commits to Git repository. The application includes routes, middleware, and server configurations.
                    </div>
                    <div class="stage-details">
                        <h4>Components</h4>
                        <ul>
                            <li>Express App</li>
                            <li>Package.json dependencies</li>
                            <li>Dockerfile for containerization</li>
                            <li>Kubernetes manifests (YAML)</li>
                            <li>Jenkinsfile pipeline definition</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="stage jenkins-stage">
                <div class="stage-header">
                    <div class="stage-icon">⚙️</div>
                    <div class="stage-title">Jenkins CI/CD Pipeline</div>
                </div>
                <div class="stage-content">
                    <div class="stage-description">
                        Jenkins detects code changes, triggers pipeline execution, and orchestrates the entire deployment process automatically.
                    </div>
                    <div class="stage-details">
                        <h4>Pipeline Steps</h4>
                        <ul>
                            <li>Checkout code from Git</li>
                            <li>Install npm dependencies</li>
                            <li>Run Express.js tests (optional)</li>
                            <li>Build Docker image</li>
                            <li>Push to container registry</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="stage docker-stage">
                <div class="stage-header">
                    <div class="stage-icon">🐳</div>
                    <div class="stage-title">Docker Containerization</div>
                </div>
                <div class="stage-content">
                    <div class="stage-description">
                        Application is packaged into a Docker container with all dependencies, creating a portable and consistent deployment unit.
                    </div>
                    <div class="stage-details">
                        <h4>Docker Process</h4>
                        <ul>
                            <li>Multi-stage build for Node.js app</li>
                            <li>Express server runs on port 3000</li>
                            <li>Image tagged with build number</li>
                            <li>Pushed to Docker Hub registry</li>
                            <li>Ready for Kubernetes deployment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="stage k8s-stage">
                <div class="stage-header">
                    <div class="stage-icon">☸️</div>
                    <div class="stage-title">Kubernetes Deployment</div>
                </div>
                <div class="stage-content">
                    <div class="stage-description">
                        Kubernetes pulls the Docker image and deploys it as pods with load balancing, health checks, and auto-scaling capabilities.
                    </div>
                    <div class="stage-details">
                        <h4>K8s Resources</h4>
                        <ul>
                            <li>Deployment (manages pods/replicas)</li>
                            <li>Service (load balancer/networking)</li>
                            <li>Health checks & readiness probes</li>
                            <li>Rolling updates with zero downtime</li>
                            <li>Auto-scaling based on demand</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="tools-section">
            <h2>Technology Stack</h2>
            <div class="tools-grid">
                <div class="tool-card">
                    <div class="tool-icon">⚡</div>
                    <div class="tool-name">Express.js</div>
                    <div class="tool-desc">Fast web framework for Node.js</div>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">⚙️</div>
                    <div class="tool-name">Jenkins</div>
                    <div class="tool-desc">CI/CD automation server</div>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">🐳</div>
                    <div class="tool-name">Docker</div>
                    <div class="tool-desc">Container platform</div>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">☸️</div>
                    <div class="tool-name">Kubernetes</div>
                    <div class="tool-desc">Container orchestration</div>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">🟢</div>
                    <div class="tool-name">Node.js</div>
                    <div class="tool-desc">JavaScript runtime</div>
                </div>
                <div class="tool-card">
                    <div class="tool-icon">📦</div>
                    <div class="tool-name">Docker Hub</div>
                    <div class="tool-desc">Container registry</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;