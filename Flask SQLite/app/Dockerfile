# immagine di base
FROM python:3.6

# esponiamo la porta 5000
EXPOSE 5000

# cartella di lavoro
WORKDIR /app

# copia del file dove sono definite le librerie da definire nella cartella di lavoro
COPY requirements.txt /app

# installazione delle librerie tramite pip
RUN pip install -r requirements.txt

# copia del file che contiene l’applicazione nella cartella di lavoro
COPY app.py /app

# esecuzione dell’applicazione
CMD python app.py
