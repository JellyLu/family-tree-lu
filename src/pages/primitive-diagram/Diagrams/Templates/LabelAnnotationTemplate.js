import AbstractTemplate from './AbstractTemplate';

class LabelAnnotationTemplate extends AbstractTemplate {
  render(data) {
    const { title } = data.context;
    return title;
  }
}

export default LabelAnnotationTemplate;
