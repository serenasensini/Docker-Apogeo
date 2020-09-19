# immagine di base
FROM node
# creazione della cartella di lavoro
RUN mkdir -p /usr/src/app
# set della cartella di lavoro
WORKDIR /usr/src/app
# copia del file delle dipendenze
COPY package.json /usr/src/app
# installazione delle dipendenze
RUN npm install
# copia del codice
COPY . /usr/src/app
# esposizione della porta
EXPOSE 3000
# avvio dell'app
CMD ["npm", "start"]