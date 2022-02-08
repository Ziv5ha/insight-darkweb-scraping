import { NextFunction, Request, Response } from 'express';
import { clients } from './clients';

export const connectSSE = (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  clients.push(res);
  next();
};
