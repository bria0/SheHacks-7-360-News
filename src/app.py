from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello():
    return 'hello, world!'
if __name__ == '__main__':
    app.run()

@app.route('/summary', methods=['POST'])
def get_summary():
    data = request.get_json()
    summary = do_something_with_data(data['search_query'])
    return summary

@app.route('/summary', methods=['POST'])
def get_summary():
    data = request.get_json()
    summary = do_something_with_data(data['search_query'])
    return summary
