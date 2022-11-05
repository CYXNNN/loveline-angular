FROM nginx:1.23.2-alpine
COPY /dist/loveline-angular /usr/share/nginx/html
