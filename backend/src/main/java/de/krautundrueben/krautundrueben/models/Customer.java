package de.krautundrueben.krautundrueben.models;

import jdk.jfr.Name;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity(name = "kunde")
public class Customer {
    @Id
    @Column(name = "KUNDENNR")
    private Integer kundenNr;
    @Column(name = "NACHNAME")
    private String nachname;
    @Column(name = "VORNAME")
    private String vorname;
    @Column(name = "GEBURTSDATUM")
    private String geburtsdatum;
    @Column(name = "STRASSE")
    private String strasse;
    @Column(name = "PLZ")
    private String plz;
    @Column(name = "ORT")
    private String ort;
    @Column(name = "TELEFON")
    private String telefon;
    @Column(name = "EMAIL")
    private String email;


    public Customer(Integer kundenNr, String nachname, String vorname, String geburtsdatum, String strasse, String plz, String ort, String telefon, String email) {
        this.kundenNr = kundenNr;
        this.nachname = nachname;
        this.vorname = vorname;
        this.geburtsdatum = geburtsdatum;
        this.strasse = strasse;
        this.plz = plz;
        this.ort = ort;
        this.telefon = telefon;
        this.email = email;
    }

    public Customer() {

    }


    Integer getKundenNr() {
        return kundenNr;
    }

    public void setKundenNr(Integer kundenNr) {
        this.kundenNr = kundenNr;
    }

    public String getNachname() {
        return nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getVorname() {
        return vorname;
    }

    public void setVorname(String vorname) {
        this.vorname = vorname;
    }

    public String getGeburtsdatum() {
        return geburtsdatum;
    }

    public void setGeburtsdatum(String geburtstdatum) {
        this.geburtsdatum = geburtstdatum;
    }

    public String getStrasse() {
        return strasse;
    }

    public void setStrasse(String strasse) {
        this.strasse = strasse;
    }

    public String getPlz() {
        return plz;
    }

    public void setPlz(String plz) {
        this.plz = plz;
    }

    public String getOrt() {
        return ort;
    }

    public void setOrt(String ort) {
        this.ort = ort;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
