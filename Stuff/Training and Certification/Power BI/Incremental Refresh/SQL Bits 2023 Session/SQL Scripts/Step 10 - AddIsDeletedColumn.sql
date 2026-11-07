USE [Incremental_Refresh_Demo];

ALTER TABLE dbo.FactCallsHandled ADD [IsDeleted] BIT;

UPDATE dbo.FactCallsHandled
SET [IsDeleted]  = 0;