import { Controller, Get, Interceptor, Middlewares } from "express-with-decorators";
import { NextFunction } from "connect";
import CacheUsersInterceptor from "../interceptors/cacheUsers.interceptor";
import UserService from "../services/users.service";
import { Request, Response } from "express";

@Controller('/api/users', [ UserService ])
export class UserController {

    public constructor(
        private readonly userService: UserService
    ) { }

    @Interceptor(CacheUsersInterceptor)
    @Middlewares([
        (req: Request, res: Response, next: NextFunction) => { next() }
    ])
    @Get('/')
    getUsers(req: Request, res: Response) {
        res
        .status(200)
        .json(this.userService.findAll());
    }

}
export default UserController;