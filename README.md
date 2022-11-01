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


se aplica CI a nuestro repositorio 

subimos nustro repo a la rama development para correr CI y al hacer merge a main que corra CD

![image](https://user-images.githubusercontent.com/97038060/199343454-b48e5bfa-4c7b-4fdd-8976-19ac8fec20c7.png)


configuramos render para hacer deploy de nuestro proyecto (seguir indicaciones bootcamp)

deployment falla 

![image](https://user-images.githubusercontent.com/97038060/199360037-fac0a4ac-3859-4ddc-a183-8d3a1142c290.png)























