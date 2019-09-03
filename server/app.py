from flask import Flask
from flask import render_template,request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("control.html")

@app.route('/he')
def hello_world():
    return 'Hello World!'

@app.route('/rgb_led',methods=['GET','POST'])
def rgb_led():
    req = request.get_json()
    r_val = req['rvalue']
    g_val = req['gvalue']
    b_val = req['bvalue']
    print(r_val)
    return 'Hello World!'


if __name__ == '__main__':
    app.run(host='0.0.0.0')
