/*
Update the next stage table, setting the first record
to the last Cumulative_KM of the previous stage
Update [dbo].[Journey_USA_Stage3]
*/

/*
This distance the last [Cumulative_KM] from the previous 
stage
*/
  UPDATE  [dbo].[Journey_USA_Stage3]
  SET [Cumulative_KM] = 4999.161114
  WHERE [Index] = 1

/*now using the [Cumulative_KM] as a starting point
update the records so that have a rolling  cumlative total
for all the stages */

DECLARE @TotalNumberOfRecords INT =
        (
            SELECT COUNT(*)FROM [dbo].[Journey_USA_Stage3]
        );

DECLARE @NullRecords INT =
        (
            SELECT COUNT(*)FROM [dbo].[Journey_USA_Stage3] WHERE [Cumulative_KM] IS NULL
        );

DECLARE @Cumulative_KM DECIMAL(12, 6) =
        (
            SELECT [Cumulative_KM]
            FROM [dbo].[Journey_USA_Stage3]
            WHERE [Cumulative_KM] IS NOT NULL
        );

/*Return the index of the first record where [Cumulative_KM] has not been set */
DECLARE @IndexRecordToUpdate INT =
        (
            SELECT TOP 1
                   [Index]
            FROM [dbo].[Journey_USA_Stage3]
            WHERE [Cumulative_KM] IS NULL
        );


SELECT @IndexRecordToUpdate,
       @NullRecords,
       @TotalNumberOfRecords,
       @Cumulative_KM;


WHILE @NullRecords > 0
BEGIN

    UPDATE [dbo].[Journey_USA_Stage3]
    SET [Cumulative_KM] = @Cumulative_KM + [Distance_Km]
    WHERE [Index] = @IndexRecordToUpdate;

    /*update the total number of null records remaining*/
    SET @NullRecords =
    (
        SELECT COUNT(*)FROM [dbo].[Journey_USA_Stage3] WHERE [Cumulative_KM] IS NULL
    );

    /*get the index of the next record to update*/
    SET @IndexRecordToUpdate =
    (
        SELECT TOP 1
               [Index]
        FROM [dbo].[Journey_USA_Stage3]
        WHERE [Cumulative_KM] IS NULL
    );

	SET @Cumulative_KM =
        (
            SELECT  TOP 1 [Cumulative_KM]
            FROM [dbo].[Journey_USA_Stage3]
            WHERE [Cumulative_KM] IS NOT NULL
			/*order by DESC to get the last record
			updated by the previous update statement*/
			ORDER BY [Index] DESC

        );

END;

SELECT * FROM [dbo].[Journey_USA_Stage3]
