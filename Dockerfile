FROM nginx

ENV HOME=/usr/share/nginx/html/

COPY . $HOME