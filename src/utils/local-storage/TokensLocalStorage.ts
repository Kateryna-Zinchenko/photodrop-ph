import LocalStorage from "./LocalStorage";

enum Locals {
  ACCESS_TOKEN = "access_token",
  user = "user",
}

class TokensLocalStorage extends LocalStorage<Locals> {
  private static instance?: TokensLocalStorage;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!TokensLocalStorage.instance) {
      TokensLocalStorage.instance = new TokensLocalStorage();
    }

    return TokensLocalStorage.instance;
  }

  public getAccessToken() {
    return this.get(Locals.ACCESS_TOKEN);
  }
  public getUser() {
    return this.get(Locals.user);
  }

  public setAccessToken(accessToken: string) {
    this.set(Locals.ACCESS_TOKEN, accessToken);
  }

  public setUser(user: any) {
    this.set(Locals.user, user.id);
  }

  public clear() {
    this.clearItems([Locals.ACCESS_TOKEN, Locals.user]);
  }
}

export default TokensLocalStorage;
