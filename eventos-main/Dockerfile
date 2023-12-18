# Utiliza una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install
# Copia el archivo .env al directorio de trabajo en el contenedor
COPY .env ./
# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 4000

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev"]
