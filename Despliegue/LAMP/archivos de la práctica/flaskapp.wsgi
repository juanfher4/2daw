import sys
import site


# Ruta del entorno virtual
venv_path = '/var/www/html/flaskapp/.venv'


# Añadir los paquetes del entorno virtual a sys.path
site.addsitedir(f'{venv_path}/lib/python3.11/site-packages')


# Añadir el directorio del proyecto a sys.path
sys.path.insert(0, '/var/www/html/flaskapp')


# Configurar el intérprete de Python para usar el entorno virtual
sys.executable = f'{venv_path}/bin/python'


# Importar y arrancar la aplicación Flask
from app import app as application
