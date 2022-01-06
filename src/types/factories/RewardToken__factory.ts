/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardToken, RewardTokenInterface } from "../RewardToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f52657761726420546f6b656e00000000000000000000000000000000000000008152506040518060400160405280600481526020017f52544b4e00000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620001a6565b508060049080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6119b780620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f9190611620565b60405180910390f35b610132600480360381019061012d9190611189565b6103b4565b60405161013f9190611605565b60405180910390f35b6101506103d2565b60405161015d9190611782565b60405180910390f35b610180600480360381019061017b919061113a565b6103dc565b60405161018d9190611605565b60405180910390f35b61019e6104d4565b6040516101ab919061179d565b60405180910390f35b6101ce60048036038101906101c99190611189565b6104dd565b6040516101db9190611605565b60405180910390f35b6101fe60048036038101906101f99190611189565b610589565b005b61021a600480360381019061021591906110d5565b610613565b6040516102279190611782565b60405180910390f35b61023861065b565b005b6102426106e3565b60405161024f91906115ea565b60405180910390f35b61026061070d565b60405161026d9190611620565b60405180910390f35b610290600480360381019061028b9190611189565b61079f565b60405161029d9190611605565b60405180910390f35b6102c060048036038101906102bb9190611189565b61088a565b6040516102cd9190611605565b60405180910390f35b6102f060048036038101906102eb91906110fe565b6108a8565b6040516102fd9190611782565b60405180910390f35b610320600480360381019061031b91906110d5565b61092f565b005b606060038054610331906118b2565b80601f016020809104026020016040519081016040528092919081815260200182805461035d906118b2565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b60006103c86103c1610a27565b8484610a2f565b6001905092915050565b6000600254905090565b60006103e9848484610bfa565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610434610a27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ab906116c2565b60405180910390fd5b6104c8856104c0610a27565b858403610a2f565b60019150509392505050565b60006012905090565b600061057f6104ea610a27565b8484600160006104f8610a27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461057a91906117d4565b610a2f565b6001905092915050565b610591610a27565b73ffffffffffffffffffffffffffffffffffffffff166105af6106e3565b73ffffffffffffffffffffffffffffffffffffffff1614610605576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc906116e2565b60405180910390fd5b61060f8282610e7b565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610663610a27565b73ffffffffffffffffffffffffffffffffffffffff166106816106e3565b73ffffffffffffffffffffffffffffffffffffffff16146106d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ce906116e2565b60405180910390fd5b6106e16000610fdb565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461071c906118b2565b80601f0160208091040260200160405190810160405280929190818152602001828054610748906118b2565b80156107955780601f1061076a57610100808354040283529160200191610795565b820191906000526020600020905b81548152906001019060200180831161077857829003601f168201915b5050505050905090565b600080600160006107ae610a27565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561086b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086290611742565b60405180910390fd5b61087f610876610a27565b85858403610a2f565b600191505092915050565b600061089e610897610a27565b8484610bfa565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610937610a27565b73ffffffffffffffffffffffffffffffffffffffff166109556106e3565b73ffffffffffffffffffffffffffffffffffffffff16146109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a2906116e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1290611662565b60405180910390fd5b610a2481610fdb565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9690611722565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0690611682565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bed9190611782565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6190611702565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd190611642565b60405180910390fd5b610ce58383836110a1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d62906116a2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dfe91906117d4565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e629190611782565b60405180910390a3610e758484846110a6565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee290611762565b60405180910390fd5b610ef7600083836110a1565b8060026000828254610f0991906117d4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f5e91906117d4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fc39190611782565b60405180910390a3610fd7600083836110a6565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000813590506110ba81611953565b92915050565b6000813590506110cf8161196a565b92915050565b6000602082840312156110e757600080fd5b60006110f5848285016110ab565b91505092915050565b6000806040838503121561111157600080fd5b600061111f858286016110ab565b9250506020611130858286016110ab565b9150509250929050565b60008060006060848603121561114f57600080fd5b600061115d868287016110ab565b935050602061116e868287016110ab565b925050604061117f868287016110c0565b9150509250925092565b6000806040838503121561119c57600080fd5b60006111aa858286016110ab565b92505060206111bb858286016110c0565b9150509250929050565b6111ce8161182a565b82525050565b6111dd8161183c565b82525050565b60006111ee826117b8565b6111f881856117c3565b935061120881856020860161187f565b61121181611942565b840191505092915050565b60006112296023836117c3565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061128f6026836117c3565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006112f56022836117c3565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061135b6026836117c3565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006113c16028836117c3565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114276020836117c3565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006114676025836117c3565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114cd6024836117c3565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115336025836117c3565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611599601f836117c3565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6115d581611868565b82525050565b6115e481611872565b82525050565b60006020820190506115ff60008301846111c5565b92915050565b600060208201905061161a60008301846111d4565b92915050565b6000602082019050818103600083015261163a81846111e3565b905092915050565b6000602082019050818103600083015261165b8161121c565b9050919050565b6000602082019050818103600083015261167b81611282565b9050919050565b6000602082019050818103600083015261169b816112e8565b9050919050565b600060208201905081810360008301526116bb8161134e565b9050919050565b600060208201905081810360008301526116db816113b4565b9050919050565b600060208201905081810360008301526116fb8161141a565b9050919050565b6000602082019050818103600083015261171b8161145a565b9050919050565b6000602082019050818103600083015261173b816114c0565b9050919050565b6000602082019050818103600083015261175b81611526565b9050919050565b6000602082019050818103600083015261177b8161158c565b9050919050565b600060208201905061179760008301846115cc565b92915050565b60006020820190506117b260008301846115db565b92915050565b600081519050919050565b600082825260208201905092915050565b60006117df82611868565b91506117ea83611868565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561181f5761181e6118e4565b5b828201905092915050565b600061183582611848565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561189d578082015181840152602081019050611882565b838111156118ac576000848401525b50505050565b600060028204905060018216806118ca57607f821691505b602082108114156118de576118dd611913565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61195c8161182a565b811461196757600080fd5b50565b61197381611868565b811461197e57600080fd5b5056fea2646970667358221220a156c9900b01d96154a19c516666d04d55065775da779bf4e459eb1e4b6a67bf64736f6c63430008000033";

type RewardTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardToken__factory extends ContractFactory {
  constructor(...args: RewardTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardToken> {
    return super.deploy(overrides || {}) as Promise<RewardToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RewardToken {
    return super.attach(address) as RewardToken;
  }
  connect(signer: Signer): RewardToken__factory {
    return super.connect(signer) as RewardToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardTokenInterface {
    return new utils.Interface(_abi) as RewardTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardToken {
    return new Contract(address, _abi, signerOrProvider) as RewardToken;
  }
}