import { Model } from 'pinia-orm/dist'
import { Str, Uid } from 'pinia-orm/dist/decorators'

export default class User extends Model {
    static entity = 'users'
    
    declare id: string
    declare name: string
    declare email: string
}