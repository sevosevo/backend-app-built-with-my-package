import { app } from './app';
import { UserController } from './controllers/users.controller';
//Mount controllers
app.mountController(UserController);
//Start server
app.listen(8000)
.then(() => console.log('Server started...'))
.catch(err => console.error(err));