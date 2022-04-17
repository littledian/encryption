FROM node:16.14.2-alpine3.15 as builder

WORKDIR /app
COPY . .

RUN npm set-script prepare ""
RUN npm install
RUN npm run build

FROM nginx:1.21.6
MAINTAINER littledian 1197434548@qq.com

WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /etc/nginx/html

EXPOSE 3000
