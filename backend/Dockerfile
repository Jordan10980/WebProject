# Utilisation de PHP avec Apache
FROM php:8.1-apache

WORKDIR /var/www/html

# Installer les extensions PHP
RUN docker-php-ext-install pdo pdo_mysql

# Copier le code source
COPY . /var/www/html/

# Ajouter la configuration Apache
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Activer mod_rewrite
RUN a2enmod rewrite

# Correction des permissions
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]
