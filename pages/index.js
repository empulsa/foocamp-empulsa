import getPageData from '../utils/api';
import RelevantInfoCards from '../components/RelevantInfoCards';
import ComponentNotFound from '../components/ComponentNotFound';

export const getServerSideProps = async () => {
  const pageData = await getPageData('/');

  return {
    props: {
      data: pageData,
      components: pageData.fields.components,
    },
  };
};

const AvailableComponents = {
  // mainNavbar: Navigation,
  relevantInfoCards: RelevantInfoCards,
};

export default function Recipes({ components }) {
  const getComponentType = (component) => {
    const componentType = component.sys.contentType.sys.id || 'componentNotFound';
    return componentType;
  };

  const getComponentId = (component) => component.sys.id || Math.floor(Math.random() * 100);

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
    <main className="home">
      {components.map((component) => {
        const componentType = getComponentType(component);
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
