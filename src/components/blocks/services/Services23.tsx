import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { useTranslations } from 'next-intl';
import Accordion from 'components/reuseable/accordion';
import { useRouter } from 'next/router';

const Services23: FC = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const accordions = [
    { no: 'One', expand: true, heading: t('strategy-1-title'), body: t('strategy-1-desc') },
    { no: 'Two', expand: false, heading: t('strategy-2-title'), body: t('strategy-2-desc') },
    { no: 'Three', expand: false, heading: t('strategy-3-title'), body: t('strategy-3-desc') },
    { no: 'Four', expand: false, heading: t('strategy-4-title'), body: t('strategy-4-desc') }
  ];
  return (
    <section className="wrapper bg-light">
      <div className="container py-12">
        <div className="row text-center mb-10">
          <div className="col-md-10 col-lg-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">{t('strategic-plan-title')}</h2>
            <h3 className="display-3 px-xl-10 mb-0">
              {/* The service we offer is specifically designed to meet your needs. */}
              {t('strategic-plan-subtitle')}
            </h3>
          </div>
        </div>

        <div className="row gx-lg-0 gy-10 align-items-center">
          <div className="col-lg-6 col-12">
            <figure className="rounded mx-md-10">
              <img src="/img/photos/g12.jpg" srcSet="/img/photos/g12@2x.jpg 2x" alt="" />
            </figure>
          </div>
          <div
            className={`accordion accordion-wrapper col-12 col-lg-6 ${locale === 'ar' && 'rtl'}`}
            id="accordionExample"
          >
            {accordions.map((item) => (
              <Accordion type="plain" key={item.no} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services23;
