/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IDatabaseInterface extends utils.Interface {
  functions: {
    "getAddressBook()": FunctionFragment;
    "getShares()": FunctionFragment;
    "totalShares()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getAddressBook" | "getShares" | "totalShares"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAddressBook",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getShares", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAddressBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDatabase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDatabaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAddressBook(overrides?: CallOverrides): Promise<[string[]]>;

    getShares(overrides?: CallOverrides): Promise<[number[]]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getAddressBook(overrides?: CallOverrides): Promise<string[]>;

  getShares(overrides?: CallOverrides): Promise<number[]>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getAddressBook(overrides?: CallOverrides): Promise<string[]>;

    getShares(overrides?: CallOverrides): Promise<number[]>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAddressBook(overrides?: CallOverrides): Promise<BigNumber>;

    getShares(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddressBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
