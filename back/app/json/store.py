# -*- coding: UTF-8 -*-
from app import db, models
from flask_restful import Resource, reqparse, abort

# 参数初始化
parse = reqparse.RequestParser()
parse.add_argument('id')
parse.add_argument('store')
parse.add_argument('sell_per_month')
parse.add_argument('distance_and_time')
parse.add_argument('qisong')

class store(Resource):
    # 查询信息
    def get(self):
        # 得到参数列表
        args = parse.parse_args()
        # 得到参数列表中的id
        id = args.get('id')
        # id为空，查询列表
        if (id is None):
            l = []
            stores = models.store.query.all()
            for item in stores:
                l.append({
                    "id": item.id,
                    "store": item.store,
                    "sell_per_month": item.sell_per_month,
                    "distance_and_time": item.distance_and_time,
                    "qisong": item.qisong
                })
            d = {}
            d["list"] = l
            return d, 200
        # id不为空，根据id查询
        else:
            # 判断超市是否存在
            store = models.store.query.get(id)
            if store:
                return {
                    "id": store.id,
                    "store": store.store,
                    "sell_per_month": store.sell_per_month,
                    "distance_and_time": store.distance_and_time,
                    "qisong": store.qisong
                }, 200
            else:
                return {
                    abort(404, message="{} doesn't exist".format(id))
                }