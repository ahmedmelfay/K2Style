import { useRouter } from 'next/router';
import { FC } from 'react';

// ==================================================
type AccordionProps = {
  no: string;
  body: string;
  heading: string;
  expand: boolean;
  type?: 'plain' | 'shadow-lg';
};
// ==================================================

const Accordion: FC<AccordionProps> = (props) => {
  const { no, body, heading, expand, type = '' } = props;
  const { locale } = useRouter();
  return (
    <div className={`card ${type} accordion-item`}>
      <div className={`card-header ${locale === 'ar' && 'accordion-rtl'}`} id={`heading${no}`}>
        <button
          data-bs-toggle="collapse"
          aria-controls={`collapse${no}`}
          data-bs-target={`#collapse${no}`}
          aria-expanded={expand ? 'true' : 'false'}
          className={expand ? 'accordion-button' : 'collapsed'}
          style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}
        >
          {heading}
        </button>
      </div>

      <div
        id={`collapse${no}`}
        aria-labelledby={`heading${no}`}
        data-bs-parent="#accordionExample"
        className={`accordion-collapse collapse ${expand && 'show'}`}
      >
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
