import { AccountsAPI } from './AccountsAPI';

// Class API defines a SummerCash API instance.
export class API {
  public accounts: AccountsAPI; // Init accounts API buffer

  public provider: string; // Init provider buffer

  // Initializes a new API instance with a given provider.
  public constructor(provider: string) {
    this.provider = provider; // Set provider

    this.accounts = new AccountsAPI(provider); // Initialize accounts API
  }
}
