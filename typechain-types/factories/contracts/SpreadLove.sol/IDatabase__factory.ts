/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDatabase,
  IDatabaseInterface,
} from "../../../contracts/SpreadLove.sol/IDatabase";

const _abi = [
  {
    inputs: [],
    name: "getAddressBook",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getShares",
    outputs: [
      {
        internalType: "uint8[]",
        name: "",
        type: "uint8[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
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
] as const;

export class IDatabase__factory {
  static readonly abi = _abi;
  static createInterface(): IDatabaseInterface {
    return new utils.Interface(_abi) as IDatabaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDatabase {
    return new Contract(address, _abi, signerOrProvider) as IDatabase;
  }
}