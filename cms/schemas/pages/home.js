export default {
  title: 'Home Page',
  name: 'home',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'seoSettings',
      fieldset: 'seo',
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'homeHeroModule',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' };
    },
  },
};