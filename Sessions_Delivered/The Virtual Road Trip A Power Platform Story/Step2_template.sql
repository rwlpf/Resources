/*
Insert the crossings from one state to another into the table
[Journey_USA_Stage1_Step1]
*/

USE [aQuorumJourney]
GO

INSERT INTO [dbo].[Journey_USA_Stage2_Step1]
           ([idx]
           ,[lat]
           ,[lon]
		   )
VALUES 
(2881, 39.0922100114255,-84.5225880562089),
(7964, 37.9043291380358,-86.7427011812588),	
(9551, 38.7074572585826,-87.5191929464202),	
(11171, 38.6180032124657,-90.1825924622294),	
(13056, 39.0990164977130,-94.6071395441488),	
(14256, 40.5752185867849,-93.9371745434619)	