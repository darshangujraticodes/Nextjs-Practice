# MySQL Database course notes by Code with Mosh

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
