# Dockerfile for Connect April 2022 demo
# UI pulls data from from testbed api in local docker-compose network

# Builder
FROM node:16.13.2-alpine3.15 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

#COPY .env.connect .env.production
COPY .env.development .env.development
COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install
RUN npm run reactBuild

# Final
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
