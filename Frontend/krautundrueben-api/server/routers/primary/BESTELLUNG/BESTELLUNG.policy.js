module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/BESTELLUNG': {
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
  '/api/v1/BESTELLUNG/:id': {
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
  '/api/v1/BESTELLUNG/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/BESTELLUNG/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/BESTELLUNG/bulk': {
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

  '/api/v1/BESTELLUNG/has/BESTELLUNG_REZEPT': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT': {
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
  '/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/:id': {
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
  '/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */
  '/api/v1/BESTELLUNG/belongs/:parents': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


};