**Create SQL Login within Azure SQL database**

In the **Master** Database run following script

    CREATE LOGIN [SQLAccountName] WITH PASSWORD = supercomplicatedPassword

In the **Target** database run the following code (NB do this for Master DB if want to grant access to multiple databases on the server)

    CREATE USER [SQLAccountName] FROM LOGIN [SQLAccountName] 

In the **Target** database run the following code 

    SP_ADDROLEMEMBER 'db_datareader', 'SQLAccountName'

Or if want to grant specific permissions on a schema this would be run in the **Target** database

    GRANT SELECT ON SCHEMA :: Fact TO SQLAccountName
    GRANT SELECT ON SCHEMA :: Dim TO SQLAccountName

In the example above have use a fixed database role `'db_reader'` see [this article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver15) for details on which roles can be used.<br/>
Details on `'SP_ADDROLEMEMBER'` see [this article](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-addrolemember-transact-sql?view=sql-server-ver15).

---

**Create Active Directory Login within Azure SQL database**

In the **Master** Database run following script

    CREATE LOGIN [bob@contoso.com] FROM EXTERNAL PROVIDER 

In the **Target** database run the following code (NB do this for Master DB if want to grant access to multiple databases on the server)

    CREATE LOGIN [bob@contoso.com] FROM EXTERNAL PROVIDER 

In the **Target** database run the following code 

    SP_ADDROLEMEMBER 'db_datareader', [bob@contoso.com]

Or if want to grant specific permissions on a schema this would be run in the **Target** database

    GRANT SELECT ON SCHEMA :: Fact TO [bob@contoso.com]
    GRANT SELECT ON SCHEMA :: Dim TO [bob@contoso.com]

**NB** - if do not have Azure Active Directory reader permission when run script might get this error message
 Failed to execute query. Error: Server identity does not have Azure Active Directory Readers permission. Please follow the steps here : https://docs.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-service-principal
> Written with [StackEdit](https://stackedit.io/).
