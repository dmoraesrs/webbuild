FROM nginx

ENV HOME=/usr/share/nginx/html/

USER root

RUN ls

COPY . /usr/share/nginx/html/