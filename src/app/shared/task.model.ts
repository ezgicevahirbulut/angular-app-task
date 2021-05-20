import { v4 as uuidv4 } from 'uuid'

export class Tasks {
    id: string
  mail: any
    
    constructor(public title: string, public content: string) {
        this.id = uuidv4()
    }
}