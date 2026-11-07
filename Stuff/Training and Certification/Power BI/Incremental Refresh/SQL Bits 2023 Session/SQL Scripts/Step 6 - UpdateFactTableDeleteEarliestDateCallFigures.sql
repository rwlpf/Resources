USE [Incremental_Refresh_Demo];

/*
Get the last lastest date from the table
FactCallsHandled
*/
DECLARE @LatestDate AS DATETIME;

SET @LatestDate =
(
    SELECT MAX([CallDate])FROM dbo.FactCallsHandled
);

/*
Delete records from the latest date to confirm 
that all records in the refresh interval are removed
and then refreshed
That is to say truncated and reloaded
*/

DELETE FROM dbo.FactCallsHandled
WHERE CallDate = @LatestDate;