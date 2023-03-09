/*Create the  Table 
[dbo].[FactCallsHandled] 
*/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[FactCallsHandled]') AND type IN (N'U'))
DROP TABLE [dbo].[FactCallsHandled]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[FactCallsHandled](
	[RowID] [INT] NOT NULL,
	[CallDate] [DATETIME] NULL,
	[AgentId] [INT] NULL,
	[AnsweredCall] [INT] NOT NULL,
	[MissedCall] [INT] NOT NULL,
	[FowardedCall] [INT] NOT NULL,
	[AdjustedDate]  [DATETIME] NULL,
) ON [PRIMARY]
GO
