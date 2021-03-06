// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ItemDeployed extends ethereum.Event {
  get params(): ItemDeployed__Params {
    return new ItemDeployed__Params(this);
  }
}

export class ItemDeployed__Params {
  _event: ItemDeployed;

  constructor(event: ItemDeployed) {
    this._event = event;
  }

  get itemAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get title(): string {
    return this._event.parameters[3].value.toString();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get endPaymentDate(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get uri(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class MetaTransactionExecuted extends ethereum.Event {
  get params(): MetaTransactionExecuted__Params {
    return new MetaTransactionExecuted__Params(this);
  }
}

export class MetaTransactionExecuted__Params {
  _event: MetaTransactionExecuted;

  constructor(event: MetaTransactionExecuted) {
    this._event = event;
  }

  get userAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get relayerAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get functionSignature(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UserDeployed extends ethereum.Event {
  get params(): UserDeployed__Params {
    return new UserDeployed__Params(this);
  }
}

export class UserDeployed__Params {
  _event: UserDeployed;

  constructor(event: UserDeployed) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get description(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Main__superfluidConfigResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: string;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }
}

export class Main extends ethereum.SmartContract {
  static bind(address: Address): Main {
    return new Main("Main", address);
  }

  createSuperToken(_token: Address): Address {
    let result = super.call(
      "createSuperToken",
      "createSuperToken(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toAddress();
  }

  try_createSuperToken(_token: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createSuperToken",
      "createSuperToken(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployUser(name: string, description: string): Address {
    let result = super.call(
      "deployUser",
      "deployUser(string,string):(address)",
      [ethereum.Value.fromString(name), ethereum.Value.fromString(description)]
    );

    return result[0].toAddress();
  }

  try_deployUser(
    name: string,
    description: string
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployUser",
      "deployUser(string,string):(address)",
      [ethereum.Value.fromString(name), ethereum.Value.fromString(description)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployedUsers(param0: Address): Address {
    let result = super.call(
      "deployedUsers",
      "deployedUsers(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_deployedUsers(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployedUsers",
      "deployedUsers(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDeployedUser(user: Address): Address {
    let result = super.call(
      "getDeployedUser",
      "getDeployedUser(address):(address)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toAddress();
  }

  try_getDeployedUser(user: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getDeployedUser",
      "getDeployedUser(address):(address)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getNonce(user: Address): BigInt {
    let result = super.call("getNonce", "getNonce(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBigInt();
  }

  try_getNonce(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNonce", "getNonce(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSuperToken(_token: Address): Address {
    let result = super.call(
      "getSuperToken",
      "getSuperToken(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toAddress();
  }

  try_getSuperToken(_token: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSuperToken",
      "getSuperToken(address):(address)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isSuperToken(_token: Address): boolean {
    let result = super.call("isSuperToken", "isSuperToken(address):(bool)", [
      ethereum.Value.fromAddress(_token)
    ]);

    return result[0].toBoolean();
  }

  try_isSuperToken(_token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSuperToken", "isSuperToken(address):(bool)", [
      ethereum.Value.fromAddress(_token)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  superTokenRegistry(param0: Address): Address {
    let result = super.call(
      "superTokenRegistry",
      "superTokenRegistry(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_superTokenRegistry(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "superTokenRegistry",
      "superTokenRegistry(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  superfluidConfig(): Main__superfluidConfigResult {
    let result = super.call(
      "superfluidConfig",
      "superfluidConfig():(address,address,address,string)",
      []
    );

    return new Main__superfluidConfigResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toString()
    );
  }

  try_superfluidConfig(): ethereum.CallResult<Main__superfluidConfigResult> {
    let result = super.tryCall(
      "superfluidConfig",
      "superfluidConfig():(address,address,address,string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Main__superfluidConfigResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toString()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get sfHost(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get sfCfa(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get sfResolver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get sfVersion(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateSuperTokenCall extends ethereum.Call {
  get inputs(): CreateSuperTokenCall__Inputs {
    return new CreateSuperTokenCall__Inputs(this);
  }

  get outputs(): CreateSuperTokenCall__Outputs {
    return new CreateSuperTokenCall__Outputs(this);
  }
}

export class CreateSuperTokenCall__Inputs {
  _call: CreateSuperTokenCall;

  constructor(call: CreateSuperTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateSuperTokenCall__Outputs {
  _call: CreateSuperTokenCall;

  constructor(call: CreateSuperTokenCall) {
    this._call = call;
  }

  get superToken(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployItemCall extends ethereum.Call {
  get inputs(): DeployItemCall__Inputs {
    return new DeployItemCall__Inputs(this);
  }

  get outputs(): DeployItemCall__Outputs {
    return new DeployItemCall__Outputs(this);
  }
}

export class DeployItemCall__Inputs {
  _call: DeployItemCall;

  constructor(call: DeployItemCall) {
    this._call = call;
  }

  get title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get endPaymentDate(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get uri(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class DeployItemCall__Outputs {
  _call: DeployItemCall;

  constructor(call: DeployItemCall) {
    this._call = call;
  }
}

export class DeployUserCall extends ethereum.Call {
  get inputs(): DeployUserCall__Inputs {
    return new DeployUserCall__Inputs(this);
  }

  get outputs(): DeployUserCall__Outputs {
    return new DeployUserCall__Outputs(this);
  }
}

export class DeployUserCall__Inputs {
  _call: DeployUserCall;

  constructor(call: DeployUserCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class DeployUserCall__Outputs {
  _call: DeployUserCall;

  constructor(call: DeployUserCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ExecuteMetaTransactionCall extends ethereum.Call {
  get inputs(): ExecuteMetaTransactionCall__Inputs {
    return new ExecuteMetaTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteMetaTransactionCall__Outputs {
    return new ExecuteMetaTransactionCall__Outputs(this);
  }
}

export class ExecuteMetaTransactionCall__Inputs {
  _call: ExecuteMetaTransactionCall;

  constructor(call: ExecuteMetaTransactionCall) {
    this._call = call;
  }

  get userAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get functionSignature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get sigR(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get sigS(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get sigV(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class ExecuteMetaTransactionCall__Outputs {
  _call: ExecuteMetaTransactionCall;

  constructor(call: ExecuteMetaTransactionCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetItemFactoryCall extends ethereum.Call {
  get inputs(): SetItemFactoryCall__Inputs {
    return new SetItemFactoryCall__Inputs(this);
  }

  get outputs(): SetItemFactoryCall__Outputs {
    return new SetItemFactoryCall__Outputs(this);
  }
}

export class SetItemFactoryCall__Inputs {
  _call: SetItemFactoryCall;

  constructor(call: SetItemFactoryCall) {
    this._call = call;
  }

  get itemFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetItemFactoryCall__Outputs {
  _call: SetItemFactoryCall;

  constructor(call: SetItemFactoryCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
