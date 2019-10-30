import { Server } from 'express-with-decorators';
import express, { Application } from 'express';

class ServerApp extends Server {
    public constructor(expressInstance: Application) {
        super(expressInstance);
    }
}

export const app = new ServerApp(express());
export default app;