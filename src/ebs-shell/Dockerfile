# build stage
FROM node:10.4.0-alpine as build-stage

WORKDIR /opt/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# production stage
FROM nginx:1.13.12-alpine as production-stage

COPY --from=build-stage /opt/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]