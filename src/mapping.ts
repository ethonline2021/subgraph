import { DataSourceContext } from "@graphprotocol/graph-ts"
import { UserDeployed } from "../generated/Main/Main"
import { User, Item } from "../generated/schema"
import { User as UserTemplate, Item as ItemTemplate } from "../generated/templates"
import { ItemDeployed, UserUpdated } from "../generated/templates/User/User"
import { ItemUpdated } from "../generated/templates/Item/Item"

export function handleUserDeployed(event: UserDeployed): void {
  let entity = User.load(event.params.contractAddress.toHex());
  if (entity == null) {
    entity = new User(event.params.contractAddress.toHex());
  }
  
  entity.address = event.params.contractAddress;
  entity.owner = event.params.owner;
  entity.name = event.params.name;
  entity.description = event.params.description;
  entity.save();

  let context = new DataSourceContext();
  context.setBytes('contract', event.params.contractAddress);
  UserTemplate.createWithContext(event.params.contractAddress, context);
}

export function handleUserUpdated(event: UserUpdated): void {
  let entity = User.load(event.params.contractAddress.toHex());
  if (entity == null) {
    entity = new User(event.params.contractAddress.toHex());
  }

  entity.name = event.params.name;
  entity.description = event.params.description;
  entity.save();
}

export function handleItemDeployed(event: ItemDeployed): void {
  let entity = Item.load(event.params.itemAddress.toHex());
  if (entity == null) {
    entity = new Item(event.params.itemAddress.toHex());
  }

  entity.address = event.params.itemAddress;
  entity.owner = event.params.owner;
  entity.title = event.params.title;
  entity.description = event.params.description;
  entity.price = event.params.price;
  entity.token = event.params.token;
  entity.amount = event.params.amount;
  entity.endPaymentDate = event.params.endPaymentDate;
  entity.uri = event.params.uri;
  entity.save();

  let context = new DataSourceContext();
  context.setBytes('contract', event.params.itemAddress);
  ItemTemplate.createWithContext(event.params.itemAddress, context);
}

export function handleItemUpdated(event: ItemUpdated): void {
  let entity = Item.load(event.params.item.toHex());
  if (entity == null) {
    entity = new Item(event.params.item.toHex());
  }

  entity.address = event.params.item;
  entity.title = event.params.title;
  entity.description = event.params.description;
  entity.price = event.params.price;
  entity.token = event.params.token;
  entity.endPaymentDate = event.params.endPaymentDate;
  entity.uri = event.params.uri;
  entity.save();
}