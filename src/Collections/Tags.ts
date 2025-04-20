import type { CollectionConfig } from 'payload'

const Tags: CollectionConfig = {
  slug: 'tags',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
};

export default Tags;