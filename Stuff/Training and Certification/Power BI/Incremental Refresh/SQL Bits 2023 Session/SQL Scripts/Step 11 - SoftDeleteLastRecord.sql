USE [Incremental_Refresh_Demo];

/*
Get the last earliest date from the table
FactCallsHandled
*/
DECLARE @EarliestDate AS DATETIME;

SET @EarliestDate =
(
    SELECT MIN([CallDate])FROM dbo.FactCallsHandled
);

/*
This will update the last record do a soft delete
*/

UPDATE dbo.FactCallsHandled
SET [AdjustedDate] = GETDATE(),
    [IsDeleted] = 1
WHERE CallDate = @EarliestDate;
