
import {Action} from '@ngrx/store';
import { Tasks } from "./shared/task.model";
import * as AddOthetTasks  from './tasks.action';


const initialState = {
    tasks:[]
};

export function taskManageReducer(state = initialState, action:Action){
    switch(action.type){
        case AddOthetTasks.ADD_TASK:
            state.tasks.push()
            return {
                ...state,
                tasks:[...state.tasks, action.payload]
            };
    }
     
}