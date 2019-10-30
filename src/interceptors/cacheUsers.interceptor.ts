import { Singleton, RouteInterceptor } from 'express-with-decorators';
import { Request, Response } from 'express';
import { UserService } from '../services/users.service';

@Singleton([ 
    UserService
])
export class CacheUsersInterceptor implements RouteInterceptor {

    public constructor(
        private readonly userService: UserService
    ) { }

    before(request: Request, response: Response) {
        console.log('Write logic for caching this route');
        const users = this.userService.findAll();
        console.log('**Before**', users);
    }
    after(request: Request, response: Response) {
        console.log('**After**');
    }
}
export default CacheUsersInterceptor;