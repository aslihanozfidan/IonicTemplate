export class Token {
  private token:string;
  private userID:number;
  private static nesne:Token;

  public static getNesne():Token{
      if(this.nesne == null){
          this.nesne = new Token();
      }
      return this.nesne;
  }

  public setToken(token:string):void{
      this.token = token;
  }
  public getToken():string{
    return this.token;
  }

}
