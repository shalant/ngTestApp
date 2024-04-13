FROM node:18-alpine3.16 AS build
WORKDIR /usr/source/repos/angCryptoCurrencyLP/crypto-checker/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
COPY ./ /usr/source/repos/angCryptoCurrencyLP/crypto-checker/src/app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/source/repos/angCryptoCurrencyLP/crypto-checker/src/app/dist/crypto-checker /usr/share/nginx/html

EXPOSE 80



