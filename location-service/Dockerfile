
FROM node:12

COPY . /opt/app

WORKDIR /opt/app/location-service

RUN yarn

CMD yarn db:migrate && yarn watch