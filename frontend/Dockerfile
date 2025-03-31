# Utiliser une image Node.js pour la construction
FROM node:18 AS build

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers du projet
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers et construire l'application
COPY . .
RUN npm run build

# Utiliser une image Nginx 
FROM nginx:latest

# Copier les fichiers build dans Nginx
COPY --from=build /app/build /usr/share/nginx/html

# sur le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

