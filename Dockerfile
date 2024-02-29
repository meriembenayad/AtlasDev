# Use official Python image as the base image
FROM python:latest as backend

# Set the working directory in the container
WORKDIR /backend

# Copy the requirements file into the container
COPY requirements.txt .

# Install Flask and other dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask application code into the container
COPY . .

# Expose the port that Flask runs on
EXPOSE 5000

# Run the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]

# Use Node.js image as the base image for frontend
FROM node:latest as frontend

# Set the working directory for the frontend
WORKDIR /frontend

# Copy frontend files to container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files to container
COPY frontend/ .

# Expose the port that Vite runs on
EXPOSE 3000

# Run Vite dev server
CMD ["npm", "run", "dev"]
