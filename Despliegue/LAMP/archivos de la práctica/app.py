#import mysql.connector
import pymysql

from flask import Flask, render_template


app = Flask(__name__)


# Conexión a la base de datos
#conexion = mysql.connector.connect(
conexion = pymysql.connect(
  host="localhost",
  user="root",
  password="Juan_fher_439",  # Añadir la contraseña si es necesario
  database="alumnos_db"
)


@app.route('/')
def index():
  cursor = conexion.cursor()
  cursor.execute("SELECT * FROM alumnos")
  alumnos = cursor.fetchall()
  return render_template('index.html', alumnos=alumnos)


if __name__ == '__main__':
   app.run()
