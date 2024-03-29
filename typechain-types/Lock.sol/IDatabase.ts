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
} from "../common";

export interface IDatabaseInterface extends utils.Interface {
  functions: {
    "first()": FunctionFragment;
    "second()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "first" | "second"): FunctionFragment;

  encodeFunctionData(functionFragment: "first", values?: undefined): string;
  encodeFunctionData(functionFragment: "second", values?: undefined): string;

  decodeFunctionResult(functionFragment: "first", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "second", data: BytesLike): Result;

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
    first(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        un: string;
        deux: string;
        trois: string;
        quattre: string;
        cinq: string;
      }
    >;

    second(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        un: string;
        deux: string;
        trois: string;
        quattre: string;
        cinq: string;
      }
    >;
  };

  first(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string] & {
      un: string;
      deux: string;
      trois: string;
      quattre: string;
      cinq: string;
    }
  >;

  second(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string] & {
      un: string;
      deux: string;
      trois: string;
      quattre: string;
      cinq: string;
    }
  >;

  callStatic: {
    first(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        un: string;
        deux: string;
        trois: string;
        quattre: string;
        cinq: string;
      }
    >;

    second(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        un: string;
        deux: string;
        trois: string;
        quattre: string;
        cinq: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    first(overrides?: CallOverrides): Promise<BigNumber>;

    second(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    first(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    second(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
