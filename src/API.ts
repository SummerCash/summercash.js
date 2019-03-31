// Class API defines a SummerCash API instance.
export class API {
  public provider: string; // Init provider buffer

  // Initializes a new API instance with a given provider.
  constructor(provider: string) {
    this.provider = provider; // Set provider
  }
}
