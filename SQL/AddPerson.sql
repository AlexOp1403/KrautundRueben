use krautundrueben;
DELIMITER $$
CREATE  PROCEDURE AddPerson(IN KundenID VARCHAR(15), IN Nachname VARCHAR(15), IN Vorname VARCHAR(20), IN Geburtsdatum VARCHAR(35), IN Straße VARCHAR(25),IN Hausnummer varchar(3),IN PLZ VARCHAR(6), IN Ort VARCHAR(20),IN Telefon VARCHAR(10),IN EMAIL varchar(20))
BEGIN
     INSERT into krautundrueben.kunde
     VALUES (KundenID, Nachname, Vorname, Geburtsdatum, Straße, Hausnummer, PLZ, Ort, Telefon, EMAIL);
END $$
DELIMITER ;