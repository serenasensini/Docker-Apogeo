from textblob import TextBlob
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/analyze", methods=['POST'])
def analyse_sentiment():
    print(request);
    sentence = request.get_json()['sentence']
    polarity = TextBlob(sentence).sentences[0].polarity
    print(polarity);
    return jsonify(
        sentence=sentence,
        polarity=polarity
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)