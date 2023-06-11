import { FC, Fragment } from 'react';
import { Tiles11 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList2 } from 'data/about';
import { useTranslations } from 'next-intl';
import AccordionList from 'components/common/AccordionList';
import Accordion from 'components/reuseable/accordion';
import { useRouter } from 'next/router';

const CustomAbout: FC = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const accordions = [
    {
      no: 'One',
      expand: true,
      heading: t('our-mission-title'),
      body: t('our-mission')
    },
    {
      no: 'Two',
      expand: false,
      heading: t('our-vision-title'),
      body: t('our-vision')
    }
  ];

  return (
    <Fragment>
      <div className={`row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12 `}>
        <div className="col-lg-6">
          <Tiles11 />
        </div>

        <div className={`col-lg-6 ${locale === 'ar' && 'rtl'}`}>
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">{t('who-are-we')}</h2>
          <h3 className="display-4 mb-4">{t('brandname')}</h3>
          <p className="mb-6">{t('who-are-we-desc')}</p>

          <div className="accordion accordion-wrapper" id="accordionExample">
            {accordions.map((item) => (
              <Accordion type="plain" key={item.no} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomAbout;
