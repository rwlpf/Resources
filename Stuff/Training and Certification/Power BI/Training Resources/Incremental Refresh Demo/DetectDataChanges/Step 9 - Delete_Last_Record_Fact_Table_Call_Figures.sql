USE [Incremental_Refresh_Demo];

/*
Get the last earliest date from the table
FactCallsHandled
NOTE this will NOT appear on the PowerBI report :-(
*/
DECLARE @EarliestDate AS DATETIME;

SET @EarliestDate =
(
    SELECT MIN([CallDate])FROM dbo.FactCallsHandled
);

/*
Delete records from the latest date to confirm 
that all records in the refresh interval are removed
and then refreshed
That is to say truncated and reloaded
*/

DELETE FROM dbo.FactCallsHandled
WHERE CallDate = @EarliestDate;