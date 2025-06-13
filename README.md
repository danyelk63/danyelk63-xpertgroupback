# Proyecto Full-Stack: Cat Breeds App

Este proyecto es una aplicación full-stack que permite a los usuarios explorar razas de gatos, ver detalles e imágenes, y gestionar la autenticación mediante JWT. La aplicación está dividida en dos partes: el backend (Express) y el frontend (Angular).

## Herramientas necesarias

A continuación, se incluyen enlaces a todas las herramientas necesarias para ejecutar este proyecto:

- [Node.js](https://nodejs.org/) (v18 o superior): Entorno de ejecución para JavaScript.
- [Docker](https://www.docker.com/): Para contenedores opcionales.
- [Angular CLI](https://angular.io/cli): Herramienta para trabajar con proyectos Angular.
- [Postman](https://www.postman.com/): Para probar las API del backend.
- [Git](https://git-scm.com/): Para clonar y gestionar el repositorio del proyecto.

Asegúrate de instalar estas herramientas antes de comenzar con la configuración y ejecución del proyecto.

---

## Repositorio del Backend

El código fuente del backend está disponible en el siguiente repositorio de GitHub:

[https://github.com/danyelk63/danyelk63-xpertgroupback](https://github.com/danyelk63/danyelk63-xpertgroupback)

## Repositorio del FrontEnd

El código fuente del frontend está disponible en el siguiente repositorio de GitHub:

[https://github.com/danyelk63/danyelk63-xpertgroupfront](https://github.com/danyelk63/danyelk63-xpertgroupfront)

---

## **Backend**

### **Requisitos previos**
- Node.js (v22 o superior)
- Docker (opcional, para contenedores)

### **Instrucciones de ejecución**

#### **1. Configuración del entorno**
Crea un archivo `.env` en la carpeta `back` con las siguientes variables:

```env
NODE_ENV=development
PORT=3000
JWT_SECRET=your_secret_key
DB_URI=your_database_uri
```

#### **2. Instalación de dependencias**
Ejecuta los siguientes comandos en la carpeta `back`:

```bash
npm install
```

#### **3. Ejecución en desarrollo**
Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

#### **4. Ejecución en producción**
1. Compila el proyecto:
   ```bash
   npm run build
   ```
2. Inicia el servidor:
   ```bash
   npm start
   ```

#### **5. Uso con Docker**
1. Construye la imagen:
   ```bash
   docker compose build
   ```
2. Ejecuta el contenedor:
   ```bash
   docker compose up
   ```

---

## **Frontend**

### **Requisitos previos**
- Node.js (v19 o superior)
- Angular CLI
- Docker (opcional, para contenedores)

### **Instrucciones de ejecución**

#### **1. Instalación de dependencias**
Ejecuta los siguientes comandos en la carpeta `front`:

```bash
npm install
```

#### **2. Ejecución en desarrollo**
Para iniciar el servidor de desarrollo:

```bash
ng serve
```

Accede a la aplicación en: `http://localhost:4200`

#### **3. Ejecución en producción**
1. Compila el proyecto:
   ```bash
   ng build --prod
   ```
2. Sirve los archivos estáticos con un servidor como Nginx o Apache.

#### **4. Uso con Docker**
1. Construye la imagen:
   ```bash
   docker compose build
   ```
2. Ejecuta el contenedor:
   ```bash
   docker compose up
   ```

---

## **Notas adicionales**
- Asegúrate de que los puertos 3000 y 4200 estén disponibles en tu máquina.
- Configura correctamente las variables de entorno en producción.
- Usa un proxy inverso como Nginx para manejar solicitudes en producción.

---

¡Disfruta explorando razas de gatos con esta aplicación! 🐱
