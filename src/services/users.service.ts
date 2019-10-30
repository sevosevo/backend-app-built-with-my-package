import { Singleton } from "express-with-decorators";

@Singleton([]) 
export class UserService {

    public findAll() {
        return [
            {
                username: 'test',
                email: 'dsadsadsa@gmail.com'
            }
        ]
    }

}
export default UserService;