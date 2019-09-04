from flask import Flask, make_response, jsonify
from flask import render_template, request

app = Flask(__name__)

@app.route('/he')
def hello_world():
    return 'Hello World!'

@app.route('/store_list')
def store_list():
    req = request.get_json()
    response = jsonify({
        "data":[{
                "store": "川锅一号",
                "sell_per_month": 666,
                "distance and time": 32,
                "qisong": 15
            },
            {
                "store": "堕落小龙虾",
                "sell_per_month": 777,
                "distance and time": 32,
                "qisong": 15
            },
            {
                "store": "多番",
                "sell_per_month": 888,
                "distance and time": 32,
                "qisong": 15
            }
        ]
    })
    return response

@app.route('/order_list')
def order_list():
    req = request.get_json()
    response = jsonify({
        {
            "store" : "川锅一号",
            "price" : 66,
            "time" : "9月4日 18:50",
            "qisong" : 15
        },
        {
            "store": "堕落小龙虾",
            "price": 777,
            "time": "9月4日 18:50",
            "qisong": 15
        },
        {
            "store": "多番",
            "price": 88,
            "time": "9月4日 18:50",
            "qisong": 15
        }
    })
    return response

if __name__ == '__main__':
    app.run(host="0.0.0.0")
