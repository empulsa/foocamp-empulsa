import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getPages() {
  const response = await client.getEntries({ content_type: 'page' });
  const pages = response && response.items;
  const pagesOtherThanHome = pages.filter((page) => page.fields.slug !== 'home');
  return pagesOtherThanHome.map((page) => ({
    params: {
      slug: page.fields.slug,
    },
  }));
}

export async function getPageData(pageSlug) {
  const response = await client.getEntries({ content_type: 'page' });
  const targetPage = response.items.find((page) => page.fields.slug === pageSlug);
  const pageData = await client.getEntry(targetPage.sys.id, { include: 3 });
  return pageData;
}
