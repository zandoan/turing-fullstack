Turing tshirtshop Example Database
==================================

This is a database to use when creating the FullStack challenge.

This database includes many stored procedures to do work rather than 
relying on the code for business logic.
You may find the stored procedure defitions in the `schema.sql` file
and documented in the tshirtshop.pdf file.


Create Database
---------------

Run this SQL on your MySQL server to create the database

```
create database <database-name> character set utf8mb4 collate utf8mb4_unicode_ci;
```


Import Database Schema
----------------------

Included are three SQL files.  The first you'll run is the schema file to create
your database structure.  Run this from your command line.

```
mysql -u <user> -p -h <host> <database-name> < schema.sql
```


Import Fixtures
---------------

Fixture data is importantly different from other database data.  Fixtures are required
for your database to function properly.  All other data is dynamic to the database.

```
mysql -u <user> -p -h <host> <database-name> < fixtures.sql
```


Import Data
-----------

Sample data for the database is included.  You may import this data instead of creating
your own.

```
mysql -u <user> -p -h <host> <database-name> < data.sql
```


Entity Relationship Diagram
---------------------------

The file `tshirtshop.pdf` is created from the `tshirtshop.skipper` file.  This PDF is included
to document this database.  Find listings for all stored procedures as well as how
foreign keys are created based on relationships.  
