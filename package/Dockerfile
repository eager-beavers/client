FROM nginx
RUN mkdir /app
WORKDIR /app
RUN mkdir ./build
ADD ./dist ./build
#RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]