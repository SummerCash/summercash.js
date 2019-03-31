import * as request from 'request-promise-native'; // Import requests
import { Base64 } from 'js-base64';

// Class TransactionAPI defines a SummerCash transaction API instance.
export class TransactionAPI {
  public provider: string; // Init provider buffer
  private serviceLookup: string; // Init lookup buffer

  // Initializes a new AccountsAPI instance with a given provider.
  public constructor(provider: string) {
    this.provider = provider; // Set provider
    this.serviceLookup = `${provider}/twirp/transaction.Transaction`; // Set service lookup
  }

  // newTransaction calls the NewTransaction() RPC method.
  public newTransaction(
    sender: string,
    recipient: string,
    amount: number,
    payload: string,
  ): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/NewTransaction`, // Set URI
      body: {
        address: sender, // Set sender
        address2: recipient, // Set recipient
        amount: amount, // Set amount
        payload: Base64.encode(payload), // Set encoded payload
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // signTransaction calls the SignTransaction() RPC method.
  public signTransaction(transactionHash: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/SignTransaction`, // Set URI
      body: {
        address: transactionHash, // Set tx hash
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }

  // publishTransaction calls the PublishTransaction() RPC method.
  public publishTransaction(transactionHash: string): request.RequestPromise<any> {
    const options = {
      method: 'POST', // Set method
      uri: `${this.serviceLookup}/Publish`, // Set URI
      body: {
        address: transactionHash, // Set tx hash
      }, // Init body
      json: true, // Set JSON
    }; // Init options

    return request.post(options); // Return request response
  }
}
