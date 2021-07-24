import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostType {
  ARTICLE = "ARTICLE",
  MESSAGE = "MESSAGE",
  REPLY = "REPLY",
  SHARE = "SHARE",
  GOOD = "GOOD",
  BAD = "BAD",
  CLIP = "CLIP"
}

export enum PostContentType {
  MARKDOWN = "MARKDOWN",
  TEXT = "TEXT",
  MOVIE = "MOVIE",
  SOUND = "SOUND",
  IMAGE = "IMAGE"
}



export declare class Hotel {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Hotel>);
  static copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel>) => MutableModel<Hotel> | void): Hotel;
}

export declare class Plan {
  readonly id: string;
  readonly hotelId: string;
  readonly name: string;
  constructor(init: ModelInit<Plan>);
  static copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}

export declare class Room {
  readonly id: string;
  readonly hotelId: string;
  readonly name: string;
  constructor(init: ModelInit<Room>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

export declare class Price {
  readonly id: string;
  readonly planId: string;
  readonly roomId: string;
  readonly price: number;
  readonly date: string;
  constructor(init: ModelInit<Price>);
  static copyOf(source: Price, mutator: (draft: MutableModel<Price>) => MutableModel<Price> | void): Price;
}

export declare class Post {
  readonly id: string;
  readonly chainPostId?: string;
  readonly PostType: PostType | keyof typeof PostType;
  readonly PostContentType: PostContentType | keyof typeof PostContentType;
  readonly postChannelId: string;
  readonly title?: string;
  readonly desc?: string;
  readonly data?: string;
  readonly twitter?: string;
  readonly github?: string;
  readonly channel?: PostChannel;
  readonly tags?: (PostPostTag | null)[];
  readonly createdAt: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class PostChannel {
  readonly id: string;
  readonly twitter?: string;
  constructor(init: ModelInit<PostChannel>);
  static copyOf(source: PostChannel, mutator: (draft: MutableModel<PostChannel>) => MutableModel<PostChannel> | void): PostChannel;
}

export declare class PostPostTag {
  readonly id: string;
  readonly post: Post;
  readonly postTag: PostTag;
  constructor(init: ModelInit<PostPostTag>);
  static copyOf(source: PostPostTag, mutator: (draft: MutableModel<PostPostTag>) => MutableModel<PostPostTag> | void): PostPostTag;
}

export declare class PostTag {
  readonly id: string;
  readonly twitter?: string;
  readonly posts?: (PostPostTag | null)[];
  constructor(init: ModelInit<PostTag>);
  static copyOf(source: PostTag, mutator: (draft: MutableModel<PostTag>) => MutableModel<PostTag> | void): PostTag;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly profile?: string;
  readonly avator?: string;
  readonly twitter?: string;
  readonly github?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}