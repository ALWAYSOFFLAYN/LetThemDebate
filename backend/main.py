from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def handle_api_request():
    data = request.json
    api_url = data.get('api_url')
    topic = data.get('topic')

    # Make the API request
    response = requests.get(api_url, params={'topic': topic})

    if response.status_code == 200:
        return jsonify({'result': response.text})
    else:
        return jsonify({'error': 'Invalid API or error occurred'}), 400

if __name__ == '__main__':
    app.run(debug=True)