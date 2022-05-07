# current node.js lts for the next 18 minutes
# if changing this version, please also update it in ./.nvmrc
FROM node:16.15.0

WORKDIR /wordlibz

# setup 
COPY package*.json ./

# for some reason these permissions just do not get set correctly
RUN mkdir -p /home/node/wordlibz/node_modules/.cache
RUN apt install git

RUN chown -R node:node /wordlibz

EXPOSE 3000

# don't run as root!
USER node

RUN npm install