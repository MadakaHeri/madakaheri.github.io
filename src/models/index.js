// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlogPostComment, BlogPost } = initSchema(schema);

export {
  BlogPostComment,
  BlogPost
};