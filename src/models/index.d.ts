import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class BlogPostComment {
  readonly id: string;
  readonly body?: string;
  readonly blogpostID?: string;
  constructor(init: ModelInit<BlogPostComment>);
  static copyOf(source: BlogPostComment, mutator: (draft: MutableModel<BlogPostComment>) => MutableModel<BlogPostComment> | void): BlogPostComment;
}

export declare class BlogPost {
  readonly id: string;
  readonly title?: string;
  readonly body?: string;
  readonly BlogPostComments?: (BlogPostComment | null)[];
  constructor(init: ModelInit<BlogPost>);
  static copyOf(source: BlogPost, mutator: (draft: MutableModel<BlogPost>) => MutableModel<BlogPost> | void): BlogPost;
}