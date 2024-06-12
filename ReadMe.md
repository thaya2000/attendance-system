# Attendance System

A simple attendance system application that allows users to log in and view a home page. Includes authentication, dark mode toggle, and notifications for login status.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing Credentials](#testing-credentials)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Introduction

The Attendance System is a web application designed to manage and track attendance. It provides user authentication, dark mode toggle, and notifications for login status.

## Features
- User Authentication
- Dark Mode Toggle
- Notifications for login status
- Persistent login state

## Prerequisites
- Node.js
- npm 
- Java

## Installation

### Clone the Repository
```sh
git clone https://github.com/thaya2000/attendance-system.git
cd attendance-system
```

### Backend Setup
1. Navigate to the backend directory:
```sh
cd server/attendance-system
```

2. Install dependencies:
```sh
./mvnw install
```

### Frontend Setup
1. Navigate to the Frontend directory:
```sh
cd ../../client/attendance-system
```

2. Install dependencies:
```sh
npm install
```

## Running the Project

```sh
# Run backend
cd server/attendance-system
./mvnw spring-boot:run

# Run frontend
cd ../../client/attendance-system
npm run dev
```

## Testing Credentials

```sh
Username: user
Password: user

or 

Username: admin
Password: admin
```

### If you want to add custom usernames and passwords, follow these steps:

1. Open the credentials.txt file located at:

```sh
server/attendance-system/src/main/resources/credentials.txt
```

2. Add your custom username and password in the following format:

```sh
username password

For example:

john_doe mypassword123
jane_doe anotherpassword456
```

## Project Structure

```sh
attendance-system/
├── client/           # React frontend
│   └── attendance-system/
│       ├── node_modules/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── pages/          # React pages (Login, Home)
│       │   ├── redux/          # Redux store and slices
│       │   ├── services/       # API services
│       │   ├── App.css         
│       │   ├── App.jsx         # Main App component
│       │   ├── index.css       # Global styles
│       │   ├── main.jsx        # Entry point for React
│       ├── .eslintrc.cjs
│       ├── .gitignore
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.js
│       ├── tailwind.config.js
│       └── vite.config.js
├── docs/             # Documentation and screenshots
├── server/           # Spring Boot backend
│   └── attendance-system/
│       ├── .idea/
│       ├── .mvn/
│       ├── src/              # Backend source code
│       │   └── main/
│       │       └── java/
│       │           └── org/
│       │               └── yarlnet/
│       │                   └── com/
│       │                       └── attendancesystem/
│       │                           ├── config/
│       │                           ├── controller/
│       │                           ├── dto/
│       │                           ├── model/
│       │                           ├── service/
│       │                           └── AttendanceSystemApplication.java
│       ├── target/
│       ├── .gitignore
│       ├── HELP.md
│       ├── mvnw
│       ├── mvnw.cmd
│       └── pom.xml
└── ReadMe.md       # Project documentation

```

## Technologies Used
- React
- Redux
- Vite
- Tailwind CSS
- Spring Boot
- Axios
- react-hot-toast

## Contact

- Maintainer : Thayanan Thevarasa
- Email : thevarasathayanan@gmail.com


