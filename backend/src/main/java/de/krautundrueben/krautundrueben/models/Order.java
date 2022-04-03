package de.krautundrueben.krautundrueben.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "bestellung")
public class Order {
    @Id
    @Column(name = "BESTELLNR")
    private Integer bestellNr;
    @Column(name = "KUNDENNR")
    private String kundenNR;
    @Column(name = "BESTELLDATUM")
    private String bestellDatum;
    @Column(name = "RECHNUNGSBETRAG")
    private String rechnungsBetrag;

    public Order() {
    }

    public Order(Integer bestellNr, String kundenNR, String bestellDatum, String rechnungsBetrag) {
        this.bestellNr = bestellNr;
        this.kundenNR = kundenNR;
        this.bestellDatum = bestellDatum;
        this.rechnungsBetrag = rechnungsBetrag;
    }

    public Integer getBestellNr() {
        return bestellNr;
    }

    public void setBestellNr(Integer bestellNr) {
        this.bestellNr = bestellNr;
    }

    public String getKundenNR() {
        return kundenNR;
    }

    public void setKundenNR(String kundenNR) {
        this.kundenNR = kundenNR;
    }

    public String getBestellDatum() {
        return bestellDatum;
    }

    public void setBestellDatum(String bestellDatum) {
        this.bestellDatum = bestellDatum;
    }

    public String getRechnungsBetrag() {
        return rechnungsBetrag;
    }

    public void setRechnungsBetrag(String rechnungsBetrag) {
        this.rechnungsBetrag = rechnungsBetrag;
    }
}
