module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/ERNAEHRUNGSKATEGORIE': {
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
  '/api/v1/ERNAEHRUNGSKATEGORIE/:id': {
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
  '/api/v1/ERNAEHRUNGSKATEGORIE/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/ERNAEHRUNGSKATEGORIE/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/ERNAEHRUNGSKATEGORIE/bulk': {
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

  '/api/v1/ERNAEHRUNGSKATEGORIE/has/KATEGORIE_ZUTAT': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT': {
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
  '/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/:id': {
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
  '/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};