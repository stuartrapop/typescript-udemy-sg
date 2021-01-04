import { UserList } from './views/UserList';
import { Collection  } from './models/Collection';

import { User, UserProps } from './models/User';

const rootUrl = 'http://localhost:3000/users'

const users = new Collection(rootUrl,
  (json: UserProps) => {

    return User.buildUser(json);
});

users.fetch();
  const root = document.getElementById('root');
console.log("root", root);
  if (root ){

users.on('change', () => {

  
    
    new UserList(root, users).render();
  
});

users.fetch();




}







/*import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({name:'Name', age: 20});

const root = document.getElementById('root');

if ( root ){
  const userEdit = new UserEdit(
    root,
    user
  );
  
  userEdit.render();

  console.log(userEdit);
} else {

  throw new Error('Root element not found');

}*/





