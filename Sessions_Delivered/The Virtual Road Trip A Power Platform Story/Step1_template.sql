/*=================================================
Change the name of the table [dbo].[ChangeMe]
to something that going to use in project
=================================================*/
IF EXISTS(SELECT *
          FROM   [dbo].[ChangeMe])
  DROP TABLE [dbo].[ChangeMe];

DROP TABLE IF EXISTS #SubSetOfRecords;
DROP TABLE IF EXISTS #Tracks;

CREATE TABLE #Tracks
(
[fileId] VARCHAR(16)  NULL,
[idx] INT NULL,
[lat] DECIMAL(11,8) NULL,
[lon] DECIMAL(11,8) NULL,
[ele] [decimal](11,8) NULL
)

/*==========================================================================================
Place the SQL insert statements from the file outputted by https://www.alltrails.com/converter/success 
Into this section removing the comments obviously :-)
==========================================================================================*/

CREATE TABLE #SubSetOfRecords
(
    [idx] INT NULL,
    [lat] DECIMAL(11, 8) NULL,
    [lon] DECIMAL(11, 8) NULL,
    [ele] DECIMAL(11, 8) NULL
)

IF EXISTS(SELECT *
          FROM   [dbo].[ChangeMe])
  DROP TABLE [dbo].[ChangeMe];

/*==================================================*/
  
CREATE TABLE [dbo].[ChangeMe](
	[idx] [INT] NULL,
	[lat] [DECIMAL](11, 8) NULL,
	[lon] [DECIMAL](11, 8) NULL,
	[ele] [DECIMAL](11, 8) NULL
) ON [PRIMARY]
GO

INSERT INTO #SubSetOfRecords
(
    idx,
    lat,
    lon,
    ele
)
SELECT [idx],
       [lat],
       [lon],
       [ele]
FROM
(
    SELECT ROW_NUMBER() OVER (ORDER BY idx) rowNumber,
           [idx],
           [lat],
           [lon],
           [ele]
    FROM #Tracks
) AS X
WHERE rowNumber = 1
      OR rowNumber % 5 = 0;


SELECT [idx],
       [lat],
       [lon],
       [ele]
INTO [dbo].[ChangeMe]
FROM #SubSetOfRecords

DROP TABLE #SubSetOfRecords;
DROP TABLE #Tracks;
