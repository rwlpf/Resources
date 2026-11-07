USE [Incremental_Refresh_Demo]
Go

/****** Object:  Table [dbo].[FactCallsHandled]    Script Date: 08/06/2022 09:50:05 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[FactCallsHandled]') AND type IN (N'U'))
DROP TABLE [dbo].[FactCallsHandled]
GO

/****** Object:  Table [dbo].[FactCallsHandled]    Script Date: 08/06/2022 09:50:05 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[FactCallsHandled](
	[ID] [INT] NOT NULL,
	[CallDate] [DATETIME] NULL,
	[AgentId] [INT] NULL,
	[AnsweredCall] [INT] NOT NULL,
	[MissedCall] [INT] NOT NULL,
	[FowardedCall] [INT] NOT NULL,
	[AdjustedDate]  [DATETIME] NULL,
) ON [PRIMARY]
GO
