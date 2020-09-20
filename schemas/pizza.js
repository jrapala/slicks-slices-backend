import { MdLocalPizza as icon } from 'react-icons/md';

// Anything here can be a React component

export default {
  // Internal name
  name: 'pizza',
  // Visible Title
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // lets you choose the important part of a photo
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      // Make sure you don't accidentally price below $10, or above $50
      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: Add custom input component
    },
  ],
};
