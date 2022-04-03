module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/REZEPT': {
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
  '/api/v1/REZEPT/:id': {
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
  '/api/v1/REZEPT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/REZEPT/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/REZEPT/bulk': {
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

  '/api/v1/REZEPT/has/BESTELLUNG_REZEPT': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT': {
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
  '/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/:id': {
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
  '/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  '/api/v1/REZEPT/has/REZEPTINHALT': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:parentId/REZEPTINHALT': {
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
  '/api/v1/REZEPT/:parentId/REZEPTINHALT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:parentId/REZEPTINHALT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/REZEPT/:parentId/REZEPTINHALT/:id': {
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
  '/api/v1/REZEPT/:parentId/REZEPTINHALT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};