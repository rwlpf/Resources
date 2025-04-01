USE [Incremental_Refresh_Demo];

DROP TABLE IF EXISTS #AgentCallTotals;

CREATE TABLE #AgentCallTotals
(
    AgentName VARCHAR(10),
    AnsweredCall INTEGER,
    FowardedCall INTEGER,
    MissedCall INTEGER
);

INSERT INTO #AgentCallTotals
(
    AgentName,
    AnsweredCall,
    FowardedCall,
    MissedCall
)
SELECT DA.AgentName,
       SUM(FCH.AnsweredCall) AS AnsweredCall,
       SUM(FCH.FowardedCall) AS FowardedCall,
       SUM(FCH.MissedCall) AS MissedCall
FROM [dbo].[FactCallsHandled] AS FCH
    LEFT JOIN dbo.DimAgent AS DA
        ON DA.ID = FCH.[AgentId]
GROUP BY DA.AgentName
ORDER BY DA.AgentName;

INSERT INTO #AgentCallTotals
(
    AgentName,
    AnsweredCall,
    FowardedCall,
    MissedCall
)
SELECT 'Total' AS [AgentName],
       SUM(FCH.AnsweredCall) AS AnsweredCall,
       SUM(FCH.FowardedCall) AS FowardedCall,
       SUM(FCH.MissedCall) AS MissedCall
FROM [dbo].[FactCallsHandled] AS FCH
    LEFT JOIN dbo.DimAgent AS DA
        ON DA.ID = FCH.[AgentId];

SELECT AgentName,
       AnsweredCall,
       FowardedCall,
       MissedCall
FROM #AgentCallTotals;

SELECT FORMAT(MIN(FCH.CallDate), 'dd-MM-yyy HH:mm:ss') AS [Earliest  CallDate],
       FORMAT(MAX(FCH.CallDate), 'dd-MM-yyy HH:mm:ss') AS [Latest  CallDate]
FROM [dbo].[FactCallsHandled] AS FCH;

DROP TABLE IF EXISTS #AgentCallTotals;

/*
SELECT DATENAME(MONTH, FCH.CallDate) [Month],
       SUM(FCH.AnsweredCall) AS AnsweredCall,
       SUM(FCH.FowardedCall) AS FowardedCall,
       SUM(FCH.MissedCall) AS MissedCall,
       DA.AgentName
FROM [dbo].[FactCallsHandled] AS FCH
    LEFT JOIN dbo.DimAgent AS DA
        ON DA.ID = FCH.[AgentId]
GROUP BY DATENAME(MONTH, FCH.CallDate),
         DA.AgentName,
         MONTH(FCH.CallDate)
ORDER BY MONTH(FCH.CallDate);
*/