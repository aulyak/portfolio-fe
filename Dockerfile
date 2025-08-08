# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Nuxt app
RUN npm run build

# Expose port (default Nuxt port)
EXPOSE 3000

# Start Nuxt in production mode
CMD ["npm", "start"]
