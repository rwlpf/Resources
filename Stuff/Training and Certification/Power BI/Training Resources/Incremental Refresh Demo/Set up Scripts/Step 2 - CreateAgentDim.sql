USE [Incremental_Refresh_Demo]
Go

/****** Object:  Table [dbo].[DimAgent]    Script Date: 08/06/2022 11:22:55 ******/
IF EXISTS
(
    SELECT *
    FROM sys.objects
    WHERE object_id = OBJECT_ID(N'[dbo].[DimAgent]')
          AND type IN ( N'U' )
)
    DROP TABLE [dbo].[DimAgent];
GO

/****** Object:  Table [dbo].[DimAgent]    Script Date: 08/06/2022 11:22:55 ******/
SET ANSI_NULLS ON;
GO

SET QUOTED_IDENTIFIER ON;
GO

CREATE TABLE [dbo].[DimAgent]
(
    [ID] [INT] IDENTITY(1, 1) NOT NULL,
    [AgentName] [NCHAR](10) NOT NULL
) ON [PRIMARY];
GO


INSERT INTO [dbo].[DimAgent]
(
    [AgentName]
)
VALUES
('YasserM'),
('SusanP'),
('ThomasR');
GO