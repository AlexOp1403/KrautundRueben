module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    post: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id': {
    get: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk': {
    post: {
      admin: true,
      user: true,
      guest: true
    },
    put: {
      admin: true,
      user: true,
      guest: true
    },
    delete: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Has many routes and permissions */


  /* Belongs to routes and permissions */
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};