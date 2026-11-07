USE [Incremental_Refresh_Demo];

/*
Get the last  date from the table
FactCallsHandled and increase the 
number of calls
*/
DECLARE @LatestDate AS DATETIME;

SET @LatestDate =
(
    SELECT MAX([CallDate])FROM dbo.FactCallsHandled
);

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + 2,
    [MissedCall] = [MissedCall] - 3,
    [FowardedCall] = [FowardedCall] + 2
WHERE [AgentId] = 1
AND CallDate = @LatestDate;

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + 5,
    [MissedCall] = [MissedCall] - 1,
    [FowardedCall] = [FowardedCall] + 6
WHERE [AgentId] = 2
AND CallDate = @LatestDate;

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + 2,
    [MissedCall] = [MissedCall] - 7,
    [FowardedCall] = [FowardedCall] + 3
WHERE [AgentId] = 3
AND CallDate = @LatestDate;
