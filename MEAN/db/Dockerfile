# immagine di base
FROM mysql:5
# aggiungo variabili d'ambiente
# nome database
ENV MYSQL_DATABASE mean
# password del database
ENV MYSQL_ROOT_PASSWORD=password
# inizializzazione db
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/