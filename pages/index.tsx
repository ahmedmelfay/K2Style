import { GetServerSideProps, NextPage } from 'next';
// -------- custom hooks -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Hero20 } from 'components/blocks/hero';
import { CustomAbout } from 'components/blocks/about';
import { Facts14 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import { Clients5 } from 'components/blocks/clients';
import { Process13 } from 'components/blocks/process';
import { Services23 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';
import { useTranslations } from 'next-intl';

const Demo20: NextPage = () => {
  const coreValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  // lighbox hook called
  useLightBox();
  const t = useTranslations();
  return (
    <div className="page-frame bg-pale-primary">
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero20
          rotations={[t('brandname')]}
          // title="We are a digital agency specializing in web design, mobile development and seo optimization."
          title={t('our-vision')}
        />

        {/* ========== what we do section ========== */}

        {/* ========== working process section ========== */}
        {/* <Process13 /> */}

        {/* ========== our clients section ========== */}

        <section className="wrapper bg-light">
          <div className="container pt-15 pt-md-17 pb-10">
            <CustomAbout />
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pt-10 pb-10">
            <h2 className="mb-3 text-center">{t('core-values-title')}</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  {coreValues.map((key) => {
                    return (
                      <li key={`core-values-${key}`}>
                        <span>
                          <i className="uil uil-check" />
                        </span>
                        <span>{t(`core-values-${key}`)}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6 col-12">
                <figure className="rounded mx-md-10">
                  <img src="/img/photos/g12.jpg" srcSet="/img/photos/g12@2x.jpg 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <Services23 />
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </div>
  );
};

export default Demo20;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      messages: (await import(`../public/locales/${context.locale}.json`)).default
    }
  };
};
