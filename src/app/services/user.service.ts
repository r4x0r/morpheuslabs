import { User } from '../model/user.model'

export class UserService {
    private user: User
    initUser(user:User){
        this.user = user
    }
    getUser(){
        return this.user
    }
    getAccessToken(){
        return this.user.accessToken
    }
}