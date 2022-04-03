module.exports = {
  tableName: 'LIEFERANT',
  columns: [{
      columnName: 'LIEFERANTENNR',
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
      columnName: 'LIEFERANTENNAME',
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
    "constraintName": "lieferant_sendung_ibfk_1",
    "tableName": "LIEFERANT_SENDUNG",
    "columnName": "LIEFERANTENNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "LIEFERANT",
    "referencedColumnName": "LIEFERANTENNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  belongsTo: [],
  dbType: 'mysql'
}