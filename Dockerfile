# Usa una imagen base con Node.js instalado
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package.json package-lock.json /app/

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . /app

# Expone el puerto en el contenedor
EXPOSE 3000

# Comando predeterminado a ejecutar cuando se inicie el contenedor
CMD ["npm", "start"]

