FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3030
CMD ["npm", "run", "dev"]