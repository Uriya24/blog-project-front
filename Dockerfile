FROM node:20 as builder

COPY . /blog-front

WORKDIR /blog-front

RUN npm ci
RUN npm run build

FROM nginx

COPY --from=builder /blog-front/build /usr/share/nginx/html