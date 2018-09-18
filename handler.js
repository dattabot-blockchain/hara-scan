"use strict";
import "babel-polyfill";
import {
  _Transactions,
  _DetailTransactions,
  _Web3Functions,
  _TransactionsByAddress,
  _VerifiedContracts,
  _TotalTransaction
} from "./src/WatcherController";

const _getTransactions = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await _Transactions(event, context, callback, "transaction");
};

const _getTransactionsByAddress = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await _TransactionsByAddress(event, context, callback, "transaction");
};

const _getVerifiedContracts = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await _VerifiedContracts(event, context, callback, "transaction");
};

const _getBlocks = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await _Transactions(event, context, callback, "block");
};

const _getDetailTransaction = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await _DetailTransactions(event, context, callback);
};

const _getWeb3Functions = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return _Web3Functions(event, context, callback);
};

const _getTotalTransaction = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await _TotalTransaction(event, context, callback);
};

export {
  _getTransactions,
  _getBlocks,
  _getDetailTransaction,
  _getWeb3Functions,
  _getTransactionsByAddress,
  _getVerifiedContracts,
  _getTotalTransaction
};
