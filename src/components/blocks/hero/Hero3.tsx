import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import Typewriter from 'typewriter-effect';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
import { useTranslations } from 'next-intl';

const Hero3: FC = () => {
  // used for lightbox
  useLightBox();
  const t = useTranslations();
  return (
    // <section className="wrapper bg-dark angled custom-hero3" style={{ marginTop: 0, backgroundImage: 'url("/img/media-hero.jpg")' }}>
    <section className="wrapper bg-dark angled custom-hero3" style={{ marginTop: 0 }}>
      <div className="container pt-7 pt-md-11 pb-8">
        <div className="row gx-0 gy-10 align-items-center">
          <div className="col-lg-5 offset-lg-1 mb-n18" data-cues="slideInDown"></div>
          <h1 className="p-10 text-center text-white">{t('engineering-steel')}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
