import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import {getPermutations} from '@drewkimberly/permutations';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const permutable = JSON.parse(event.body);
  let response;

  try {
    const permutations = getPermutations(permutable);
    response = getResponse(200, serialize(permutations));
  } catch(e) {
    response = getErrorResponse(400, e);
  }

  return response;
};

const serialize = (obj) => JSON.stringify(obj, null, 2);

const getResponse = (code: number, responseBody: string) => ({statusCode: code, body: responseBody});

const getErrorResponse = (code: number, errorResponseBody: string) => ({
  ...getResponse(code, errorResponseBody),
  headers: {'x-amzn-ErrorType': code}
});
