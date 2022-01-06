/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface StakingInterface extends utils.Interface {
  functions: {
    "earned(address)": FunctionFragment;
    "getReward()": FunctionFragment;
    "lastUpdateBlock()": FunctionFragment;
    "rewardPerToken()": FunctionFragment;
    "rewardPerTokenStored()": FunctionFragment;
    "rewardRate()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "rewards(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakedToken()": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "userRewardPerTokenPaid(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastUpdateBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rewards", values: [string]): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userRewardPerTokenPaid",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userRewardPerTokenPaid",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Staking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingInterface;

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
    earned(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastUpdateBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedToken(overrides?: CallOverrides): Promise<[string]>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  getReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastUpdateBlock(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedToken(overrides?: CallOverrides): Promise<string>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  unstake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userRewardPerTokenPaid(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReward(overrides?: CallOverrides): Promise<void>;

    lastUpdateBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakedToken(overrides?: CallOverrides): Promise<string>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastUpdateBlock(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedToken(overrides?: CallOverrides): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    earned(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastUpdateBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}