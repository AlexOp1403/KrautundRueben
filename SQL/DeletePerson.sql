delimiter //
CREATE PROCEDURE DeletePerson2(in Kundennummer VARCHAR(10))
Begin
     Delete from krautundrueben.kunde_de where KUNDENNR = Kundennummer;
     Delete from krautundrueben.zahlung_paypal where KUNDENNR = Kundennummer;
     Delete from krautundrueben.zahlung_kreditkarte where KUNDENNR = Kundennummer;
End //
delimiter //