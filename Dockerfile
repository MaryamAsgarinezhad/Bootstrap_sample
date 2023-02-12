FROM node
WORKDIR /app/
ADD ./package.json ./
RUN yarn install
RUN yarn build

FROM nginx
WORKDIR /app/
COPY ./src/pages/*.html /usr/share/nginx/html/
COPY ./src/js/main-pannel.js /usr/share/nginx/html/
COPY ./src/static/ /usr/share/nginx/html/static/
ADD ./ /usr/share/nginx/html/
