# Use official lightwieht Node
# https://hub.docker.com/_/node
FROM node:fermium-slim

# Create and change to the app directory
WORKDIR /usr/src/app

#copy dependecies to the container image 
COPY package*.json ./

# install production dependencies
RUN npm install --production

# Copy local code to the container image 
COPY . .

EXPOSE 8080

# Run de web service on container startup
CMD ["node", "index.js"]