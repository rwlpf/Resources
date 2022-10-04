/*
Check that updated the table names 
The table name [Journey_USA_Stage3] should be updated
The table name [dbo].[Journey_USA_Stage3_Step1] should be updated
*/

-- attempt to run DROP TABLE only if it exists 
DROP TABLE IF EXISTS [dbo].[Journey_USA_Stage3]
GO

CREATE TABLE [dbo].[Journey_USA_Stage3](
	[Index] [SMALLINT] NOT NULL,
	[Lat_Start] [DECIMAL](10, 6) NULL,
	[Lon_Start] [DECIMAL](10, 6) NULL,
	[Elevation] [NVARCHAR](50) NULL,
	[Lat_End] [DECIMAL](10, 6) NULL,
	[Lon_End] [DECIMAL](10, 6) NULL,
	[Lat_Start_Rad] [NVARCHAR](50) NULL,
	[Lon_Start_Rad] [NVARCHAR](50) NULL,
	[Lat_End_Rad] [NVARCHAR](50) NULL,
	[Lon_End_Rad] [NVARCHAR](50) NULL,
	[Distance_Km] [DECIMAL](12, 6) NULL,
	[RT_Km] [DECIMAL](12, 6) NULL,
	[PointSize] [TINYINT] NULL,
	[Cumulative_KM] [DECIMAL](12, 6) NULL
) ON [PRIMARY]
GO

;
WITH Step2
AS (SELECT TOP 100 PERCENT
		   [idx],
           [lat],
           [lon],
           [ele]
    FROM [dbo].[Journey_USA_Stage3_Step1]
	ORDER BY [idx]
   ),
     Step3
AS (SELECT [idx],
           [lat],
           [lon],
           [ele],
           LEAD(step2.[lat], 1) OVER (ORDER BY [idx]) AS [Lat_end],
           LEAD(step2.[lon], 1) OVER (ORDER BY [idx]) AS [Lon_end],
           ([lat] / 180) * PI() AS Lat_Start_Rad,
           ([lon] / 180) * PI() AS Lon_Start_Rad,
           (LEAD(step2.[lat], 1) OVER (ORDER BY [idx]) / 180) * PI() AS [Lat_end_Rad],
           (LEAD(step2.[lon], 1) OVER (ORDER BY [idx]) / 180) * PI() AS [Lon_end_Rad]
    FROM step2
   )
INSERT INTO [dbo].[Journey_USA_Stage3]
(
    [Index],
    [Lat_Start],
    [Lon_Start],
    [Elevation],
    [Lat_End],
    [Lon_End],
    [Lat_Start_Rad],
    [Lon_Start_Rad],
    [Lat_End_Rad],
    [Lon_End_Rad],
    [Distance_Km],
    [RT_Km],
    [PointSize]
)
SELECT [idx],
       [lat],
       [lon],
       [ele],
       [Lat_end],
       [Lon_end],
       Lat_Start_Rad,
       Lon_Start_Rad,
       [Lat_end_Rad],
       [Lon_end_Rad],
       ACOS(SIN(Lat_Start_Rad) * SIN([Lat_end_Rad]) + COS([Lat_Start_Rad]) * COS([Lat_end_Rad])
            * COS([Lon_end_Rad] - [Lon_Start_Rad])
           ) * 6371 AS Distance_Km,
       SUM(ACOS(SIN(Lat_Start_Rad) * SIN([Lat_end_Rad]) + COS([Lat_Start_Rad]) * COS([Lat_end_Rad])
                * COS([Lon_end_Rad] - [Lon_Start_Rad])
               ) * 6371
          ) OVER (ORDER BY [idx]) AS RT_Km,
       1 as PointSize
FROM Step3
WHERE [Lat_end] IS NOT NULL

/*==================================================================================================*/

SELECT * FROM [dbo].[Journey_USA_Stage3]