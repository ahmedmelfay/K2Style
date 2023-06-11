import { GetServerSideProps, NextPage } from 'next';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
// import ContactForm from 'components/common/ContactForm';
// import NextLink from 'components/reuseable/links/NextLink';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
// -------- data -------- //

const Contact: NextPage = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const breadcrumb = [
    { id: 1, title: t('url-home'), url: '/' },
    { id: 2, title: t('url-contact'), url: '#' }
  ];

  return (
    <div className="page-frame bg-pale-primary">
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
        />
      </header>

      <main className="content-wrapper" style={{ overflow: 'hidden' }}>
        {/* ========== page title section ========== */}
        <section
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
        </section>

        <div
          className="wrapper bg-light angled upper-end"
          style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
        >
          <div className="container pb-11 mt-n3">
            {/* ========== contact info section ========== */}
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.330434983962!2d30.901576123750047!3d29.91238792481418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458557f79685c09%3A0x3f49caf31dec3e6a!2sK2%20Steel!5e0!3m2!1sar!2seg!4v1686132154170!5m2!1sar!2seg"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className={`col-lg-6 ${locale === 'ar' && 'rtl'}`}>
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className={`icon text-primary fs-28 ${locale === 'ar' ? 'ms-4' : 'me-4'} mt-n1`}>
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">{t('address')}</h5>
                            <address>
                              <a href="https://goo.gl/maps/tykz6E1pqTfmAKzJ8" target="_blank" className="link-body">
                                {t('company-address')}
                              </a>
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className={`icon text-primary fs-28 ${locale === 'ar' ? 'ms-4' : 'me-4'} mt-n1`}>
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">{t('phone')}</h5>
                            <a href="tel:+201141816000" className="link-body">
                              +2 011 41816 000
                            </a>
                            <br />
                            <a href="tel:+201092839561" className="link-body">
                              +2 010 92839 561
                            </a>
                            <br />
                            <a href="tel:+201000943508" className="link-body">
                              +2 010 00943 508
                            </a>
                            <br />
                          </div>
                        </div>

                        <div className="d-flex flex-row" style={{ marginTop: '16px' }}>
                          <div>
                            <div className={`icon text-primary fs-28 ${locale === 'ar' ? 'ms-4' : 'me-4'} mt-n1`}>
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">{t('email')}</h5>
                            <p className="mb-0">
                              <a href="mailto:keytosteelco@gmail.com" className="link-body">
                                keytosteelco@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            {/* <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div> */}
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </div>
  );
};

export default Contact;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      messages: (await import(`../public/locales/${context.locale}.json`)).default
    }
  };
};
