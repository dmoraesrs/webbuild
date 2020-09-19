FROM nginx

ENV HOME=/usr/share/nginx/html/

USER root

COPY . $HOME