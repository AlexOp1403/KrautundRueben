use  krautundrueben;
delimiter //
CREATE PROCEDURE ExportPerson(in Kundennummer VARCHAR(10))                                                   //Auf die Dateipfade achten!
Begin
	Select * INTO Outfile 'C:/Dateien/Kunde_Output.csv'
			FIELDS TERMINATED BY ','
			ENCLOSED BY '"'
			LINES TERMINATED BY '\n'
            from krautundrueben.kunde where kunde.KUNDENNR = Kundennummer;
            
	Select * INTO Outfile 'C:/Dateien/Kunde_Paypal.csv'
			FIELDS TERMINATED BY ','
			ENCLOSED BY '"'
			LINES TERMINATED BY '\n'
            from krautundrueben.zahlung_paypal where zahlung_paypal.KUNDENNR = Kundennummer;
            
	Select * INTO Outfile 'C:/Dateien/Kunde_Kreditkarte.csv'
			FIELDS TERMINATED BY ','
			ENCLOSED BY '"'
			LINES TERMINATED BY '\n'
            from krautundrueben.zahlung_kreditkarte where zahlung_kreditkarte.KUNDENNR = Kundennummer;
End //
delimiter //
