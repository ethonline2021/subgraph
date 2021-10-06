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

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }

  get description(): string {
    return this._event.parameters[3].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get endPaymentDate(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get uri(): string {
    return this._event.parameters[8].value.toString();
  }
}

export class UserCreated extends ethereum.Event {
  get params(): UserCreated__Params {
    return new UserCreated__Params(this);
  }
}

export class UserCreated__Params {
  _event: UserCreated;

  constructor(event: UserCreated) {
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

export class UserUpdated extends ethereum.Event {
  get params(): UserUpdated__Params {
    return new UserUpdated__Params(this);
  }
}

export class UserUpdated__Params {
  _event: UserUpdated;

  constructor(event: UserUpdated) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class User__getDetailsResult {
  value0: Address;
  value1: string;
  value2: string;

  constructor(value0: Address, value1: string, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }
}

export class User extends ethereum.SmartContract {
  static bind(address: Address): User {
    return new User("User", address);
  }

  getDetails(): User__getDetailsResult {
    let result = super.call(
      "getDetails",
      "getDetails():(address,string,string)",
      []
    );

    return new User__getDetailsResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toString()
    );
  }

  try_getDetails(): ethereum.CallResult<User__getDetailsResult> {
    let result = super.tryCall(
      "getDetails",
      "getDetails():(address,string,string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new User__getDetailsResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toString()
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

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get description(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
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

export class UpdateCall extends ethereum.Call {
  get inputs(): UpdateCall__Inputs {
    return new UpdateCall__Inputs(this);
  }

  get outputs(): UpdateCall__Outputs {
    return new UpdateCall__Outputs(this);
  }
}

export class UpdateCall__Inputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateCall__Outputs {
  _call: UpdateCall;

  constructor(call: UpdateCall) {
    this._call = call;
  }
}
