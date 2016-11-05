FROM nginx:latest

MAINTAINER DeviantJS

ENV APP_ENV development

VOLUME /var/cache/nginx

COPY ./.docker/config/nginx.conf /etc/nginx/nginx.conf
COPY ./dist /var/www/public
COPY ./.certs/server.crt    /etc/nginx/server.crt
COPY ./.certs/server.key    /etc/nginx/server.key
COPY ./.certs/dhparam.pem   /etc/nginx/dhparam.pem
RUN chmod 600 /etc/nginx/server.key

EXPOSE 80 443

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
