#-*- coding: UTF-8 -*-
from app import api

# 店家信息接口--GET
from app.json.store import store
api.add_resource(store, '/store')