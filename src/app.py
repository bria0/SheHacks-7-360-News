from flask import Flask, request
import Newsapi

app = Flask(__name__)
@app.route('/')
def hello():
    return 'hello, world!'
if __name__ == '__main__':
    app.run()

@app.route('/summary', methods=['POST'])
def summarize():
    # data = request.get_json()
    text = request.get_json()['text']

    summary = Newsapi.get_summary(text)

    return summary

# @app.route('/summary', methods=['POST'])
# def get_summary():
#     data = request.get_json()
#     summary = do_something_with_data(data['search_query'])
#     return summary

##on react, post request and will have name of text field
##request.form.get("name of text field")