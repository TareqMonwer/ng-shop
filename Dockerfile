FROM node:16.15-alpine as build

COPY package.json /app/package.json
WORKDIR /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist/ecommerce /usr/share/nginx/html
EXPOSE 80
