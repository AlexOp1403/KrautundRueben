module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/KATEGORIE_ZUTAT': {
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
  '/api/v1/KATEGORIE_ZUTAT/:id': {
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
  '/api/v1/KATEGORIE_ZUTAT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/KATEGORIE_ZUTAT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/KATEGORIE_ZUTAT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/KATEGORIE_ZUTAT/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/KATEGORIE_ZUTAT/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/KATEGORIE_ZUTAT/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/KATEGORIE_ZUTAT/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/KATEGORIE_ZUTAT/bulk': {
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
  '/api/v1/KATEGORIE_ZUTAT/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/KATEGORIE_ZUTAT/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};