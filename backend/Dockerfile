FROM node
WORKDIR /app
COPY . /app
RUN npm i
ENV BE_PORT 33333
EXPOSE ${BE_PORT}
CMD ["node", "index.js"]