const SectionDivider = ({ fields }) => {
  const { svg: svgCode, curveFlatOnTop } = fields.curve.fields;
  const flatClass = curveFlatOnTop ? 'top' : 'bottom';
  const [svgCSSVar, backgroundCSSVar] = ['--svg-fill-color', '--background-color'];
  const styles = {};

  if (fields.topColor) {
    const key = curveFlatOnTop ? svgCSSVar : backgroundCSSVar;
    styles[key] = fields.topColor;
  }

  if (fields.bottomColor) {
    const key = curveFlatOnTop ? backgroundCSSVar : svgCSSVar;
    styles[key] = fields.bottomColor;
  }

  return (
    <div
      className={`sectionDivider sectionDivider--flat-${flatClass}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svgCode }}
      style={styles}
    />
  );
};

export default SectionDivider;
