FROM node:19.7-alpine3.17 AS builder

# ARG VITE_END_POINT
# ARG VITE_MEILISEARCH_HOST
# ARG VITE_MEILISEARCH_KEY
# ARG VITE_USER
# ARG VITE_PAS

# ENV VITE_END_POINT=${VITE_END_POINT}
# ENV VITE_MEILISEARCH_HOST=${VITE_MEILISEARCH_HOST}
# ENV VITE_MEILISEARCH_KEY=${VITE_MEILISEARCH_KEY}
# ENV VITE_USER=${VITE_USER}
# ENV VITE_PAS=${VITE_PAS}

WORKDIR /app


RUN apk update && apk upgrade
RUN apk add git
RUN npm i yarn

COPY yarn.lock ./
COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.23.3-alpine
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
