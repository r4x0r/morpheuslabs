export class Workspace {
    constructor(
        public name: string,
        public status: string,
        public chainType: string,
        public appType: string,
        public lang: string,
        public env: string
    ){}
  }