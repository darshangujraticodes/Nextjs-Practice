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

  - CRATE | Insert Data in Collections <br>
    It is of 2 types : insertMany() | insertOne() <br>
    example : `db.students.insertOne({name: "Rohit", roll_no:1, stream:"Science"})` <br>
    example : `db.students.insertOne( { rollno:100 , name: 'Archisha'  } )` <br>
    example : `db.students.insertMany( [ { rollno:101 , name: 'deepak'  } , { rollno:102 , name: 'aniket'   } , {   rollno:103 , name: 'sahil'   }   ]  )` -> note while inserting multiple data insert in list []

  - READ | Display Collection data <br>
    findOne() -> return single doc record <br>
    find() -> return cursor or copy of new json array valaue on which operation can be performed eg forEach, <br>
    example : `db.students.find()` -> fetch all values in collections <br>
    example : `db.students.findOne({name:"Ram"})` -> fetch single value <br>
    example : `db.students.find().count()` -> display all values count <br>
    example : `db.students.find({hobbies: 'Anime'})` -> fetch all value on the basis of list data<br>
    example : `db.students.find({ 'idCard.hasDomicile' : false})` -> fetch all nested doc collection value <br>
    example : `db.students.find({}).forEach((x) => {printjson(x)})` -> forEach loop on find() <br>
    example : `db.students.find({ rollno : { $gte : 5 , $lte : 25 } }).count()` -> conditional operator <br>
    example : `db.students.find({ rollno : { $gt : 5 , $lt : 30 }  }).toArray()` -> return json doc into array values <br>

  - UPDATE | Update data in Collection <br>
    To update only single values in collection <br>
    It is also called nested document (creating doc inside doc) <br>
    Nested Doc has limit of 100 and Max Memory size to store nested doc is 16mb <br>
    Here we are creating idCard nested doc inside student main doc with `$set` <br>
    example : `db.students.updateOne({name: "Ram"},{ $set: {  idCard : { hasDomicile: true, hasAadharCard : true   } } })` <br>

    To update all values in collection <br>
    example : `db.students.updateMany({},{ $set: {  idCard : { hasDomicile: false, hasAadharCard : true   } } })` -> add nested doc inside main doc <br>
    example : `db.students.updateMany({},{ $set: {  hobbies: ['Anime', 'reading books','exploring new place']  } })` -> adding list inside main doc <br>
    example : `db.students.updateMany({ rollno : { $gte : 50 } },{ $set: {  hobbies: ['Anime', 'reading books','exploring new place']  } })` -> adding list inside main doc <br>
    example : ` db.students.updateMany({ rollno : {$gt : 80} } , {  $set : { isEligible : true }  })` -> will update all rollno greater than 80 with isEligible true

  - DELETE | Delete data in Collection <br>
    example : `db.students.deleteOne({ name: 'ajay' })` -> it help to delete single value in collections <br>
    example : `db.students.deleteMany({ rollno : { $gte : 3 , $lte : 5 } } )` -> it help to delete multiple value in collections
