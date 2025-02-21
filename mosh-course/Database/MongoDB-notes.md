# Mongo DB Course Notes

### What is MongoDB ?

It combination of 2 word mongo and db, mongo means huge and db means database. Database which store large amoun t of data

|    Database    |                   MySQL                   |           MongoDB (NoSQL DB)           |
| :------------: | :---------------------------------------: | :------------------------------------: |
|    DB Type     |               Relational DB               |           Document Oriented            |
| data structure |          Table with row & column          |             JSON Structure             |
|     Schema     |               fixed schema                |            flexible schema             |
|  Scalability   |             Vertical Scaling              |           Horizontal Scaling           |
|  Transactions  |         Support ACID transactions         |       Support ACID transactions        |
|  Performance   | Use for structured data & complex queries | Use for unstructured & large datasets  |
|   Use Cases    |        Banking ,Ecom ,ERP ,CRM etc        | Big data, data analytics, social media |

<br>

> [!NOTE]
>
> - Vertical Scaling : (Adding more CPU / RAM to single server)
> - Horizontal Scaling : (Adding more server for distributed storage)
> - ACID stands for Atomicity, Consistency, Isolation, and Durability—a set of properties that ensure reliable database transactions. These properties are crucial for maintaining data integrity in databases, especially in relational systems like MySQL.

### MongoDB Commands

- **Create new Database** <br>
  Syntax : use database_name <br>
  example : `use college`

- **Collections Operation** <br>

  - Create Collection and Insert new data <br>
    example : `db.students.insertOne({name: "Rohit", roll_no:1, stream:"Science"})`

  - Display Collection data <br>
    example : `db.students.find()` -> fetch all values in collections <br>
    example : `db.students.findOne({name:"Ram"})` -> fetch single value <br>
    example : `db.students.find().count()` -> display all values count <br>
    example : `db.students.find({hobbies: 'Anime'})` -> fetch all value on the basis of list data<br>
    example : `db.students.find({ 'idCard.hasDomicile' : false})` -> fetch all nested doc collection value <br>

  - Update Collection data <br>
    It will update only Ram Value <br>
    It is also called nested document (creating doc inside doc) <br>
    Nested Doc has limit of 100 and Max Memory size to store nested doc is 16mb <br>
    Here we are creating idCard nested doc inside student main doc with `$set` <br>
    example : `db.students.updateOne({name: "Ram"},{ $set: {  idCard : { hasDomicile: true, hasAadharCard : true   } } })` <br>

    It will update all Value <br>

    example : `db.students.updateMany({},{ $set: {  idCard : { hasDomicile: false, hasAadharCard : true   } } })`
    example : `db.students.updateMany({},{ $set: {  hobbies: ['Anime', 'reading books','exploring new place']  } })`
