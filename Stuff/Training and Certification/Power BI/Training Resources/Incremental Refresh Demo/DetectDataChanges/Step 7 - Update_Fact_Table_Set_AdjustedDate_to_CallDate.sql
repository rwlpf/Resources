/*
Set the adjusted date to the value of the 
CallDate so they are the same value
*/

  UPDATE   [dbo].[FactCallsHandled]
  SET [AdjustedDate] = CallDate

  SELECT  [ID]
      ,[CallDate]
      ,[AgentId]
      ,[AnsweredCall]
      ,[MissedCall]
      ,[FowardedCall]
      ,[AdjustedDate]
  FROM [dbo].[FactCallsHandled]
