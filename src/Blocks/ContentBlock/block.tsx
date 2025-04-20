import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

const ContentBlock: Block = {
  slug: 'Content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'contentHeader',
      type: 'text',
      required: true,
    },
    {
        name: "contentHeaderType",
        type: "select",
        hasMany: false,
        required: true,
        options: [
            {
                label: "h1",
                value: "h1"
            },
            {
                label: "h2",
                value: "h2"
            },
            {
                label: "h3",
                value: "h3"
            },
            {
                label: "h4",
                value: "h4"
            }
        ]
    },
    {
      name: 'contentText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
                ...defaultFeatures,
                FixedToolbarFeature()
            ]
        })
    },
  ],
}

export default ContentBlock;