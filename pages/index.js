import getPageData from '../utils/api';
import ImageInfoItems from '../components/ImageInfoItems/ImageInfoItems';
import Navigation from '../components/Navigation/Navigation';

export const getServerSideProps = async () => {
  const pageData = await getPageData('juli');

  return {
    props: {
      data: pageData,
      components: pageData.fields.components,
    },
  };
};

const AvailableComponents = {
  mainNavbar: Navigation,
  imageInfoItemsSection: ImageInfoItems,
};

const returnComponent = (component) => {
  const componentType = component.sys.contentType.sys.id;
  const { id } = component.sys;
  const TargetComponent = AvailableComponents[componentType];
  return TargetComponent ? <TargetComponent {...component} key={id} />
    : 'No Component';
};

export default function Recipes({ components }) {
  return (
    <div className="home">
      {components.map((component) => (
        returnComponent(component)
      ))}
    </div>
  );
}
