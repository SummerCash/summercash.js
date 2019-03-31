import * as request from 'request-promise-native'; // Import requests
import { Base64 } from 'js-base64';

// Class ChainAPI defines a SummerCash chain API instance.
export class ChainAPI {
  public provider: string; // Init provider buffer
  private serviceLookup: string; // Init lookup buffer

  // Initializes a new ChainAPI instance with a given provider.
  public constructor(provider: string) {
    this.provider = provider; // Set provider
    this.serviceLookup = `${provider}/twirp/chain.Chain`; // Set service lookup
  }

  // getBalance calls the GetBalance() RPC method.
  public getBalance(account: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/GetBalance`, // Set URI
      body: {
        address: account, // Set account
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // string calls the String() RPC method.
  public string(account: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/String`, // Set URI
      body: {
        address: account, // Set account
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // queryTransaction calls the QueryTransaction() RPC method.
  public queryTransaction(transactionHash: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/QueryTransaction`, // Set URI
      body: {
        address: transactionHash, // Set tx hash
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // getNumTransactions calls the GetNumTransactions() RPC method.
  public getNumTransactions(account: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/GetNumTransactions`, // Set URI
      body: {
        address: account, // Set account
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }
}
