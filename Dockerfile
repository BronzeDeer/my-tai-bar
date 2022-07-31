FROM nginxinc/nginx-unprivileged:1.23.0-alpine

COPY src/ /usr/share/nginx/html/
