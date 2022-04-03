module.exports = {
  tableName: 'KUNDE',
  columns: [{
      columnName: 'KUNDENNR',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'NACHNAME',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'VORNAME',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'GEBURTSDATUM',
      type: 'date',
      dataType: 'date',
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'STRASSE',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'HAUSNR',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "6",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'PLZ',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "5",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ORT',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'TELEFON',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "25",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'EMAIL',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
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
  belongsTo: [],
  dbType: 'mysql'
}