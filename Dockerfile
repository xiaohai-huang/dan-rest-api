FROM node:14-alpine

WORKDIR /rest-api-server

# Install dependices
COPY package.json yarn.lock ./
RUN ["yarn", "install", "--production", "--frozen-lockfile"]

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]