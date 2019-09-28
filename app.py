import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL', '') or "sqlite:///db/beer.sqlite"

db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
samples = Base.classes.beer


@app.route("/landing")
def landing():
    return render_template("landing.html")


@app.route("/index")
def index():
    return render_template("index.html")

# enter zipcode, search should take you to the leaflet page with marker on map

@app.route("/abv")
def abv():
    return render_template("abv.html")   

#scatterplot
    # x= categories
    # y= abv
    # bubbles will be the beer name

@app.route("/brew-map")
def brewmap():
    return render_template("brew-map.html")

# connected to index page

@app.route("/categories")
def categories():
    return render_template("categories.html")

@app.route("/sampleinfo")
def sampleInfo():
# Use Pandas to perform the sql query
    stmt = db.session.query(samples).statement
    df = pd.read_sql_query(stmt, db.session.bind)
    data = {
        # donut will use beer category totals 
        "category_labels": df.categories.tolist(),
        "category_totals": df.groupby(["categories"]).sum().tolist(),
        "beer_name":df.name.tolist(),
        "abv": df.abv.tolist(),
        }
    return jsonify(data)

    # print(df)
    # return jsonify(stmt)


@app.route("/brew-guide")
def brewguide():
    return render_template("brew-guide.html")


@app.route("/about")
def about():
    return render_template("about.html")


    
if __name__ == "__main__":
    app.debug=True
    app.run()
