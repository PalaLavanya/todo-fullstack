# Full-Stack Todo Application

This is a simple full-stack Todo application built using Spring Boot (backend) and React (frontend).

## Tech Stack

Backend:
- Java 21
- Spring Boot
- Spring Data JPA
- H2 In-Memory Database
- Maven

Frontend:
- React
- Axios
- CSS

## Features

Backend:
- Create Todo (title is mandatory)
- Get all Todos
- Update Todo
- Delete Todo
- RESTful API design
- Layered architecture (Controller → Service → Repository)

Frontend:
- Display list of todos
- Add new todo
- Mark todo as complete or incomplete
- Delete todo
- Connected to backend using Axios

## Project Structure

```
todo-fullstack/
│
├── src/
│   ├── main/
│   └── test/
│
├── pom.xml
│
└── todo-frontend/
    ├── src/
    ├── public/
    └── package.json
```

## How to Run

Run Backend:

cd todo  
mvn spring-boot:run  

Backend runs at:  
http://localhost:8080  

Run Frontend:

cd todo/todo-frontend  
npm install  
npm start  

Frontend runs at:  
http://localhost:3000  

## Author

Lavanya Pala
