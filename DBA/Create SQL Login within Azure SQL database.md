**Create SQL Login within Azure SQL database**

In the **Master** Database run following script

    CREATE LOGIN [SQLAccountName] WITH PASSWORD = supercomplicatedPassword

In the **Target** database run the following code 

    CREATE USER [SQLAccountName] FROM LOGIN [SQLAccountName] 

In the **Target** database run the following code 

    SP_ADDROLEMEMBER 'db_reader', 'SQLAccountName'


In the example above have use a fixed database role `'db_reader'` see [this article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver15) for details on which roles can be used.<br/>
Details on `'SP_ADDROLEMEMBER'` see [this article](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-addrolemember-transact-sql?view=sql-server-ver15).

> Written with [StackEdit](https://stackedit.io/).
