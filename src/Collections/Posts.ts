import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload'

const Posts: CollectionConfig = {
    slug: 'posts',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
            required: true,
        },
        // {
        //     name: 'coverImage',
        //     type: 'upload',
        //     relationTo: 'media',
        // },
        {
            name: 'content',
            type: 'richText',
            required: true,
            editor: lexicalEditor({
                features: ({ defaultFeatures, rootFeatures }) => [
                    ...defaultFeatures,
                    FixedToolbarFeature()
                ]
            })
        },
        {
            name: 'isDraft',
            type: 'checkbox',
            required: true,
            defaultValue: true
        }
    ],
};

export default Posts;