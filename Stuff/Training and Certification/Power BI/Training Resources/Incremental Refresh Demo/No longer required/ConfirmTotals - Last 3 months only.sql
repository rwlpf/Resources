DECLARE @FirstDayOfCurrentMonth AS DATE
SET  @FirstDayOfCurrentMonth = (SELECT DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0) )

SELECT SUM(FCH.AnsweredCall) AS AnsweredCall,
       SUM(FCH.FowardedCall) AS FowardedCall,
       SUM(FCH.MissedCall) AS MissedCall,
       DA.AgentName
FROM [dbo].[FactCallsHandled] AS FCH
    LEFT JOIN dbo.DimAgent AS DA
        ON DA.ID = FCH.[AgentId]
--WHERE FCH.CallDate >= '2022-06-01 00:00:00' AND FCH.CallDate < '2022-06-07 00:00:00'
WHERE FCH.CallDate >= CAST(DATEADD(MONTH, -3, @FirstDayOfCurrentMonth ) AS DATE)  AND FCH.CallDate <= '2022-06-10 00:00:00'
GROUP BY DA.AgentName
ORDER BY DA.AgentName

SELECT     MAX([CallDate]) AS LatestDate
  FROM [dbo].[FactCallsHandled]

SELECT SUM(FCH.AnsweredCall) AS AnsweredCall,
       SUM(FCH.FowardedCall) AS FowardedCall,
       SUM(FCH.MissedCall) AS MissedCall,
       DA.AgentName
FROM [dbo].[FactCallsHandled] AS FCH
    LEFT JOIN dbo.DimAgent AS DA
        ON DA.ID = FCH.[AgentId]
GROUP BY DA.AgentName
ORDER BY DA.AgentName;

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