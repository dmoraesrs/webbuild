FROM nginx

ENV HOME=/usr/share/nginx/html/
RUN rm -rf /usr/share/nginx/html/*
USER root

#COPY . $HOME