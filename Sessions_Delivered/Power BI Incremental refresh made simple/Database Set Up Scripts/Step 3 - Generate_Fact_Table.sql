/*============================================================
1) Delete all the records in the  fact table 
2) Drop any temp tables references in the script. 
 The reason for this is that so the scripts can be run multiple times. So can be 
 used training purposes.  Also that anyone use the same process shown in the
 session.
=============================================================*/
TRUNCATE TABLE [dbo].[FactCallsHandled];
DROP TABLE IF EXISTS #Names;
DROP TABLE IF EXISTS #AgentPerformance;

/*============================================================
create a temp table which contains names of the agents
=============================================================*/
CREATE TABLE #Names
(
    AgentID INT
);
/*============================================================
create the temp fact table which will contain the stats to be used
=============================================================*/
CREATE TABLE #AgentPerformance
(
    ID INT IDENTITY(1, 1),
    AgentID INT,
    DateUpdated DATETIME,
    CallsAnswered INT,
    CallsFowarded INT,
    CallMissed INT
);

INSERT INTO #Names
(
    AgentID
)
VALUES
(1),
(2),
(3);

/*============================================================
https://stackoverflow.com/questions/11141507/how-to-generate-a-range-of-dates-in-sql-server#11141660
=============================================================*/

DECLARE @start DATETIME,
        @end DATETIME;

/*get start date 6 months in the past
based on date when the script is ran*/
SET @start = CAST(DATEADD(MONTH, -6, DATEADD(dd, -1, GETDATE())) AS DATE);
/*get end date 6 days in the past
based on date when the script is ran*/
SET @end = CAST(DATEADD(DAY, -6, GETDATE()) AS DATE);

SELECT @start AS [Start],
       @end AS [End];
WITH n
AS (SELECT TOP (DATEDIFF(DAY, @start, @end) + 1)
           n = ROW_NUMBER() OVER (ORDER BY [object_id])
    FROM sys.all_objects),
     UserNames
AS (SELECT Na.AgentID,
           DATEADD(DAY, n - 1, @start) [Date]
    FROM n
        CROSS JOIN #Names AS Na)
INSERT INTO #AgentPerformance
(
    AgentID,
    DateUpdated
)
SELECT UserNames.AgentID,
       UserNames.Date
FROM UserNames;

DECLARE @AgentPerformanceRowCount AS INT;

SET @AgentPerformanceRowCount =
(
    SELECT COUNT(*)FROM #AgentPerformance
);
/*
https://www.sqlshack.com/how-to-generate-random-sql-server-test-data-using-t-sql/
*/
;
WITH randowvalues
AS (SELECT 1 id,
           CAST(RAND(CHECKSUM(NEWID())) * 100 AS INT) AS CallsAnswered,
           CAST(RAND(CHECKSUM(NEWID())) * 100 AS INT) AS CallsFowarded,
           CAST(RAND(CHECKSUM(NEWID())) * 100 AS INT) AS CallMissed
    UNION ALL
    SELECT id + 1,
           CAST(RAND(CHECKSUM(NEWID())) * 100 AS INT) AS CallsAnswered,
           CAST(RAND(CHECKSUM(NEWID())) * 100 AS INT) AS CallsFowarded,
           CAST(RAND(CHECKSUM(NEWID())) * 100 AS INT) AS CallMissed
    FROM randowvalues
    WHERE
        --id < 1000
        id < @AgentPerformanceRowCount)
INSERT INTO [dbo].[FactCallsHandled]
(
    ID,
    [AgentId],
    [CallDate],
    [AnsweredCall],
    [MissedCall],
    [FowardedCall]
)
SELECT RV.id,
       AP.AgentID,
       AP.DateUpdated,
       RV.CallsAnswered,
       RV.CallMissed,
       RV.CallsFowarded
FROM randowvalues AS RV
    INNER JOIN #AgentPerformance AS AP
        ON AP.ID = RV.id
OPTION (MAXRECURSION 0);

DROP TABLE IF EXISTS #Names;
DROP TABLE IF EXISTS #AgentPerformance;