DROP DATABASE IF EXISTS krautundrueben;
CREATE DATABASE IF NOT EXISTS krautundrueben;
USE krautundrueben;

//NEU:: für den Trigger: Trigger_Loesch_Geschichte von .Kunde
CREATE TABLE GELOESCHTE_INFO (
    Geloeschte_Kundennummer VARCHAR(10),
    Loeschdatum VARCHAR(25),
    Geloescht_von VARCHAR(25)
    );
    
CREATE TABLE zahlung_paypal (
	Kundennr             INTEGER PRIMARY KEY,
    Paypal_Email         VARCHAR(50),
    SEPA_Mandatsreferenz VARCHAR(50)
    );

CREATE TABLE zahlung_kreditkarte (
	Kundennr           INTEGER PRIMARY KEY,
    Kreditkartennummer VARCHAR(25),
    Ablaufdatum        VARCHAR(5),
    CVV                VARCHAR(3),
    Zahlungsdienstleister VARCHAR(25)
    );

    
CREATE TABLE KUNDE (
    KUNDENNR        INTEGER NOT NULL,
    NACHNAME        VARCHAR(50),
    VORNAME         VARCHAR(50),
    GEBURTSDATUM    DATE,
    STRASSE         VARCHAR(50),
    HAUSNR	    VARCHAR(6),			
    PLZ             VARCHAR(5),
    ORT             VARCHAR(50),
    TELEFON         VARCHAR(25),
    EMAIL           VARCHAR(50)
    );

CREATE TABLE ZUTAT(
    ZUTATENNR	     INTEGER NOT NULL,
    BEZEICHNUNG      VARCHAR(50),
    EINHEIT          VARCHAR (25),
    NETTOPREIS       DECIMAL(10,2),
    BESTAND          INTEGER,
    LIEFERANT	     INTEGER,
    KALORIEN	     INTEGER,
    KOHLENHYDRATE    DECIMAL (10,2),
    PROTEIN	     DECIMAL(10,2)
);

CREATE TABLE BESTELLUNG (
    BESTELLNR        INTEGER AUTO_INCREMENT NOT NULL,
    KUNDENNR         INTEGER,
    BESTELLDATUM     DATE,
    RECHNUNGSBETRAG  DECIMAL(10,2),
    PRIMARY KEY (BESTELLNR)
);

CREATE TABLE LIEFERANT (
    LIEFERANTENNR   INTEGER NOT NULL,
    LIEFERANTENNAME VARCHAR(50),
    STRASSE         VARCHAR(50),
    HAUSNR	    VARCHAR(6),
    PLZ             VARCHAR(5),
    ORT             VARCHAR(50),
    TELEFON	    VARCHAR(25),
    EMAIL           VARCHAR(50)
);

CREATE TABLE KRITISCHE_INHALTSSTOFFE (
    INHALTSSTOFFNR    INTEGER NOT NULL,
     INHALTSSTOFFNAME VARCHAR(50)
);

 CREATE TABLE ZUTAT_KRITISCHE_INHALTSSTOFFE (
     ZUTATENNR        INTEGER NOT NULL,
     INHALTSSTOFFNR   INTEGER
 );

 CREATE TABLE REZEPTINHALT (
     REZEPTID         int(11) NOT NULL,
     REZEPTNAME       varchar(45) NOT NULL,
     MENGE            int(11) NOT NULL,
     ZUTATENNR        int(11) NOT NULL

 );

CREATE TABLE REZEPT (
     REZEPTID         INT NOT NULL,
     REZEPTNAME       VARCHAR(45) NOT NULL
);

CREATE TABLE BESTELLUNG_REZEPT (
    BESTELLNR       INTEGER NOT NULL,
    REZEPTID       INTEGER,
    STKZAHL     	    INTEGER
    # PRIMARY KEY (BESTELLNR, REZEPTID)
   # FOREIGN KEY (BESTELLNR) REFERENCES BESTELLUNG (BESTELLNR),
   # FOREIGN KEY (REZEPTID) REFERENCES REZEPT (REZEPTID)
    
);

CREATE TABLE ERNAEHRUNGSKATEGORIE (
  KategorieNR Integer not null Primary Key,
  KategorieName VARCHAR(45)
);

CREATE TABLE KATEGORIE_ZUTAT (
  KategorieNR         Integer not null ,
  ZutatenNR             Integer
); 

CREATE TABLE SENDUNG (
    SendungsNR  INT NOT NULL ,
    Lieferdatum Varchar(45)
    );


CREATE TABLE SENDUNG_ZUTAT (
   SendungsNR Integer not null ,
   ZutatenNR Integer ,
   Menge Integer 
   );

CREATE TABLE LIEFERANT_SENDUNG (
    LIEFERANTENNR  INTEGER not null ,
   SendungsNR Integer 
   );


/******************************************************************************/
/***                              Primary Keys                              ***/
/******************************************************************************/



ALTER TABLE ZUTAT ADD PRIMARY KEY (ZUTATENNR);
ALTER TABLE KRITISCHE_INHALTSSTOFFE ADD PRIMARY KEY (INHALTSSTOFFNR);
ALTER TABLE KUNDE ADD PRIMARY KEY (KUNDENNR);
ALTER TABLE LIEFERANT ADD PRIMARY KEY (LIEFERANTENNR);
ALTER TABLE ZUTAT_KRITISCHE_INHALTSSTOFFE ADD PRIMARY KEY (ZUTATENNR,INHALTSSTOFFNR);
ALTER TABLE REZEPTINHALT ADD PRIMARY KEY (ZUTATENNR,REZEPTID);
ALTER TABLE REZEPT ADD PRIMARY KEY (REZEPTID);
ALTER TABLE KATEGORIE_ZUTAT ADD PRIMARY KEY (KATEGORIENR, ZUTATENNR);
ALTER TABLE SENDUNG ADD PRIMARY KEY (SENDUNGSNR);
ALTER TABLE SENDUNG_ZUTAT ADD PRIMARY KEY (SENDUNGSNR, ZUTATENNR);
ALTER TABLE LIEFERANT_SENDUNG ADD PRIMARY KEY (SENDUNGSNR,  LIEFERANTENNR);
ALTER TABLE BESTELLUNG_REZEPT ADD PRIMARY KEY (BESTELLNR,REZEPTID);

/******************************************************************************/
/***                              Foreign Keys                              ***/
/******************************************************************************/


ALTER TABLE ZUTAT_KRITISCHE_INHALTSSTOFFE ADD FOREIGN KEY (ZUTATENNR) REFERENCES ZUTAT (ZUTATENNR);
ALTER TABLE ZUTAT_KRITISCHE_INHALTSSTOFFE ADD FOREIGN KEY (INHALTSSTOFFNR) REFERENCES KRITISCHE_INHALTSSTOFFE (INHALTSSTOFFNR);
ALTER TABLE ZUTAT ADD FOREIGN KEY (LIEFERANT) REFERENCES LIEFERANT (LIEFERANTENNR);
ALTER TABLE BESTELLUNG ADD FOREIGN KEY (KUNDENNR) REFERENCES KUNDE (KUNDENNR);
ALTER TABLE REZEPTINHALT ADD FOREIGN KEY (REZEPTID) REFERENCES REZEPT (REZEPTID);
ALTER TABLE REZEPTINHALT ADD FOREIGN KEY (ZUTATENNR) REFERENCES ZUTAT (ZUTATENNR);
ALTER TABLE KATEGORIE_ZUTAT ADD FOREIGN KEY (KATEGORIENR) REFERENCES ERNAEHRUNGSKATEGORIE (KATEGORIENR);
ALTER TABLE KATEGORIE_ZUTAT ADD FOREIGN KEY (ZUTATENNR) REFERENCES ZUTAT (ZUTATENNR);
ALTER TABLE SENDUNG_ZUTAT ADD FOREIGN KEY (SENDUNGSNR) REFERENCES SENDUNG (SENDUNGSNR);
ALTER TABLE SENDUNG_ZUTAT ADD FOREIGN KEY (ZUTATENNR) REFERENCES ZUTAT (ZUTATENNR);
ALTER TABLE LIEFERANT_SENDUNG ADD FOREIGN KEY ( LIEFERANTENNR) REFERENCES LIEFERANT ( LIEFERANTENNR);
ALTER TABLE LIEFERANT_SENDUNG ADD FOREIGN KEY (SENDUNGSNR) REFERENCES SENDUNG (SENDUNGSNR);
ALTER TABLE BESTELLUNG_REZEPT ADD FOREIGN KEY (BESTELLNR) REFERENCES BESTELLUNG (BESTELLNR);
ALTER TABLE BESTELLUNG_REZEPT ADD FOREIGN KEY (REZEPTID) REFERENCES REZEPT (REZEPTID);