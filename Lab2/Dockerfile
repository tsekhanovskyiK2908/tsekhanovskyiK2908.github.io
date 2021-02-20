# Initializes a new build stage and set the base image(docker pull node)
FROM node

# Copy site files
COPY . ./usr/apps/natours
# Setting working directory for instructions
WORKDIR /usr/apps/natours

# Updating packages and installing packeges needed to unarchiving
RUN apt-get update && apt-get upgrade -y
RUN apt-get install apt-utils -qy
# Installing vim for editing files
RUN apt-get install vim -qy
# Installing all dependencies
RUN npm install
# If case of deployment
RUN npm run build:css

# Labels which give you some kind of information about images
LABEL version="1.0.0"
LABEL description="node base image used to build this image" multilinelabel="Run container in interactive mode\
and don't forget to link free port on your machine to container's 3000"

# Container listens on the specified network ports 
EXPOSE 3000/tcp

# Commands which executed when container starts
# In case of deployment
CMD [ "npm", "run", "devserver" ]
# In case of development
# CMD [ "npm", "run", "start" ]