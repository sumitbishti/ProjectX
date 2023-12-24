import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  content: String,
  tags: [String],
  comments: [
    {
      user: String,
      content: String,
      votes: Number,
    },
  ],
});

// models.blog check if the model is already present before creating it
export const Blog = models.blog || model('blog', blogSchema);
