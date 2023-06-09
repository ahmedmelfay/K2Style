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
    <section className="wrapper bg-image bg-overlay bg-dark custom-hero3" style={{ backgroundImage: 'url(/img/media-hero.jpg)',marginTop: 0 }}>
      <div className="container pt-7 pt-md-11 pb-8">
        <div className="row gx-0 gy-10 align-items-center">
          <div className="col-lg-5 offset-lg-1 mb-n18" data-cues="slideInDown"></div>
          <h1 className="p-10 text-center text-white position-relative zindex-1">{t('engineering-steel')}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero3;

{/* <section
className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
style={{ backgroundImage: 'url(/img/photos/bg3.jpg)', marginTop: 0, overflow: 'hidden' }}
>
<div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
  <div className="row">
    <div className="col-lg-8 mx-auto">
      <h1 className="display-1 mb-3 text-white">{t('Get-in-Touch')}</h1>
      <Breadcrumb className="text-white" data={breadcrumb} />
    </div>
  </div>
</div>
</section> */}