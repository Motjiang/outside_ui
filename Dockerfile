FROM node:18.20.4 

WORKDIR /app

COPY packages*.json ./

# RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN npm run build --configuration=production

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY  /app/dist/outside_ui/browser /usr/share/nginx/html

EXPOSE 80