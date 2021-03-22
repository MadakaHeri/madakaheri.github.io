import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostType {
  ARTICLE = "ARTICLE",
  MESSAGE = "MESSAGE",
  REPLY = "REPLY",
  SHARE = "SHARE",
  CLIP = "CLIP"
}

export enum PostContentType {
  MARKDOWN = "MARKDOWN",
  TEXT = "TEXT",
  MOVIE = "MOVIE",
  SOUND = "SOUND",
  IMAGE = "IMAGE"
}



export declare class PostCategory {
  readonly id: string;
  readonly name: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostCategory>);
  static copyOf(source: PostCategory, mutator: (draft: MutableModel<PostCategory>) => MutableModel<PostCategory> | void): PostCategory;
}

export declare class Post {
  readonly id: string;
  readonly PostType: PostType | keyof typeof PostType;
  readonly PostContentType: PostContentType | keyof typeof PostContentType;
  readonly postCategoryId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  readonly data?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}