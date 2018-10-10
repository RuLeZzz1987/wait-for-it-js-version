FROM node:8-alpine

COPY ./ /bar
COPY ./wait /usr/bin/wait
RUN chmod +x /usr/bin/wait

WORKDIR /bar

CMD ["npm", "start"]