import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './TagType.module.css';

const TagType = ({ typeId, typeName }) => {
  const classes = useStyle(defaultClasses);
  return (
    <div key={typeId} className={classes.TagType}>
      <span className={classes.tagTypeTitle}>{typeName}</span>
    </div>
  )
}

export default TagType;
