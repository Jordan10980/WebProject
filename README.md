# 🌐 Projet Web - Mairie de Beauvais

## 👋 Présentation

Bienvenue sur le projet Web développé dans le cadre du Master 1 Cybersécurité à l’Université Paris Cité (2024/2025) par **Jordan Dohou** et **Ulrich Schmith**.

Ce projet consiste en une **refonte complète du site web de la mairie de Beauvais**, avec une fonctionnalité de **sondage citoyen**. Il s'agit d'une application **full-stack** développée en :

- **Frontend** : ReactJS
- **Backend** : PHP
- **Base de données** : MySQL
- **Conteneurisation** : Docker
- **Orchestration** : Kubernetes (via Minikube)
- **Sécurité** : RBAC, Secrets Kubernetes, HTTPS (certificat auto-signé)

> 📎 Lien du dépôt : [https://github.com/Jordan10980/WebProject](https://github.com/Jordan10980/WebProject)

---

## 🚀 Fonctionnalités principales

- Inscription & Connexion utilisateurs
- Sondage : vote sur des préférences alimentaires
- Interface web moderne et responsive
- Déploiement multi-conteneurs avec Kubernetes
- Sécurité renforcée (HTTPS, accès RBAC)
- Accès via une gateway Ingress personnalisée : `https://mairie-beauvais.local`

---

## 🛠️ Installation locale

### 📦 Prérequis

- [Node.js](https://nodejs.org/)
- [PHP](https://www.php.net/)
- [Docker](https://www.docker.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/)

---

## ⚙️ Lancer le projet étape par étape

### 1. Cloner le dépôt

```bash
git clone https://github.com/Jordan10980/WebProject.git
cd WebProject
```

## ⚙️ Déploiement complet

### 2. Build & push Docker images

#### Frontend

```bash
cd frontend
docker build -t user_docker/frontend .
docker push user_docker/frontend
```

#### Backend

```bash
cd ../backend
docker build -t user_docker/backend .
docker push user_docker/backend
```

### 3. Lancer Docker Desktop

Avant tout, assure-toi que **Docker Desktop** est lancé sur ta machine.  
C'est indispensable pour que Minikube puisse démarrer correctement.

### 4. Démarrer Minikube

```bash
minikube start
minikube dashboard
```

### 5. Déployer les services

```bash
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/mysql-service.yaml

kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml

kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
```

### 6. Activer l’Ingress
```bash
kubectl apply -f k8s/ingress-front.yaml
kubectl apply -f k8s/ingress-back.yaml
```

Ajoute cette ligne à ton fichier /etc/hosts :

```bash
127.0.0.1 mairie-beauvais.local
```

👉 Accès à l'application : https://mairie-beauvais.local


### 7. Activer le tunnel Minikube (accès aux services)

Dans un terminal séparé (à laisser ouvert), exécute :

```bash
minikube tunnel
```
Cela permettra à ton navigateur d'accéder correctement à https://mairie-beauvais.local.

### 8. Initialiser la base de données MySQL
```bash
kubectl exec -it $(kubectl get pods -l app=mysql -o jsonpath="{.items[0].metadata.name}") -- mysql -u root -p
```
Mot de passe : celui que tu as défini dans mysql-deployment.yaml

```bash
use Mairie
```
Puis, copie-colle le contenu du fichier bdd.sql (fourni dans le projet) dans le terminal MySQL pour créer les tables.

### 9. Déployer la sécurité (RBAC)
Pour restreindre les accès des services, applique les fichiers de sécurité :

```bash
kubectl apply -f k8s/serviceaccount-frontend.yaml
kubectl apply -f k8s/role-frontend.yaml
kubectl apply -f k8s/rolebinding-frontend.yaml

kubectl apply -f k8s/serviceaccount-backend.yaml
kubectl apply -f k8s/role-backend.yaml
kubectl apply -f k8s/rolebinding-backend.yaml
```

Ces fichiers créent les comptes de service, les rôles et les droits limités associés au frontend et au backend.





