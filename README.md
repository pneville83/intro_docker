# TESTING A MIGRACIONES A DB

instalamos mocha, supertest y chai

creamos nuestro archivo de test

![image](https://user-images.githubusercontent.com/97038060/197907200-f63f70a0-125c-4634-a875-b701411a470b.png)


actualizamos nuestro package.json con los scripts del test

![image](https://user-images.githubusercontent.com/97038060/197907288-0424fc15-3833-4781-863f-eb31a468aceb.png)


creamos nuestro archivo mocha

![image](https://user-images.githubusercontent.com/97038060/197907357-7e76d921-7cad-48b6-88a2-9392673047c7.png)


y finalizamos con nuestro archivo teardown.js

![image](https://user-images.githubusercontent.com/97038060/197907467-f77cc554-1fe8-4ad3-8768-b57198584f80.png)


corremos npm test 

aqui mos arroja falla en el test no imprime el nombre al momento de correrlo

![image](https://user-images.githubusercontent.com/97038060/197907578-94356f47-b4ad-49b9-9594-a96389551dda.png)




![image](https://user-images.githubusercontent.com/97038060/197907611-44fc27f1-3555-4074-83b2-2de78592778d.png)


se realizan cambios en el test  pero no reconoce el titulo name dentro de la tabla aunque lo imprime el test da failling 

  ![image](https://user-images.githubusercontent.com/97038060/197958961-24438fe2-7f6c-4f14-ad96-d9befd3af091.png)


![image](https://user-images.githubusercontent.com/97038060/197959124-5285055e-b3c6-4a1f-948a-0b5b921d87d9.png)

# corriendo test con corrección en el codigo

![image](https://user-images.githubusercontent.com/97038060/198155453-15eff19b-5518-4179-ad28-ef5a7a1fe56d.png)


se crear una nueva branch (development) para que realice nuestro proceso CI y poder subir a main

![image](https://user-images.githubusercontent.com/97038060/199342611-f7e7ac1d-244e-4e33-ba10-4e8fd9708658.png)


proceso terminado


subimos nustro repo a la rama development para correr CI y al hacer merge a main que corra CD

![image](https://user-images.githubusercontent.com/97038060/199343454-b48e5bfa-4c7b-4fdd-8976-19ac8fec20c7.png)


configuramos render para hacer deploy de nuestro proyecto (seguir indicaciones bootcamp)

# Deployment con Render


![image](https://user-images.githubusercontent.com/97038060/199362274-6a199601-ec23-48bb-9693-918335cac3a9.png)


# Prueba con post para crear usuraio con en la base de render 

![image](https://user-images.githubusercontent.com/97038060/199410285-54c438e4-711f-4f81-a09a-a0c28ffc5534.png)

Creamos un costumer nuevo 

![image](https://user-images.githubusercontent.com/97038060/199410333-4a1679de-4f40-4024-ad9b-37106cc85c83.png)

# conectamos nuestra bse de Render con DBeaver

![image](https://user-images.githubusercontent.com/97038060/199410933-c64b3952-3659-4640-932d-85a596bd999e.png)

creamos una nueva conexion y escogemos from JDBC url
luego en render copiamos la url externa de la base datos 

![image](https://user-images.githubusercontent.com/97038060/199411239-696778b3-d332-4b45-8d6e-30a0dc2beb44.png)

![image](https://user-images.githubusercontent.com/97038060/199411440-cbb89fb8-7ac6-4daa-9d81-b83e93f96b84.png)

damos en continuar y ya tenemos nuestra base conectada a DBeaver


![image](https://user-images.githubusercontent.com/97038060/199411573-8d892532-59c0-4005-9577-a80b558d76b9.png)

# Se crea primera imagen con Docker 

Como empezar con Dcoker 

1.- Creamos nuestro archivo Dockerfile (dentro del proyecto que queremos crear la imagen)

2.- Creamos nuestro archivo .dockerignore (aqui debemos poner todo lo que no requerimos para crear la imagen que esta
dentro de nuestro proyecto)

3.- construimos nuestra imagen con el comando docker build -t peternev/express_js:1.0 . (express_js sera el nombre de nuestra imagen el punto indica que
buscara dentro de la misma ubicación un archivo Dockerfile si  esta en otra ruta la debemos especificar luego del punto)

4.- luego podemos revisar lo creado con el comando docker images

5.- debemos configurar la ip para poder correr nuestro localhost eso lo logramos obteniendo nuestra ip (podemos ver en 
google cual es nuestra ip), esa ip la debemo incorporar en las variables de enterno (nuestro archivo .env) en nuestro 
caso 181.199.40.16

6.- procedemos correr nuestra imagen con el siguiente comando "docker run --env-file=.env -it -p 4000:8080 express_js" 
(-p nos permite acoplar el host en que queremos que corra en este caso seria 4000 e indicar en el host donde 
proviene que es 8080 de acuerdo a nuestro archivo dockerfile.





























