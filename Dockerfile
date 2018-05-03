# Use Node latest as the image
FROM node:6.5

# Use the "app" folder
ADD . /microservice

WORKDIR /microservice

# Install dependencies
RUN npm install --silent

# Expose server port
#EXPOSE 8080

# Run app
CMD ["npm", "run", "watch"]