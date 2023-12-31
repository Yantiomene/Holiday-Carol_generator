from flask import Flask, render_template, request, jsonify
from .generate_carol import generate_carol  # Create this module for carol generation

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_carol', methods=['POST'])
def generate_carol_api():
    # Get user input from the POST request
    user_input = request.json  # Assuming input is sent as JSON

    # Call your function to generate the carol
    carol = generate_carol(user_input)

    # Return the generated carol as JSON response
    return jsonify({'carol': carol})

if __name__ == '__main__':
    app.run(debug=True)
