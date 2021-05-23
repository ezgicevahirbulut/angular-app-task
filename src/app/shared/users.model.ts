import { v4 as uuidv4 } from 'uuid'

export class Users {
    id: string
    name: string
    mail:string | undefined
   

    constructor(name: string, url: string) {
        this.id = uuidv4()
        
        this.name = name
        this.mail = this.mail
    }
}