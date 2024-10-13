import React, { FC } from 'react';
import './TemplateName.scss';


interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <div className='TemplateName' data-testid='TemplateName'>
      TemplateName Component
    </div>
  );
};



export default TemplateName;
