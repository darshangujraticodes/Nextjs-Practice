# MySQL Database Course Notes

### Online Compiler of MySQL = https://onecompiler.com/mysql/

### What is Database ?

1. It is an organized collection of structured information, typically stored electronically in computer system. It allows for data to be easily access, manage, modified, updated and deleted.

2. It serves as the backbone for all application to store all types of data

### Key Features of Database

1. Persistent Storage
2. Structured & Organized
3. Easily Retrievable
4. Concurrent Access
5. Security and Integrity

### What is DBMS ?

It is software that manage database for performing CRUD operation like, inserting, updated and deleting data. It act as interface between database and user application

Types of DBMS <br>

1. Relational DBMS : MySQL, PostgreSQL
2. Non Relational DBMS : MongoDB, Cassandra, DynamoDB
3. In Memory DBMS : Redis, Memcached

### Concept of Relational Model

1. Tables (relations)
2. Columns (Attribute)
3. Row (Records)
4. Keys (Primary and Foreign Key)
5. Relationships between them : 1:1, 1:many, many:many

### Lets Learn MySQL(Microsoft Structured Query Language)

It is of 3 Category : <br>

1.  DDL (data definition language) : CREATE, ALTER, DROP, TRUNCATE, RENAME
2.  DML (data manipulation language) : SELECT, INSERT, UPDATE, DELETE
3.  DCL (dtaa control language) : GRANT, REVOKE
4.  TCL (Transactional Control Language) : COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION

### Select Query

> [!NOTE]
> Semicolon(;) is must to end command and note as syntax format sql keywords in CAPITAL (upper case) and other normal words in small case | example Below

1. Select Database syntax : USE database_name; `USE nextapp;`
2. Display all tables in Database : `SHOW tables;`

### Database Schema and terminilogy

Database schema : It is logical blueprint or structure that define how data is oraganized within database

1. Tables in database
2. Relationship between those tables
3. attributes within each table
4. contraints and rules that govern the data eg. not null, default value ,
5. data type of each fields

Types of schema

1. Database schema : complete structure of entire database
2. Table schema : structure of specific table including column, data types, and constraints
3. Subschema : A portion of db visible to specific user or application

Data Types in MySQL

1. Numeric -> integer, floating points ( decimal value with rounding value) and fxed points(decimal value with precise decimal digits) (decimal)

   - tiny integer
   - smal integer
   - medium integer
   - big integer
   - floating
   - double
   - decimal

2. String ->

   - char
   - varchar
   - text
   - medium text
   - long text
   - enum('male','female', 'transgender') -> select single value from multiple defined options
   - set('monday', 'tuesday', 'wednesday', 'thursday', 'friday') -> select multiple value from multiple defined options

3. Date -> Date and time

   - Date
   - datetime
   - time
   - year
   - timestamp

4. Binary Datatype -> all files like photos, video, pdf and text file stored in binery form in pc disk (storage capacity)\_

   - Binary -> help to store encrtion keys (255 bytes)
   - Var Binary -> help to store encrtion keys (64 kb)
   - Tiny BLOB -> (255 bytes)
   - BLOB -> (64 kb)
   - Medium BLOB -> (16 mb)
   - Long BLOB -> (4 gb)

### Database Query

1.  Database Operation :

    - `create database school_db;` -> it help to create database
    - `show databases;` -> it help to display all database created in MySQL
    - `select database();` -> it help to show current database in which we are working
    - `use school_db;` -> it helps to select database on which we have to start working
    - `drop database school_db;` -> it help to delete database

2.  Table Operation : <br>

    - Insert Command

      - syntax : `create table table_name (column_name datatype constraints, column_name datatype constraints   ... table_constraints);` <br>
      - constraint Info :

      1.  unique -> name value should be unique but it can be null.
      2.  primary key -> unique factor which can help to index database records (index means ordering data in sequential format)
      3.  not null -> it means value cannot be stored as empty
      4.  default (value) -> it means data default value will be stored if value is not pass while inserting data.
      5.  auto_increment -> it fetch the highest value, increment it and store it new unique id record.
      6.  Expression bracket -> ( condion or calling function() ) -> circular bracket define expression area where data condition is writen eg (salary > 0.0)
      7.  decimal(10,2) -> it is an data type in which it has 2 parameter (10 -> define number of digits allowed to display ,2 -> define number of digits allowed to display after decimal point)

      ```
         create table employee{
            employee_id int primary key auto_increment,
            first_name varchar(50) not null,
            last_name varchar(50) not null,
            hire_date date default (CURRENT_DATE()),
            email varchar(100) unique,
            phone_number varchar(100) unique,
            salary decimal(10,2) check (salary > 0.0),
            is_active boolean default true,
            gender enum('male' , 'female' , "other") not null,
            hobbies set ('Reading', 'Sport', 'Exploring', 'Gaming' ),
            created_at timestamp default CURRENT_TIMESTAMP,
            updated_at timestamp default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
            foreign key (department_id) references departments(department_id)
            }
      ```

    - Alter Command

      - `alter table employee add column skills varchar(100) `
      - `alter table employee add column emergency_contact varchar(100) not null check (emmergency_contact REGEXP '^[A-Za-z]+ : [0-9+-]+$' )`
      - `alter table employee modify column phone_number not null check ( phone_number REGEXP '^(\+91[\s-]?|91[\s-]?)?[6-9]\d{9}$' ) `
      - `alter table employee add check ( email REGEXP '^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' ) `
      - `alter table employee rename column phone_number to contact `
      - `alter table employee drop column skills`
      - `alter table employee add foreign key (department_id) reference departments(department_id)`

    - Insert Command

      - Insert into table using below query
      - Syntax : `insert into table_name(column1, column2...) values(values1, values2...) `
      - `insert into table employee(first_name, last_name, email, contact, gender, department_id) values ('Vaibhav', 'shah', 'vaibhav@gmail.com', '+9890559574', 'female', '55')`

    - Drop Command

      - Note if A table foreign key is added in other table then table A cannot be deleted first, first delete all other dependency and then delete that table
      - query : `drop table employee,department`
      - query : `drop table if exists ok`

3.  Select Operation :

    - Select Query is used to display table data
    - `select first_name, last_name, salary from employee` -> to display only selected column data
    - `select * from employee` -> to display all columns data
    - `select  first_name as 'First Name' from employee ` -> display first name column data and edit sql head to Suggested title 'First Name' for better readability
    - `select * from employee where department ='IT' ` -> where clause help to filter the data from table and only fetch the details in which department is of IT only
    - `select * from employee ORDER BY salary DESC/ASC` -> order by keyword is used to sort table data in this DESC denotes (Descending) and ASC denotes (Ascending)
    - `select * from employee where department = "IT" ORDER BY salary DESC LIMIT 1` -> Limit keyword is used to restrict the table data display it will display required number records only from top.
    - `select distinct department from employee;` -> distinct keyword will fetch the data of different value only, same value data will be ignored and will not be displayed.
    - `select  concat(first_name,' ',last_name) as 'Full Name' , salary as 'Current Salary' ,salary * 1.1 as 'Salary After Increment'  from employee;`
      - Note : as keyword to replace sql column name with our suggested Column name
      - (salary \* 1.1) is an expression of new column which store operation data on salary.
    - Predefine function
      - concat(first_name, " ", last_name) -> it is used for concatenation
      - round(salary, 2) -> it is used for concatenation -> it is used to round of decimal value
      - avg(salary) -> it is used to find average of salary
    - `select first_name, salary from employee where department  = 'IT' UNION  select first_name, salary from employee where department  = 'HR' `
    - `select count(*) from employee group by department;`
    - Select Query can handle more things rather than just column data example are : `select 5 * 2;` , `select NOW();`, `select 5 > 3;` , `select LENGTH('hello');`

    - Select Query WHERE CLAUSE Logical Operator

      - `select * from books where price < 30;`
      - `select * from books where category = 'technology' and price < 30;`
      - `select * from books where (category = 'technology' or category = 'mystery') and price < 30;`
      - `select * from books where category != 'technology';`
      - `select * from books where not category = 'technology';`
      - `select * from books where first_name is null;`
      - `select * from books where first_name is not null;`

    - Select Query WHERE CLAUSE Pattern Matching

      - `select * from books where title like '%SQL%'` -> it match the pattern in describe in '%pattern%' in respective column and return the match result.
      - Note (%pattern%) : pattern is found in middle ,(%pattern) : pattern should be found after some text, (pattern%) : pattern should be found before some text.
      - `select * from books where title like binary '%sql%'` -> It match Pattern in case sensitive format.
      - `select * from books where title like '_ql'` -> It will match pattern in which one letter is there ahead of ql. number of underscow define number of number of letter gap in wild card pattern match.
      - `select * from books where price between 20 and 30;` -> in this it will fetch values which satify that range and both end range value is inclusive.
      - `select * from books where books category in ('Technology', 'Mystery', 'Astronomy')` -> it will fetch the values which match the suggested options.
      - `select * from books where price > ( select avg(price) from book;)` -> sub query inside main query | fetch books whose price > avg(price)
      - Practice CASE 1 : `select * from books where year(publication_date) = 2023 and price < (select avg(price) from books );` find book publish in 2023 and price < avg price
      - Practice CASE 2 : `select * from books where category = 'technology' and title like '%data%' and in_stock > 50;`
      - Practice CASE 3 : `select * from books where (  category = 'Technology' and price > 30 ) or (   category = 'Mystery' and price < 20 ) ;`
      - Practice CASE 4 : `select * from books where (author like '%son%' or author like '%th%' ) and ( publication_date > '2023-03-1' );`
      - Practice CSAE 5 : `select * from books where not category = 'Technology'; ` || `select * from books where category != 'Technology';`

    - Select Query to order sql table data
      - `select * from employees order by age [ASC/DESC]; ` -> Arrange data in ascending order (ASC - Ascending (default) | DESC - Descending order)
      - `select * from employees where department = "IT" order by name;`
      - `select * from employees order by binary name; ` -> case sensitive sorting
