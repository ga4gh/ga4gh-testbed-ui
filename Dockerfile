# Dockerfile for Connect April 2022 demo
# UI pulls data from from testbed api in local docker-compose network

# Builder
FROM node:16.13.2-alpine3.15 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY .env.development .env.production
COPY public public
COPY src src
RUN npm run reactBuild
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

# Final
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Specify the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
