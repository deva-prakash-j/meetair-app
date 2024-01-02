FROM node:16.16.0-alpine3.16 AS build

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=build /usr/src/app/dist/mstore-app /usr/share/nginx/html
