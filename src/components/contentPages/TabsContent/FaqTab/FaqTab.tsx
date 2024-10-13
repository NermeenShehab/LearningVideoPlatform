import React, { FC } from 'react';
import './FaqTab.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { ReactComponent as ExpandMoreIcon } from "@assets/icons/expandMore.svg"
import { CourseFaq } from 'types/course';


interface FaqTabProps { 
  faqs:CourseFaq[]
}

const FaqTab: FC<FaqTabProps> = ({faqs}) => {
  return (
    <div className='FaqTab' data-testid='FaqTab'>
       <h2 id="faq-heading" className="visually-hidden">Frequently Asked Questions</h2>
    {faqs.map((faq) => (
      <Accordion key={faq.id} className='faq-accordion' role="region" aria-labelledby={`panel${faq.id}-header`} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  aria-hidden="true" />}
          aria-controls={`panel${faq.id}-content`}
          id={`panel${faq.id}-header`}
          className='acc-summary d-flex d-align-center pn-x-4 gap-1'
        >
          <Typography className='title fw-600 fs-2 text-primary'>
            {faq.question}
          </Typography>
          <div className='img' />
        </AccordionSummary>
        <AccordionDetails className='pn-x-4 text-secondary fs-18' id={`panel${faq.id}-content`} aria-hidden={false}>
          <Typography>
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
    </div>
  );
};



export default FaqTab;
