import * as request from 'request-promise-native'; // Import requests

// Class AccountsAPI defines a SummerCash accounts API instance.
export class AccountsAPI {
  public provider: string; // Init provider buffer
  private serviceLookup: string; // Init lookup buffer

  // Initializes a new AccountsAPI instance with a given provider.
  public constructor(provider: string) {
    this.provider = provider; // Set provider
    this.serviceLookup = `${provider}/twirp/accounts.Accounts`; // Set service lookup
  }

  // NewAccount calls the NewAccount() RPC method.
  public newAccount(): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/NewAccount`, // Set URI
      body: {}, // Init empty body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // getAllAccounts calls the GetAllAccounts() RPC method.
  public getAllAccounts(): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/GetAllAccounts`, // Set URI
      body: {}, // Init empty body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // string calls the string() rpc method.
  public string(accountAddress: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/GetAllAccounts`, // Set URI
      body: {
        address: accountAddress, // Set account address
      }, // Init empty body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }
}
