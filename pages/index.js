import Index from './[slug]';
import { getPageData } from '../utils/api';

export const getStaticProps = async () => {
  const slug = 'home';
  const pageData = await getPageData(slug);
  return {
    props: {
      components: pageData.fields.components,
      slug,
    },
  };
};

export default Index;
