import { statusCodes } from './status-code.helper.js';

// Bad Request (400)
export class BadResquestError extends Error {
    statusCode = statusCodes.BAD_REQUEST;
    name = "BadResquestError";
  constructor(message = "Bad Request") {
    super(message);
  }
}

// Unauthorized (401)
export class UnauthorizedError extends Error {
    statusCode = statusCodes.UNAUTHORIZED;
    name = "UnauthorizedError";
  constructor(message = "Unauthorized") {
    super(message);
  }
}

// Forbidden (403)
export class ForbiddenError extends Error {
    statusCode = statusCodes.FORBIDDEN;
    name = "ForbiddenError";
  constructor(message = "Forbidden") {
    super(message);
  }
}

// Not Found (404)
export class NotFoundError extends Error {
    statusCode = statusCodes.NOT_FOUND;
    name = "NotFoundError";
  constructor(message = "Not Found") {
    super(message);
  }
}

// Internal Server Error (500)
export class InternalServerError extends Error {
    statusCode = statusCodes.INTERNAL_SERVER_ERROR;
    name = "InternalServerError";
  constructor(message = "Internal Server Error") {
    super(message);
  }
}