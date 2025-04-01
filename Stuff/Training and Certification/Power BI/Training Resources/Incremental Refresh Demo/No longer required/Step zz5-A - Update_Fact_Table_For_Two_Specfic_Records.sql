/*
Select two records which going change the date so 
that the date is greater then the date range for 
storing data from the past
*/
SELECT [ID]
      ,[CallDate]
      ,[AgentId]
      ,[AnsweredCall]
      ,[MissedCall]
      ,[FowardedCall]
  FROM [dbo].[FactCallsHandled]
  WHERE id in (10,11)

  SELECT [ID]
      ,[CallDate]
      ,[AgentId]
  FROM [dbo].[FactCallsHandled]
  WHERE id in (10,11)
  

   UPDATE  [dbo].[FactCallsHandled]
   SET CallDate = DATEADD( MONTH, -12,CallDate),
    [AnsweredCall] =  [AnsweredCall]  - 10,
      [MissedCall] =  [AnsweredCall]  - 7,
      [FowardedCall] =  [FowardedCall]   - 9
  WHERE id in (10,11)

SELECT [ID]
      ,[CallDate]
      ,[AgentId]
      ,[AnsweredCall]
      ,[MissedCall]
      ,[FowardedCall]
  FROM [dbo].[FactCallsHandled]
  WHERE id in (10,11)
