delimiter //
CREATE PROCEDURE GetPerson(in Kundennummer VARCHAR(10))
Begin
	Select * from krautundrueben.kunde, krautundrueben.zahlung_paypal, krautundrueben.zahlung_kreditkarte
    where kunde.KUNDENNR = Kundennummer;
End //
delimiter //