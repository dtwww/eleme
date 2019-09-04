from app import db

class store(db.Model):
    __tablename__ = 'store'
    id = db.Column(primary_key=True)
    store = db.Column()
    sell_per_month = db.Column()
    distance_and_time = db.Column()
    qisong = db.Column()