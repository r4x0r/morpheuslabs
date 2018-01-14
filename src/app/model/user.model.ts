export class User {
    constructor(
        public accessToken: string,
        public firstName: string,
        public lastName: string,
        public username: string,
        public email: string,
    ){}
}