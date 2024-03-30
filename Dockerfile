# Use an official Node.js image as the base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose port 5173
EXPOSE 5173

# Define the command to start the application
CMD ["npm", "run", "dev"]
