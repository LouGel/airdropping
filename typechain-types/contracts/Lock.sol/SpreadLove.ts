/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface SpreadLoveInterface extends utils.Interface {
  functions: {
    "bal(address)": FunctionFragment;
    "database()": FunctionFragment;
    "disperseEther()": FunctionFragment;
    "disperseToken(address)": FunctionFragment;
    "viewAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bal"
      | "database"
      | "disperseEther"
      | "disperseToken"
      | "viewAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bal",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "database", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "disperseEther",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disperseToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "viewAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "database", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disperseEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disperseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SpreadLove extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SpreadLoveInterface;

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
    bal(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    database(overrides?: CallOverrides): Promise<[string]>;

    disperseEther(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disperseToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    viewAddress(overrides?: CallOverrides): Promise<[string[]]>;
  };

  bal(
    to: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  database(overrides?: CallOverrides): Promise<string>;

  disperseEther(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disperseToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  viewAddress(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    bal(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    database(overrides?: CallOverrides): Promise<string>;

    disperseEther(overrides?: CallOverrides): Promise<void>;

    disperseToken(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    viewAddress(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    bal(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    database(overrides?: CallOverrides): Promise<BigNumber>;

    disperseEther(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disperseToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    viewAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bal(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    database(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disperseEther(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disperseToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    viewAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}