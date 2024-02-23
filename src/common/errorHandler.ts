import { HttpException, HttpStatus } from "@nestjs/common";
export function ErrorHandler(
    error: string,
    errorMessage: string,
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR,
  ) {
    throw new HttpException({ error, message: errorMessage }, statusCode);
  }