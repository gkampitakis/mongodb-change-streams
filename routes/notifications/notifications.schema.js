const createSchema = {
  body: {
    type: 'object',
    properties: {
      message: { type: 'string' }
    },
    required: ['message']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        createdAt: { type: 'number' },
        _id: { type: 'string' }
      },
      required: ['message', 'createdAt', '_id']
    }
  }
};

const retrieveSchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        createdAt: { type: 'number' },
        _id: { type: 'string' }
      },
      required: ['message', 'createdAt', '_id']
    },
    404: {
      type: 'string',
      enum: ['Notification not found']
    }
  }
};

const retrieveAllSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          createdAt: { type: 'number' },
          _id: { type: 'string' }
        },
        required: ['message', 'createdAt', '_id']
      }
    }
  }
};

const updateSchema = {
  body: {
    type: 'object',
    properties: {
      message: { type: 'string' }
    },
    required: ['message']
  },
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      },
      required: ['message']
    }
  }
};

const _deleteSchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      },
      required: ['id']
    }
  }
};

module.exports = {
  createSchema,
  retrieveSchema,
  retrieveAllSchema,
  updateSchema,
  _deleteSchema
};
