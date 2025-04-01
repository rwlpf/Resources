USE [Incremental_Refresh_Demo];

/*
Get the last  date from the table
FactCallsHandled and increase the 
number of calls
*/
DECLARE @LatestDate AS DATETIME;

SET @LatestDate =
(
    SELECT MAX([CallDate]) FROM dbo.FactCallsHandled
);

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + 5,
    [MissedCall] = [MissedCall] - 5,
    [FowardedCall] = [FowardedCall] + 5
WHERE [AgentId] = 1
AND CallDate = @LatestDate;

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + 5,
    [MissedCall] = [MissedCall] - 5,
    [FowardedCall] = [FowardedCall] + 5
WHERE [AgentId] = 2
AND CallDate = @LatestDate;

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + 5,
    [MissedCall] = [MissedCall] - 5,
    [FowardedCall] = [FowardedCall] + 5
WHERE [AgentId] = 3
AND CallDate = @LatestDate;
