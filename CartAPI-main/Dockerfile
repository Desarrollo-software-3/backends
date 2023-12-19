# Usa la imagen oficial de Python como base
FROM python:3.10.11

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de requerimientos al contenedor
COPY requirements.txt /app/

# Copia los archivos de tu aplicación al contenedor
COPY . /app

# Instala las dependencias de la aplicación

RUN pip install --no-cache-dir blinker==1.6.3
RUN pip install --no-cache-dir certifi==2023.7.22
RUN pip install --no-cache-dir click==8.1.7
RUN pip install --no-cache-dir colorama==0.4.6
RUN pip install --no-cache-dir dnspython==2.4.2
RUN pip install --no-cache-dir Flask==3.0.0
RUN pip install --no-cache-dir Flask-Cors==4.0.0
RUN pip install --no-cache-dir Flask-PyMongo==2.3.0
RUN pip install --no-cache-dir itsdangerous==2.1.2
RUN pip install --no-cache-dir Jinja2==3.1.2
RUN pip install --no-cache-dir MarkupSafe==2.1.3
RUN pip install --no-cache-dir pymongo==4.5.0
RUN pip install --no-cache-dir Werkzeug==3.0.0

WORKDIR /app/src
# Expone el puerto en el que se ejecuta tu aplicación Django
EXPOSE 8000

# Configura las variables de entorno, si es necesario
# ENV DJANGO_SETTINGS_MODULE=myapp.settings.production

# Ejecuta el comando para migrar la base de datos y arrancar el servidor
CMD ["python", "app.py"]