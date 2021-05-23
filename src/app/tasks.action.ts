import{Action} from '@ngrx/store';
import { Tasks } from './shared/task.model';
import { Users } from './shared/users.model';

export const ADD_TASK ='ADD_TASK';
export const ADD_USER ='ADD_USER';

export class AddTask implements Action{
    readonly type=ADD_TASK;
    constructor(public payload: Tasks){}
}

export class AddUser implements Action{
    readonly type=ADD_USER;
    constructor(public payload: Users){}
}

