export class User {
    then(arg0: (success: any) => void, arg1: (error: any) => void) {
      throw new Error('Method not implemented.');
    }
    constructor(
   public name: string,
   public followers: number,
   public following: number,
   public public_repos: number, 
   public url: string,
   public blog: string,
   public avatar_url: string,
   public login: string,
   public location: string,
   public gists: number,
   public created_at: Date,
){}
   

}