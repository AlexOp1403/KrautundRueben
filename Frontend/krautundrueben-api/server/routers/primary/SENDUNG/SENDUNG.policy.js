module.exports.permissions = {

  /* Route Permissions : CRUD, List, FindOne and Exists */
  '/api/v1/SENDUNG': {
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
  '/api/v1/SENDUNG/:id': {
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
  '/api/v1/SENDUNG/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Aggregate Route Permissions */
  '/api/v1/SENDUNG/groupby/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/distribution/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/distinct/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/aggregate/:columnName': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  /* Bulk Route Permissions */
  '/api/v1/SENDUNG/bulk': {
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

  '/api/v1/SENDUNG/has/LIEFERANT_SENDUNG': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG': {
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
  '/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/:id': {
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
  '/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },

  '/api/v1/SENDUNG/has/SENDUNG_ZUTAT': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT': {
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
  '/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/findOne': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/count': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },
  '/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/:id': {
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
  '/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/:id/exists': {
    get: {
      admin: true,
      user: true,
      guest: true
    }
  },


  /* Belongs to routes and permissions */



};