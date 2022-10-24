# Migraciones con Sequelize

Creación del primer modelo y migración

se instala sequelize-cli el cual instala las caprtas y archivos para la creación de modelos y migración
se modifica el archivo package.json que se crea en config para poder acceder 

![image](https://user-images.githubusercontent.com/97038060/197435827-8b6a4808-194b-4338-9dba-ea68dc253615.png)

# NOTA: aqui no se como usar ENV para evitar colocar los datos sensibles de acceso a la base de datos 

Creamos el primer modelo a migar mediante el siguiente comando 

npx sequelize-cli model:generate --name Courses --attributes name:string,teacherName:string,durationHours:numbers

este genera al archivo para crear una nueva tabla y ejecutamos con el siguiente comando 

npx sequelize-cli db:migrate

![image](https://user-images.githubusercontent.com/97038060/197436090-12f6d877-6c5d-4d3c-bdc6-7b27dfa9d0b5.png)

revisamos sequelize meta y la creación de la nueva tabla dentro de dbeaver

![image](https://user-images.githubusercontent.com/97038060/197436211-4b7df188-18d4-4b6c-989f-aa61666a5bd4.png)


la creacion de la nueva tabla con los encabezados solicitados en la migracion 

![image](https://user-images.githubusercontent.com/97038060/197436302-e2b5d902-e3e0-4316-ab7a-d046465c533d.png)















