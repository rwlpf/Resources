/*
Create Table [dbo].[DimAgent]  
*/
IF EXISTS
(
    SELECT *
    FROM sys.objects
    WHERE object_id = OBJECT_ID(N'[dbo].[DimAgent]')
          AND type IN ( N'U' )
)
    DROP TABLE [dbo].[DimAgent];
GO

SET ANSI_NULLS ON;
GO

SET QUOTED_IDENTIFIER ON;
GO

CREATE TABLE [dbo].[DimAgent]
(
    [ID] [INT] IDENTITY(1, 1) NOT NULL,
    [AgentName] [NVARCHAR](10) NOT NULL
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