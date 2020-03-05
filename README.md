# Kinduct Full-Stack Coding Challenge



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites


```
XAMPP (Php, MySQL, Apache)
NodeJS
npm module

```

### Installing

A step by step series of examples that tell you how to get a development env running

**Backend Server API**

```
Download the folder with the name backend1
Move the folder to htdocs of XAMPP
Use port 80 for XAMPP
Use inbuild XAMPP MySQL 
 -  hostname - localhost
 -   username - 'root'
 -   password - ' '

Run the below Sql queries in PhpMyAdmin to create database and table
```
**SQL Queries**
```sql
--
-- Database: `my_db`
--

CREATE DATABASE IF NOT EXISTS my_db DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;

USE my_db;
-- --------------------------------------------------------
--
-- Table structure for table "players"
--

CREATE TABLE players (
  id int(200) NOT NULL AUTO_INCREMENT primary key,
  name varchar(200),
  age varchar(150),
  city varchar(150),
  province varchar(150),
  country varchar(150)
)ENGINE = INNODB DEFAULT CHARSET = utf8;
```

**Front-end Server**

```
Download the folder with the name react-api
Move inside the folder and run 'npm install' to install dependencies
Run npm start to start the react server on port 3000
Enter localhost:3000 on the browser
```
###### Backend API Endpoints
- To upload JSON
  Method = POST
  Form Data = File.json
  http://localhost/backend1/api/upload

- To fetch all players
Method = GET
http://localhost/backend1/api/players

- To fetch Specific Player
Method = GET
http://localhost/backend1/api/playerByName?name=Shubham

- To delete a Player with specific ID
Method = Delete
http://localhost/backend1/api/deletePlayer
**add Key-->Value (name-->shubham) to x-www-formurlencoded in postman

## Authors

* **Shubham Narang** 

