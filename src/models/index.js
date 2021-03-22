// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "ARTICLE": "ARTICLE",
  "MESSAGE": "MESSAGE",
  "REPLY": "REPLY",
  "SHARE": "SHARE",
  "CLIP": "CLIP"
};

const PostContentType = {
  "MARKDOWN": "MARKDOWN",
  "TEXT": "TEXT",
  "MOVIE": "MOVIE",
  "SOUND": "SOUND",
  "IMAGE": "IMAGE"
};

const { PostCategory, Post } = initSchema(schema);

export {
  PostCategory,
  Post,
  PostType,
  PostContentType
};