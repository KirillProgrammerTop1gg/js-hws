import { users } from './users.js';
import usersTemp from '../temp/usersTemp.hbs';

document.querySelector('.users').innerHTML = usersTemp({ users });