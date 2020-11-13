<p align='left'>
<p align="center">
 <img  width="40%" height="20%" src="https://github.com/sebas-dev-lab/Ecommerce-FitnessApp/blob/main/client/public/GymLogo.gif">
</p>

## Ecommerce

Este proyecto forma parte del proceso de formación de "SoyHenry" para el programa Full Stack Web Developer, constituyendo una de las prácticas finales de duración de un mes y llevada a cabo junto a un equipo de 5 integrantes bajo metodología SCRUM. 

**El equipo estuvo ingrado por los siguientes colaboradores:**

[omarz8](https://github.com/omarz8)

[quasirsg](https://github.com/quasirsg)

[lucianoo95](https://github.com/lucianoo95)

[silverbryan](https://github.com/silverbryan)

[fayser17](https://github.com/fayser17) // [sebas-dev-lab](https://github.com/sebas-dev-lab)

**En el presente proyecto se trabajaron con las siguientes tecnologías y herramientas:**

Front: REACT, REDUX, REACT-ROUTER-DOM, REACTSTRAP, FORMIK ,REACT-BOOTSTRAP-ICONS,ETC.

BacK: NODE JS, EXPRESS, POSTGRESQL, SEQUELIZE, JSONWEBTOKEN, BCRYPT, ETC.

<code><img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" /> </code>
<code><img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/></code>
<code><img src="https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"/>  </code>
<code><img src="https://img.shields.io/badge/react_router%20-CA4245.svg?&style=for-the-badge&logo=react-router&logoColor=white"/>  </code>
<code><img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> </code>
<code><img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/></code>
<code><img src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/> </code>
<code><img src="https://img.shields.io/badge/css-%23239120.svg?&style=for-the-badge&logo=css3&logoColor=white" /></code>
<code><img src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/></code>


## Correr el proyecto
Pasos:

**1. Para levantar el proyecto deberás clonar o realizar un fork del mismo.** 

**2. En tu computadora abres la terminal, una para "api" y otra para "client" y tu editor de texto favorito.**

**3. Luego debes realiar npm install en client y api.**

**4. En `api` vas a tener que crear un archivo llamado: `.env` que tenga la siguiente forma:**

DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost

Tenés que reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado por github, ya que contiene información sensible (las credenciales).

El contenido de `client` fue creado usando: Create React App.


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v



## Feactures del proyecto

La aplicación del e-commerce cuenta con las siguiente feactures:

### Usuarios no Autenticados

Un Visitante anónimo puede navegar por el e-commerce, ver y buscar productos.

- PRODUCTOS:
    + ...ver la lista completa de productos (catálogo), para ver todo lo disponible para comprar.
    + ...refinar el listado por categorías, para poder ver los items en los que estoy interesado.
    + ...buscas productos, para poder encontrar rápido los productos que quiero comprar.
    + ...ver los detalles de un producto individual (incluida las fotos, descripciones, reviews, etc...), asi puede determinar si quiero ese producto o no.

- CARRITO:
    + ...poder agregar items a mi carrito de compras desde el listado o desde a página de detalles de un producto, para poder comprarlos despues.
    + ...sacar items de mi carrito, en caso que decida no quererlos.
    + ...editar cantidades de los items de mi carrito, en caso que quiera mas o menos cantidad de un item en particular.
    + ...refrescar la página, o irme y volver, y todavía tener mi carrito de compras (sin haberme creado una cuenta).
    + ...poder crearme una cuenta, loguearme y seguir editando ese mismo carrito, asi no pierdo los items seleccionados.
- CHECKOUT:
    + ...poder comprar todos los items de un mi carrito.
    + ...especificar una dirección de envio y un email cuando hago el checkout, asi me envien la compra a lugar que dije.
    + ...recibir un email de confirmación que hice la compra.
    + ...recibir un email de notificación cuando la orden fue despachada.
- GESTION DE CUENTA:
    + ...poder crear una cuenta, asi puede hacer otras cosas como dejar un review.
    + ...poder logearme usando Google o Github, para no tener que acordarme de un password nuevo.

### Usuarios Autenticados

Los usuarios que hayan creado su cuenta, pueden hacer todo lo que hace un usuario guest y además:

###### Como un Usuario Autenticado

- GESTION DE CUENTA:
    + ...poder desloguearme, asi nadie más pueda usar mi sesión.
    + ...ver el historial de ordenes previas, asi puede reever las ordenes que hice en el pasado.
    + ...ver los detalles de una orden que hice en el pasado, incluyendo:
        * Los items comprados, con sus cantidades.
        * Links a la página del producto comprado.
        * Fecha y hora de la compra.
- REVIEWS:
    + ...poder dejar reviews a los productos, que incluyan texto y un sistema de cinco estrellas.

### Admin

Los usuarios administradores pueden manejar el sitio, los productos que se listan y los items que están disponibles.

###### Como un administrador

- GESTION DE PRODUCTOS:
    + ...poder crear y editar productos, con nombre, descripción, precio y uno o más fotos, tal que los visitantes puedan ver la última información de lo que se vende.
    + ...poder crear categorías, para que los usuarios puedan filtrar los items.
    + ...poder agregar o sacar categorías de los items (los items deben poder aceptar múltiples categorías).
    + ...gestionar la disponibilidad de un item. (un item que no esta disponible, no deberá estar listado en la página, pero su detalle debe seguir siendo accesible desde el historial de compras o con su URL, pero debe mencionar que el item no está disponible).

- GESTION DE ORDENES:
    + ...poder ver una lista de todas las ordenes, para poder ver y revisar las ordener.
    + ...poder filtrar as ordenes por su estado (creada, procesando, cancelada, completa).
    + ver los detalles de una orden específica, asi puedo revisarla y actualizar su estado.
    + ...poder cambiar el estado de una orden (creada => procesando, procesando => cancelada || completa).

- GESTION DE USUARIOS:
    + ...poder hacer que un usuario se convierta en admin.
    + ...borrar a un usuario, asi no puedan logearse más.
    + ...forzar una password reset para un usuario.


