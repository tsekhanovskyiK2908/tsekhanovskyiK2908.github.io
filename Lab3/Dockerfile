# Initializes a new build stage and set the base image(docker pull node)
FROM node AS BUILD

# Copy site files
COPY . ./usr/apps/natours
# Setting working directory for instructions
WORKDIR /usr/apps/natours

# Updating packages and installing packeges needed to unarchiving
RUN apt-get update && apt-get upgrade -y
RUN apt-get install apt-utils -qy
# Installing all dependencies
RUN npm install && npm run build

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=BUILD ./usr/apps/natours/app/dist/Lab3 .
ENTRYPOINT ["nginx", "-g", "daemon off;"]