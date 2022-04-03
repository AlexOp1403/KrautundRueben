use krautundrueben;

DELIMITER //
CREATE TRIGGER Geloeschte_Kd_Daten
BEFORE DELETE
   ON kunde FOR EACH ROW
BEGIN

   DECLARE vUser varchar(50);
   -- Find username of person performing the DELETE into table
   SELECT USER() INTO vUser;
   -- Insert record into audit table
   INSERT INTO geloeschte_info
   ( geloeschte_Kundennummer,
     Loeschdatum,
     geloescht_von)
   VALUES
   ( OLD.KUNDENNR,
     SYSDATE(),
     vUser );
     
END; //
DELIMITER ;