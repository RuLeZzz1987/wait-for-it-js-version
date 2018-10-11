FROM node:8-alpine

COPY ./ /bar
COPY wait-for /usr/bin/wait-for
RUN chmod +x /usr/bin/wait-for

WORKDIR /bar

CMD ["npm", "start"]