USE [Incremental_Refresh_Demo];

/*
Get the First Date in the FactCallsHandled
*/
DECLARE @FirstDate AS DATETIME;
DECLARE @AnsweredCall AS INTEGER;
DECLARE @MissedCall AS INTEGER;
DECLARE @FowardedCall AS INTEGER;

SET @FirstDate =
(
    SELECT MIN([CallDate])FROM dbo.FactCallsHandled
);

SELECT @FirstDate AS EarliestDate;

SELECT DATEDIFF(MONTH, @FirstDate, GETDATE()) AS Months_Between_Today_And_EarliestDate;

SET @AnsweredCall = FLOOR(RAND() * (10 - 2 + 1)) + 5;
SET @MissedCall = FLOOR(RAND() * (10 - 2 + 1)) + 6;
SET @FowardedCall = FLOOR(RAND() * (10 - 2 + 1)) + 3;
/*
Adjust records for the three call agents for the EarliestDate
Which is at least 6 months in the past from date when the 
recordset was generated
*/

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + @AnsweredCall,
    [MissedCall] = [MissedCall] - @MissedCall,
    [FowardedCall] = [FowardedCall] + @FowardedCall,
    [AdjustedDate] = GETDATE()
WHERE [AgentId] = 1
      AND CallDate = @FirstDate;

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + @AnsweredCall + 1,
    [MissedCall] = [MissedCall] - @MissedCall - 1,
    [FowardedCall] = [FowardedCall] + @FowardedCall + 2,
    [AdjustedDate] = GETDATE()
WHERE [AgentId] = 2
      AND CallDate = @FirstDate;

UPDATE dbo.FactCallsHandled
SET [AnsweredCall] = [AnsweredCall] + @AnsweredCall,
    [MissedCall] = [MissedCall] - @MissedCall,
    [FowardedCall] = [FowardedCall] + @FowardedCall,
    [AdjustedDate] = GETDATE()
WHERE [AgentId] = 3
      AND CallDate = @FirstDate;

