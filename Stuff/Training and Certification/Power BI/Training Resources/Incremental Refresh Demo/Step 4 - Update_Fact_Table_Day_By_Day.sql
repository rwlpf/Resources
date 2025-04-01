/*============================================================
Drop the temp tables 
=============================================================*/
DROP TABLE IF EXISTS #Names;
DROP TABLE IF EXISTS #AgentPerformance;

/*============================================================
create a table which contains names of the agents
=============================================================*/
CREATE TABLE #Names
(
    AgentID INT
);
/*============================================================
create the fact table which will contain the stats to be used
=============================================================*/
CREATE TABLE #AgentPerformance
(
    ID INT,
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
(1  ),
(2),
(3);

/*============================================================
declare the variables for use later
=============================================================*/
DECLARE @LastestDateFactTable AS DATETIME;
DECLARE @MaxIDFactTable AS INTEGER;
DECLARE @Start AS DATETIME;
DECLARE @End AS DATETIME;
DECLARE @AgentPerformanceRowCount AS INT;

/*============================================================
Get the lastest date and the last ID value in the fact table
=============================================================*/
SELECT @LastestDateFactTable = MAX([CallDate]),
       @MaxIDFactTable = MAX([ID])
FROM [dbo].[FactCallsHandled];

SET @Start = CAST(DATEADD(DAY, 1, @LastestDateFactTable) AS DATE);
SET @End = @Start;

/*============================================================
Populate the temp table #AgentPerformance with Agent ID and 
the lastest date plus one day, and ID incremented from the last ID in the fact
table
=============================================================*/
;
WITH n
AS (SELECT TOP (DATEDIFF(DAY, @Start, @End) + 1)
           n = @MaxIDFactTable + ROW_NUMBER() OVER (ORDER BY [object_id])
    FROM sys.all_objects),
     UserNames
AS (SELECT ID = n + ROW_NUMBER() OVER (ORDER BY Na.AgentID) - 1,
           Na.AgentID,
           --DATEADD(DAY, 1, @Start) [Date]
		   @Start AS [Date]
    FROM n
        CROSS JOIN #Names AS Na)
INSERT INTO #AgentPerformance
(
    ID,
    AgentID,
    DateUpdated
)
SELECT UserNames.ID,
       UserNames.AgentID,
       UserNames.Date
FROM UserNames;


/*============================================================
Generate random number for the number of agents in the table 
#AgentPerformance then insert new records into Fact table 
=============================================================*/

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
        id < @AgentPerformanceRowCount)
INSERT INTO [dbo].[FactCallsHandled]
(
    [ID],
    [AgentId],
    [CallDate],
    [AnsweredCall],
    [MissedCall],
    [FowardedCall]
)
SELECT AP.ID,
       AP.AgentID,
       AP.DateUpdated,
       RV.CallsAnswered,
       RV.CallMissed,
       RV.CallsFowarded
FROM randowvalues AS RV
    INNER JOIN #AgentPerformance AS AP
        ON AP.AgentID = RV.id;

--SELECT *		
--FROM dbo.FactCallsHandled
--ORDER BY [ID] DESC;

DROP TABLE IF EXISTS #Names;
DROP TABLE IF EXISTS #AgentPerformance;