USE krautundrueben;
/******************************************************************************/
/***                              INSERT DATA                              ***/
/******************************************************************************/


INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2001, 'Wellensteyn','Kira','1990-05-05','Eppendorfer Landstrasse', '104', '20249','Hamburg','040/443322','k.wellensteyn@yahoo.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2002, 'Foede','Dorothea','2000-03-24','Ohmstraße', '23', '22765','Hamburg','040/543822','d.foede@web.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2003, 'Leberer','Sigrid','1989-09-21','Bilser Berg', '6', '20459','Hamburg','0175/1234588','sigrid@leberer.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2004, 'Soerensen','Hanna','1974-04-03','Alter Teichweg', '95', '22049','Hamburg','040/634578','h.soerensen@yahoo.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2005, 'Schnitter','Marten','1964-04-17','Stübels', '10', '22835','Barsbüttel','0176/447587','schni_mart@gmail.com');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2006, 'Maurer','Belinda','1978-09-09','Grotelertwiete', '4a', '21075','Hamburg','040/332189','belinda1978@yahoo.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2007, 'Gessert','Armin','1978-01-29','Küstersweg', '3', '21079','Hamburg','040/67890','armin@gessert.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2008, 'Haessig','Jean-Marc','1982-08-30','Neugrabener Bahnhofstraße', '30', '21149','Hamburg','0178-67013390','jm@haessig.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (2009, 'Urocki','Eric','1999-12-04','Elbchaussee', '228', '22605','Hamburg','0152-96701390','urocki@outlook.de');

INSERT INTO KUNDE (KUNDENNR, NACHNAME, VORNAME, GEBURTSDATUM, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) VALUES (1111, 'Opoku','Alex','1999-03-14','Elbchaussee', '228', '22605','Hamburg','0152-96701390','alex.opoku@outlook.de');

INSERT INTO LIEFERANT (LIEFERANTENNR, LIEFERANTENNAME, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) values (101, 'Bio-Hof Müller', 'Dorfstraße', '74', '24354', 'Weseby', '04354-9080', 'mueller@biohof.de');

INSERT INTO LIEFERANT (LIEFERANTENNR, LIEFERANTENNAME, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) values (102, 'Obst-Hof Altes Land', 'Westerjork 74', '76', '21635', 'Jork', '04162-4523', 'info@biohof-altesland.de');

INSERT INTO LIEFERANT (LIEFERANTENNR, LIEFERANTENNAME, STRASSE, HAUSNR, PLZ, ORT, TELEFON, EMAIL) values (103, 'Molkerei Henning', 'Molkereiwegkundekunde', '13','19217', 'Dechow', '038873-8976', 'info@molkerei-henning.de');

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1001,'Zucchini','Stück', 0.89, 100, 101,19,2,1.6);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1002,'Zwiebel','Stück', 0.15, 50, 101, 28, 4.9, 1.20);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1003, 'Tomate', 'Stück', 0.45, 50, 101, 18, 2.6, 1);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1004, 'Schalotte', 'Stück', 0.20, 500, 101, 25, 3.3, 1.5);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1005, 'Karotte', 'Stück', 0.30, 500, 101, 41, 10, 0.9);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1006, 'Kartoffel', 'Stück', 0.15, 1500, 101, 71, 14.6, 2);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1007, 'Rucola', 'Bund', 0.90, 10, 101, 27, 2.1, 2.6);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1008, 'Lauch', 'Stück', 1.2, 35, 101, 29, 3.3, 2.1);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1009, 'Knoblauch', 'Stück', 0.25, 250, 101, 141, 28.4, 6.1);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1010, 'Basilikum', 'Bund', 1.3, 10, 101, 41, 5.1, 3.1);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1011, 'Süßkartoffel', 'Stück', 2.0, 200, 101, 86, 20, 1.6);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1012, 'Schnittlauch', 'Bund', 0.9, 10, 101, 28, 1, 3);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (2001, 'Apfel', 'Stück', 1.2, 750, 102, 54, 14.4, 0.3);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (3001, 'Vollmilch. 3.5%', 'Liter', 1.5, 50, 103, 65, 4.7, 3.4);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (3002, 'Mozzarella', 'Packung', 3.5, 20, 103, 241, 1, 18.1);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (3003, 'Butter', 'Stück', 3.0, 50, 103, 741, 0.6, 0.7);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (4001, 'Ei', 'Stück', 0.4, 300, 102, 137, 1.5, 11.9);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (5001, 'Wiener Würstchen', 'Paar', 1.8, 40, 101, 331, 1.2, 9.9);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (9001, 'Tofu-Würstchen', 'Stück', 1.8, 20, 103, 252, 7, 17);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (6408, 'Couscous', 'Packung', 1.9, 15, 102, 351, 67, 12);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (7043, 'Gemüsebrühe', 'Würfel', 0.2, 4000, 101, 1, 0.5, 0.5);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (6300, 'Kichererbsen', 'Dose', 1.0, 400, 103, 150, 21.2, 9);

INSERT INTO ZUTAT (ZUTATENNR, BEZEICHNUNG, EINHEIT, NETTOPREIS, BESTAND, lieferant, KALORIEN, KOHLENHYDRATE, PROTEIN) VALUES (1100, 'Spaghetti', 'Packung', 1.0, 200, 103, 150, 30.3, 5.4);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2001,'2020-07-01', 58.45);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2002,'2020-07-08', 95.40);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2003,'2020-08-01',62.75);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2004,'2020-08-02', 24.20);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2005,'2020-08-02', 70.50);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2006,'2020-08-10', 20.00);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2007,'2020-08-10', 22.50);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2008,'2020-08-10', 73.75);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2009,'2020-08-10', 47.00);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2007,'2020-08-15', 69.30);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2005,'2020-08-12', 20.50);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2003,'2020-08-13', 78.75);

INSERT INTO BESTELLUNG (KUNDENNR, BESTELLDATUM, RECHNUNGSBETRAG) VALUES (2003,'2020-09-12', 5.40);

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (1, 'Spaghetti Bolognese');

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (2, 'Kartoffel-Auflauf');

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (3, 'Tomaten-Suppe');

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (4, 'Apfelkuchen');

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (5, 'Gemüsepfanne');

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (6, 'Wiener Würstchen');

INSERT INTO REZEPT (REZEPTID, REZEPTNAME) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen');

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (1, 1, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (1, 2, 3);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (1, 5, 2);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (1, 4, 3);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (2, 1, 10);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (2, 5, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (2, 3, 4);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (2, 4, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (3, 3, 15);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (3, 1, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (4, 1, 7);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (4, 3, 2);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (5, 2, 4);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (5, 4, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (5, 1, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (7, 1, 9);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (6, 5, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (8, 4, 5);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (8, 2, 7);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (9, 1, 4);

INSERT INTO BESTELLUNG_REZEPT(BESTELLNR, REZEPTID, STKZAHL) VALUES (9, 4, 5);

INSERT INTO BESTELLUNG_REZEPT (BESTELLNR, REZEPTID, STKZAHL) VALUES (10, 1, 7);

INSERT INTO BESTELLUNG_REZEPT (BESTELLNR, REZEPTID, STKZAHL) VALUES (10, 4, 7);

INSERT INTO BESTELLUNG_REZEPT (BESTELLNR, REZEPTID, STKZAHL) VALUES (11, 5, 2);

INSERT INTO BESTELLUNG_REZEPT (BESTELLNR, REZEPTID, STKZAHL) VALUES (11, 1, 5);

INSERT INTO BESTELLUNG_REZEPT (BESTELLNR, REZEPTID, STKZAHL) VALUES (12, 2, 15);

INSERT INTO BESTELLUNG_REZEPT (BESTELLNR, REZEPTID, STKZAHL) VALUES (13, 6, 1);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (1, 'Spaghetti Bolognese', 1, 1100);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (1, 'Spaghetti Bolognese', 3, 1003);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (1, 'Spaghetti Bolognese', 1, 1002);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (2, 'Kartoffel-Auflauf', 10, 1006);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (2, 'Kartoffel-Auflauf', 1, 3002);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (2, 'Kartoffel-Auflauf', 1, 1009);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (3, 'Tomaten-Suppe', 5, 1003);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (3, 'Tomaten-Suppe', 1, 7043);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (3, 'Tomaten-Suppe', 1, 1007);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (4, 'Apfelkuchen', 3, 2001);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (4, 'Apfelkuchen', 1, 3003);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (4, 'Apfelkuchen', 2, 4001);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (5, 'Gemüsepfanne', 1, 7043);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (5, 'Gemüsepfanne', 1, 1012);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (5, 'Gemüsepfanne', 1, 1010);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (5, 'Gemüsepfanne', 3, 1003);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (5, 'Gemüsepfanne', 1, 1009);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (6, 'Wiener Würstchen', 3, 5001);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen', 1, 7043);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen', 1, 1012);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen', 1, 1010);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen', 3, 1003);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen', 1, 1009);

INSERT INTO REZEPTINHALT (REZEPTID, REZEPTNAME, MENGE, ZUTATENNR) VALUES (7, 'Gemüsepfanne mit Tofu Würstchen', 1, 9001);


INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (1, 'Gluten');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (2, 'Ei');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (3, 'Krebstiere');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (4, 'Erdnuss');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (5, 'Fisch');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (6, 'Soja');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (7, 'Milch');

INSERT INTO KRITISCHE_INHALTSSTOFFE(INHALTSSTOFFNR, INHALTSSTOFFNAME) VALUES (8, 'Schalenfrüchte');

INSERT INTO ERNAEHRUNGSKATEGORIE(KATEGORIENR, KATEGORIENAME) VALUES (1, 'Vegetarisch');

INSERT INTO ERNAEHRUNGSKATEGORIE(KATEGORIENR, KATEGORIENAME) VALUES (2, 'Vegan');

INSERT INTO ERNAEHRUNGSKATEGORIE(KATEGORIENR, KATEGORIENAME) VALUES (3, 'Halal');

INSERT INTO ERNAEHRUNGSKATEGORIE(KATEGORIENR, KATEGORIENAME) VALUES (4, 'Koscher');


INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (1100, 1);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (3001, 7);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (3002, 7);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (3003, 7);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (4001, 2);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (6300, 8);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (6408, 1);

INSERT INTO ZUTAT_KRITISCHE_INHALTSSTOFFE(ZUTATENNR, INHALTSSTOFFNR) VALUES (9001, 6);


INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1003);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1004);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1005);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1006);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1007);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1008);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1009);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1011);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1012);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 2001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 3001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 3002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 3003);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 4001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 9001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 6408);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 7043);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 6300);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1100);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1003);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1004);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1005);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1006);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1007);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1008);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1009);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1011);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1012);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 9001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 6408);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 7043);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 6300);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1003);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1004);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1005);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1006);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1007);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1008);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1009);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1011);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1012);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 2001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 3001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 3002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 3003);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 4001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 9001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 6408);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 7043);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 6300);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (3, 1100);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1003);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1004);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1005);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1007);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1008);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1009);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1011);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 1012);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 2001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 3001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 3002);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 4001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 9001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 7043);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (4, 6300);

INSERT INTO SENDUNG(SENDUNGSNR, LIEFERDATUM) VALUES (1, '10.10.2021');

INSERT INTO SENDUNG(SENDUNGSNR, LIEFERDATUM) VALUES (2, '11.10.2021');

INSERT INTO SENDUNG(SENDUNGSNR, LIEFERDATUM) VALUES (3, '11.09.2021');

INSERT INTO LIEFERANT_SENDUNG(LIEFERANTENNR, SENDUNGSNR) VALUES (101, 1);

INSERT INTO LIEFERANT_SENDUNG(LIEFERANTENNR, SENDUNGSNR) VALUES (102, 2);

INSERT INTO LIEFERANT_SENDUNG(LIEFERANTENNR, SENDUNGSNR) VALUES (103, 3);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (2, 1001);

INSERT INTO KATEGORIE_ZUTAT(KATEGORIENR, ZUTATENNR) VALUES (1, 1001);

INSERT INTO SENDUNG_ZUTAT(SENDUNGSNR, ZUTATENNR, MENGE) VALUES (1, 1001, 100);

/******************************************************************************/
/***                              SELECT DATA                               ***/
/******************************************************************************/

SELECT DISTINCT  R.REZEPTNAME
FROM Rezept as R 
JOIN REZEPTINHALT as RI 
ON R.REZEPTID = RI.REZEPTID 
JOIN ZUTAT as Z 
ON RI.ZUTATENNR = Z.ZUTATENNR 
JOIN KATEGORIE_ZUTAT as KZ 
ON Z.ZUTATENNR = KZ.ZUTATENNR 
JOIN ERNAEHRUNGSKATEGORIE as K 
ON KZ.KATEGORIENR = k.KATEGORIENR 
WHERE K.KATEGORIENAME
LIKE 'VEGAN';

SELECT DISTINCT R.REZEPTNAME 
FROM Rezept as R 
JOIN REZEPTINHALT as RI 
ON R.REZEPTID = RI.REZEPTID 
JOIN ZUTAT as Z 
ON RI.ZUTATENNR = Z.ZUTATENNR 
JOIN KATEGORIE_ZUTAT as KZ 
ON Z.ZUTATENNR = KZ.ZUTATENNR 
JOIN ERNAEHRUNGSKATEGORIE as K 
ON KZ.KATEGORIENR = k.KATEGORIENR 
WHERE k.KATEGORIENAME 
LIKE 'Vegetarisch' 
OR k.KATEGORIENAME 
LIKE 'Vegan';


SELECT ZUTAT.BEZEICHNUNG
FROM ZUTAT, REZEPTINHALT
WHERE ZUTAT.ZUTATENNR = REZEPTINHALT.ZUTATENNR AND REZEPTINHALT.REZEPTNAME = 'Spaghetti Bolognese';

SELECT rezeptinhalt.REZEPTNAME 
FROM rezeptinhalt 
INNER JOIN kategorie_zutat ON rezeptinhalt.ZUTATENNR = kategorie_zutat.ZutatenNR;

SELECT REZEPTNAME
     , SUM(KALORIEN) as KALORIENTOTAL
FROM ZUTAT Z1
RIGHT JOIN REZEPTINHALT R1 on R1.ZUTATENNR = Z1.ZUTATENNR
GROUP BY REZEPTNAME
HAVING  KALORIENTOTAL < 400;

Select Bezeichnung
from Zutat 
left outer join Rezeptinhalt 
on Zutat.zutatennr = Rezeptinhalt.ZutatenNR
where RezeptID is NULL;

#Samuel: Alle Rezepte mit einer bestimmten Zutat ausgeben
SELECT R.REZEPTNAME
FROM REZEPT as R
JOIN REZEPTINHALT as RI
ON R.REZEPTID = RI.REZEPTID
JOIN ZUTAT as Z 
ON RI.ZUTATENNR = Z.ZUTATENNR
WHERE Z.BEZEICHNUNG LIKE 'Tomate';

SELECT REZEPT.REZEPTNAME
from REZEPT
JOIN REZEPTINHALT ON REZEPT.REZEPTID = REZEPTINHALT.REZEPTID
GROUP BY REZEPT.REZEPTNAME
HAVING COUNT(*) < 5;

SELECT KUNDENNR
     , AVG(REZEPTINHALT.MENGE * KALORIEN) as KALORIENTOTAL
     , AVG(REZEPTINHALT.MENGE * KOHLENHYDRATE) as KOHLENHYDRATETOTAL
     , AVG(REZEPTINHALT.MENGE * PROTEIN) as PROTEINTOTAL
FROM ZUTAT Z1
LEFT JOIN REZEPTINHALT on REZEPTINHALT.ZUTATENNR = Z1.ZUTATENNR
LEFT JOIN BESTELLUNG_REZEPT BR1 on BR1.REZEPTID = REZEPTINHALT.REZEPTID
LEFT JOIN BESTELLUNG B1 on B1.BESTELLNR = BR1.BESTELLNR
GROUP BY KUNDENNR;

SELECT REZEPTNAME
FROM REZEPTINHALT
LEFT JOIN  ZUTAT_KRITISCHE_INHALTSSTOFFE
ON REZEPTINHALT.zutatennr = ZUTAT_KRITISCHE_INHALTSSTOFFE.ZutatenNR
WHERE ZUTAT_KRITISCHE_INHALTSSTOFFE.INHALTSSTOFFNR = 7
GROUP BY REZEPTNAME;

SELECT *
FROM KUNDE
WHERE KUNDE.ORT Like 'Hamburg';

#Samuel: subselect
SELECT KUNDE.PLZ
FROM KUNDE
WHERE KUNDE.KUNDENNR IN (
SELECT KUNDENNR
FROM BESTELLUNG
GROUP BY KUNDENNR
HAVING COUNT(*) >= 1);

#Samuel: select für rezept mit mehr als 4 zutaten und bestimmter kategorie - Aufg war eigentlich "mehr als 5" - anpassen des Datenbestandes und der Querry
SELECT R.REZEPTNAME
FROM REZEPT as R
JOIN REZEPTINHALT as RI
ON R.REZEPTID = RI.REZEPTID
JOIN ZUTAT as Z 
ON RI.ZUTATENNR = Z.ZUTATENNR
JOIN KATEGORIE_ZUTAT AS KAZU
ON Z.ZUTATENNR = KAZU.ZUTATENNR
JOIN ERNAEHRUNGSKATEGORIE AS EK
ON KAZU.KATEGORIENR = EK.KATEGORIENR
WHERE KATEGORIENAME LIKE "Vegetarisch"
GROUP BY REZEPTNAME
HAVING COUNT(*) > 3;

#SELECT KUNDENNR
#FROM ZUTAT Z1
#LEFT JOIN KATEGORIENAME EK1 on EK1.KATEGORIENR = KZ1.KATEGORIENR
#LEFT JOIN KATEGORIE_ZUTAT KZ1 on KZ1.ZUTATENNR = Z1.ZUTATENNR
#LEFT JOIN REZEPTINHALT RI1 on RI1.ZUTATENNR = Z1.ZUTATENNR
#LEFT JOIN BESTELLUNG_REZEPT BR1 on BR1.REZEPTID = RI1.REZEPTID
#LEFT JOIN BESTELLUNG B1 on B1.BESTELLNR = BR1.BESTELLNR
#WHERE EK1.KATEGORIENAME NOT LIKE 'VEGAN'
#GROUP BY KUNDENNR;

SELECT *
FROM krautundrueben.REZEPTINHALT
ORDER BY REZEPTID;

#Berechnung für die Bestellungskosten der Bestellungen zur Korrektur und Eintragung
SELECT SUM(ZUTAT.NETTOPREIS * REZEPTINHALT.MENGE * bestellung_rezept.STKZAHL) AS RECHNUNGSBETRAG, BESTELLUNG.BESTELLNR
FROM ZUTAT,REZEPTINHALT, BESTELLUNG_REZEPT, BESTELLUNG
WHERE 1=1
AND Zutat.ZUTATENNR = rezeptinhalt.ZUTATENNR
AND REZEPTINHALT.REZEPTID = bestellung_rezept.REZEPTID 
AND BESTELLUNG.BESTELLNR = BESTELLUNG_REZEPT.BESTELLNR
GROUP BY BESTELLNR;

#SAMUEL: ERNAEHRUNGSKATEGORIEN ANZEIGEN - bis jetzt nur ein Szenario, "Gemüsepfanne durch Variable ersetzen!
SELECT 
CASE 
    WHEN E.KATEGORIENAME LIKE "Vegetarisch" THEN true
    ELSE false
  END AS VEGETARISCH,
  Z.BEZEICHNUNG, 
  E.KATEGORIENAME
FROM REZEPT AS R
JOIN REZEPTINHALT AS RI
ON R.REZEPTID = RI.REZEPTID
JOIN ZUTAT AS Z
ON RI.ZUTATENNR = Z.ZUTATENNR
JOIN KATEGORIE_ZUTAT AS KAZU
ON Z.ZUTATENNR = KAZU.ZUTATENNR
JOIN ERNAEHRUNGSKATEGORIE AS E
ON KAZU.KATEGORIENR = E.KATEGORIENR
WHERE R.REZEPTNAME LIKE "Gemüsepfanne";

#SAMUEL: Kritische Inhaltsstoffe ANZEIGEN - bis jetzt nur ein Szenario, "Apfelkuchen" durch Variable ersetzen!
SELECT 
CASE 
    WHEN KRIT.INHALTSSTOFFNAME LIKE "Ei" THEN true
    ELSE false
  END AS Inhaltsstoff_EI,
  Z.BEZEICHNUNG, 
  KRIT.INHALTSSTOFFNAME
FROM REZEPT AS R
JOIN REZEPTINHALT AS RI
ON R.REZEPTID = RI.REZEPTID
JOIN ZUTAT AS Z
ON RI.ZUTATENNR = Z.ZUTATENNR
JOIN ZUTAT_KRITISCHE_INHALTSSTOFFE AS ZUKRIT
ON Z.ZUTATENNR = ZUKRIT.ZUTATENNR
JOIN KRITISCHE_INHALTSSTOFFE AS KRIT
ON ZUKRIT.INHALTSSTOFFNR = KRIT.INHALTSSTOFFNR
WHERE R.REZEPTNAME LIKE "Apfelkuchen";

#Samuel: Kundendaten und Verwendung bei Bestellungen ausgeben via KundenNR an Kunden (DSGVO-Aufgabe) - Bestätigung der Korrektheit von H. Paulsen einholen
SELECT K.*, B.*
FROM KUNDE AS K
JOIN BESTELLUNG AS B
ON K.KUNDENNR = B.KUNDENNR
WHERE K.KUNDENNR = 2003;


COMMIT WORK;
