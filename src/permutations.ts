import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import {getPermutations} from '@drewkimberly/permutations';

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const obj = {
    pilot: ["Han Solo", "Lando Calrissian"],
    copilot: ["Chewbacca", "Rey"],
    ship: "Falcon",
    speed: "1.5c"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(getPermutations(obj), null, 2),
  };
};
