FROM node:v15.0.1
COPY package.json yarn.lock ./
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"]
WORKDIR /usr/src/app