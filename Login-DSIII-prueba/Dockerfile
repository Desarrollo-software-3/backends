# Usa la imagen oficial de Python como base
FROM python:3.10.11

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de requerimientos al contenedor
COPY requirements.txt /app/

# Copia los archivos de tu aplicación al contenedor
COPY . /app

# Instala las dependencias de la aplicación
RUN pip install -r requirements.txt

# Expone el puerto en el que se ejecuta tu aplicación Django
EXPOSE 8000

RUN python manage.py collectstatic --noinput

# Expone el puerto en el que se ejecuta tu aplicación Django
EXPOSE 8000

# Utiliza Gunicorn para arrancar la aplicación
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myapp.wsgi:application"]