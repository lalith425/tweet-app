# Stage 0: compile angular frontend
FROM node:latest as node
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build --prod

# Stage 1: serve app with nginx server
FROM nginx:alpine
COPY src/nginx/ect/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/tweetapp  /usr/share/nginx/html
EXPOSE 80