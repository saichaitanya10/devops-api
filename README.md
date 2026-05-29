# DevOps API — Dockerized Node.js REST API with CI/CD Pipeline

![CI/CD Pipeline](https://github.com/saichaitanya10/devops-api/actions/workflows/deploy.yml/badge.svg)

A production-ready Node.js REST API containerized with Docker and deployed on AWS EC2, featuring a fully automated CI/CD pipeline using GitHub Actions.

## 🚀 Live Demo
> API running on AWS EC2:
```
http://ec2-13-127-214-188.ap-south-1.compute.amazonaws.com:3000
```

## 🏗️ Architecture

```
Developer pushes code
        ↓
   GitHub Actions
        ↓
  Build Docker Image
        ↓
  Push to DockerHub
        ↓
  Deploy on AWS EC2
        ↓
  API Live on Port 3000
```

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js + Express | REST API |
| Docker | Containerization |
| GitHub Actions | CI/CD Pipeline |
| DockerHub | Container Registry |
| AWS EC2 | Cloud Deployment |
| Ubuntu 24.04 | Server OS |

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API status and version |
| GET | `/health` | Health check with uptime |
| GET | `/api/items` | Sample items list |

## ⚙️ CI/CD Pipeline

Every push to the `main` branch automatically:
1. Triggers GitHub Actions workflow
2. Builds a Docker image
3. Pushes the image to DockerHub
4. Image is ready to be pulled and deployed on EC2

## 🐳 Run Locally with Docker

```bash
# Pull the image from DockerHub
docker pull saichaitanya0/devops-api:latest

# Run the container
docker run -d -p 3000:3000 --name devops-api saichaitanya0/devops-api:latest

# Visit
http://localhost:3000
```

## 🔧 Run Locally without Docker

```bash
# Clone the repo
git clone https://github.com/saichaitanya10/devops-api.git
cd devops-api

# Install dependencies
npm install

# Start the server
npm start

# Visit
http://localhost:3000
```

## 📁 Project Structure

```
devops-api/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD pipeline
├── src/
│   └── index.js             # Express API
├── Dockerfile               # Docker image definition
├── .dockerignore            # Docker ignore rules
├── .gitignore
├── package.json
└── README.md
```

## 🔐 GitHub Secrets Required

| Secret | Description |
|--------|-------------|
| `DOCKER_USERNAME` | DockerHub username |
| `DOCKER_PASSWORD` | DockerHub access token |
