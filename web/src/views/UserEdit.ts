import { User, UserProps } from '../models/User';

import { View } from './View';

import { UserForm } from './UserForm';
import { UserShow} from './UserShow';

export class UserEdit extends View <User, UserProps> {  


  constructor(public parent: Element, public model: User) {
    super(parent, model);    
  };

  regionsMap(): {[key:string] : string }{
    return{
      userShow: '.user-show',
      userForm: '.user-form'
    }

  }
  template(): string {
    return `
      <div> Class Edit</div>
      <div class="user-show"> </div>
      <div class="user-form"> </div>
    `;  
  }

  onRender():void {

    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();
    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();


  }

}