// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "ARTICLE": "ARTICLE",
  "MESSAGE": "MESSAGE",
  "REPLY": "REPLY",
  "SHARE": "SHARE",
  "GOOD": "GOOD",
  "BAD": "BAD",
  "CLIP": "CLIP"
};

const PostContentType = {
  "MARKDOWN": "MARKDOWN",
  "TEXT": "TEXT",
  "MOVIE": "MOVIE",
  "SOUND": "SOUND",
  "IMAGE": "IMAGE"
};

const { Hotel, Plan, Room, Price, Post, PostChannel, PostPostTag, PostTag, User } = initSchema(schema);

export {
  Hotel,
  Plan,
  Room,
  Price,
  Post,
  PostChannel,
  PostPostTag,
  PostTag,
  User,
  PostType,
  PostContentType
};