const HTTP_CODES = {
  INTERNAL_ERROR: 500,
  NOT_FOUND: 404,
  FORBIDDEN: 401,
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
};

const HTTP_MSG = {
  [HTTP_CODES.INTERNAL_ERROR]: 'Internal Server Error',
  [HTTP_CODES.NOT_FOUND]: 'Not found',
  [HTTP_CODES.FORBIDDEN]: 'Forbidden',
  [HTTP_CODES.SUCCESS]: 'Success',
  [HTTP_CODES.CREATED]: 'Created',
  [HTTP_CODES.ACCEPTED]: 'Accepted',
};

export { HTTP_CODES, HTTP_MSG };
