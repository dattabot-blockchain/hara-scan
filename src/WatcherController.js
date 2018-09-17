import HaraBlock from "./model/HaraBlock";
import PrivateNet from "./network/PrivateNet";

/**
 * get _Transaction data with type "transaction" and "block"
 * @author allandino pattras
 */
export const _Transactions = async (event, context, callback, type) => {
  let page = 1;
  let limit = 10;
  
  if(event.queryStringParameters && "page" in event.queryStringParameters) {
    page = event.queryStringParameters.page;
  } else {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({message: "you need page parameter"})
    });
  }

  if(event.queryStringParameters && "limit" in event.queryStringParameters) {
    limit = event.queryStringParameters.limit;
  } else {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({message: "you need limit parameter"})
    });
  }
  
  let data = await new HaraBlock()._getData(type, page, limit);

  callback(null, {
    status: data ? 200 : 401,
    body: JSON.stringify({
      message: data ? "success" : "failed",
      data: data && "Items" in data ? data["Items"] : {}
    })
  });
};

export const _DetailTransactions = async (event, context, callback) => {
  let txHash = false;

  if(event.queryStringParameters && "txhash" in event.queryStringParameters) {
    txHash = event.queryStringParameters.txhash;
  } else {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({message: "you need txhash parameter"})
    });
  }

  let data = await new HaraBlock()._getTxData(txHash);

  callback(null, {
    status: data ? 200 : 401,
    body: JSON.stringify({
      message: data ? "success" : "failed",
      data: data ? data : {}
    })
  });
}

export const _Web3Functions = async (event, context, callback) => {
  let _function = false;
  let _params = [];

  if(event.queryStringParameters && "function" in event.queryStringParameters) {
    _function = event.queryStringParameters.function;
  } else {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({message: "you need function parameter"})
    });
    
  }

  if(event.queryStringParameters && "params" in event.queryStringParameters) {
    _params = event.queryStringParameters.params;
  } else {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({message: "you need params parameter"})
    });
  }

  let data = await new PrivateNet()._web3Alias(_function, _params);

  callback(null, {
    status: data ? 200 : 401,
    body: JSON.stringify({
      message: data ? "success" : "failed",
      data: data ? data : {}
    })
  });
}
