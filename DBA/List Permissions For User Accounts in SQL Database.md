https://stackoverflow.com/questions/31120912/how-to-view-the-roles-and-permissions-granted-to-any-database-user-in-azure-sql

SELECT DISTINCT 
       pr.principal_id
     , pr.name AS [UserName]
     , pr.type_desc AS [User_or_Role]
     , pr.authentication_type_desc AS [Auth_Type]
     , pe.state_desc
     , pe.permission_name
     , pe.class_desc
     , coalesce(o.[name], sch.name) AS [Object]
FROM sys.database_principals AS pr
    JOIN sys.database_permissions AS pe
        ON pe.grantee_principal_id = pr.principal_id
    LEFT JOIN sys.objects AS o
        ON o.object_id = pe.major_id
    LEFT JOIN sys.schemas AS sch
        ON sch.schema_id = pe.major_id
        AND class_desc = 'DBO'