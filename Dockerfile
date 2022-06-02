###
# Builder image
###
FROM node:18.2.0-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build source
RUN npm run build

###
# Production image
###
FROM nginx:1.21.6-alpine as app

WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# Prefix commands and start production
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]