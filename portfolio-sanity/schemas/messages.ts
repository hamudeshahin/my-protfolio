import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'messages',
  title: 'Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
    defineField({
      title: 'Approved as Reference',
      name: 'approved',
      type: 'boolean',
      description: "Won't show on the expreience section without approval",
    }),
  ],
})
