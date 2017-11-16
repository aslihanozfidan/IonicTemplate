export class Token {
    private token: string;
    private userId: string;
    private userName: string;
    private phone: string;
    private email: string;
    private UTh: number;
    private static nesne: Token;

  public static getNesne(): Token {
      if(this.nesne == null) {
          this.nesne = new Token();
      }
      return this.nesne;
  }

  public setToken(token: string):void {
      this.token = token;
  }
  public getToken(): string {
    return this.token;
  }

  public setUserName(userName: string):void {
      this.userName = userName;
  }
  public getUserName(): string {
    return this.userName;
  }

  public setUserId(userId: string):void {
      this.userId = userId;
  }
  public getUserId(): string {
    return this.userId;
  }

  public setEmail(email: string):void {
      this.email = email;
  }
  public getEmail(): string {
    return this.email;
  }

  public setPhone(phone: string):void {
      this.phone = phone;
  }
  public getPhone(): string {
    return this.phone;
  }

  public setUTh(UTh: string):void {
      this.UTh = UTh;
  }
  public getUTh(): string {
    return this.UTh;
  }
}
