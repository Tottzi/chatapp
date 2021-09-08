import { ObjectType, Field, InterfaceType, Float } from "type-graphql";

@InterfaceType()
abstract class IChat {
  @Field((type) => Float)
  id: number;

  @Field()
  message: string;

  @Field()
  name: string;
  constructor() {
    this.id = 0;
    this.message = "";
    this.name = "";
  }
}

@ObjectType({ implements: IChat })
export class Chat implements IChat {
  @Field()
  id: number;

  @Field()
  message: string;

  @Field()
  name: string;
  constructor() {
    this.id = 0;
    this.message = "";
    this.name = "";
  }
}
