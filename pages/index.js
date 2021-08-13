import getPageData from '../utils/api';
import RelevantInfoCards from '../components/RelevantInfoCards';

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
  relevantInfoCards: RelevantInfoCards,
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
