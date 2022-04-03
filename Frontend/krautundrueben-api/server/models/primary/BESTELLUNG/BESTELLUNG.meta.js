module.exports = {
  tableName: 'BESTELLUNG',
  columns: [{
      columnName: 'BESTELLNR',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'KUNDENNR',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'BESTELLDATUM',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'RECHNUNGSBETRAG',
      type: 'decimal',
      dataType: 'decimal',
      data_type_x_precision: "10",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
    "constraintName": "bestellung_rezept_ibfk_1",
    "tableName": "BESTELLUNG_REZEPT",
    "columnName": "BESTELLNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "BESTELLUNG",
    "referencedColumnName": "BESTELLNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  belongsTo: [{
    "constraintName": "bestellung_ibfk_1",
    "tableName": "BESTELLUNG",
    "columnName": "KUNDENNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "KUNDE",
    "referencedColumnName": "KUNDENNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  dbType: 'mysql'
}