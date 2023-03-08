/*
Set the adjusted date to the value of the 
CallDate so they are the same value
*/

  UPDATE   [dbo].[FactCallsHandled]
  SET [AdjustedDate] = CallDate

  SELECT [RowID]
      ,[CallDate]
      ,[AgentId]
      ,[AnsweredCall]
      ,[MissedCall]
      ,[FowardedCall]
      ,[AdjustedDate]
  FROM [dbo].[FactCallsHandled]
