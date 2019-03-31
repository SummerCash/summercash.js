import { AccountsAPI } from '../src/AccountsAPI'; // Import accounts API

const accountsAPI = new AccountsAPI('http://localhost:8081'); // Init accounts API reference

accountsAPI.newAccount().then(newAccountResponse => {
  console.log(newAccountResponse); // Log response
}); // Initialize a new account

accountsAPI.getAllAccounts().then(allAccountsResponse => {
  console.log(allAccountsResponse); // Log response
}); // Get all account addresses
