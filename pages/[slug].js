import { getPageData, getPages } from '../utils/api';
import ImageInfoItemsSection from '../components/ImageInfoItemsSection';
import ComponentNotFound from '../components/ComponentNotFound';
import SectionDivider from '../components/SectionDivider';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import ContentWithLogosSection from '../components/ContentWithLogosSection';

export const getStaticPaths = async () => {
  const paths = await getPages();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pageData = await getPageData(params.slug);
  return {
    props: {
      components: pageData.fields.components,
      slug: params.slug,
    },
  };
};

const AvailableComponents = {
  // mainNavbar: Navigation,
  heroSection: HeroSection,
  contentWithLogosSection: ContentWithLogosSection,
  imageInfoItemsSection: ImageInfoItemsSection,
  footerSection: FooterSection,
};

export default function Recipes({ components, slug }) {
  const getComponentType = (component) => {
    const componentType = component.sys.contentType.sys.id || 'componentNotFound';
    return componentType;
  };

  const getComponentId = (component) => (component && component.sys.id)
    || Math.floor(Math.random() * 1000);

  const getComponentTemplate = (component, componentType) => {
    const TargetComponent = AvailableComponents[componentType];
    return TargetComponent ? <TargetComponent {...component} />
      : <ComponentNotFound />;
  };

  const getSectionStyles = ({ fields }) => {
    const styles = {};
    if (Object.prototype.hasOwnProperty.call(fields, 'sectionBackgroundColor')) {
      styles['--sectionBackgroundColor'] = fields.sectionBackgroundColor;
    }
    if (Object.prototype.hasOwnProperty.call(fields, 'textColor')) {
      styles['--textColor'] = fields.textColor;
    }
    return styles;
  };

  return (
    <main className={slug}>
      {components.map((component) => {
        const componentType = getComponentType(component);

        if (componentType === 'sectionDivider') {
          return <SectionDivider {...component} key={getComponentId()} />;
        }

        return (
          <section
            className={componentType}
            key={getComponentId(component)}
            style={getSectionStyles(component)}
          >
            <div className="section-content">
              {getComponentTemplate(component, componentType)}
            </div>
          </section>
        );
      })}
    </main>
  );
}
