FROM node:16.13.0-alpine3.12 as builder

WORKDIR /app
COPY . .

RUN npm set-script prepare ""
RUN npm install
RUN npm run build

FROM node:16.13.0-alpine3.12
MAINTAINER littledian 1197434548@qq.com

WORKDIR /app
COPY . .
COPY --from=builder /app/.next ./.next

RUN npm set-script prepare ""
RUN npm install --production

CMD ["npm", "start"]

EXPOSE 3000
