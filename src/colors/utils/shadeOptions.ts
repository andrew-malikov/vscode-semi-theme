export default class ShadeOptions {
  public amount?: number;
  public hasDark: boolean;
  public hasLight: boolean;

  constructor(amount?: number) {
    this.amount = amount;
    this.hasDark = true;
    this.hasLight = true;
  }

  public withoutDark(): ShadeOptions {
    this.hasDark = false;
    return this;
  }

  public withoutLight(): ShadeOptions {
    this.hasLight = false;
    return this;
  }
}
