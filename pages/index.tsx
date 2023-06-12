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
import { Team6 } from 'components/blocks/team';
import { teams } from 'data/demo-11';
import { TeamCard3 } from 'components/reuseable/team-cards';
import { useRouter } from 'next/router';

const Demo20: NextPage = () => {
  const coreValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const ourTeam = [
    {
      id: 1,
      name: 'Eng.Mohamed Elgabry',
      designation: 'CEO',
      image: { '1x': '/img/team/team-1.jpg', '2x': '/img/avatars/t1@2x.jpg 2x' }
    },
    {
      id: 2,
      name: 'Mr.Aymen Gareep',
      designation: 'COO',
      image: { '1x': '/img/team/team-2.jpg', '2x': '/img/avatars/t2@2x.jpg 2x' }
    },
    {
      id: 3,
      name: 'Ms.Safiya Kadery',
      designation: 'CFO',
      image: { '1x': '/img/team/team-3.jpg', '2x': '/img/avatars/t3@2x.jpg 2x' }
    }
  ];

  // lighbox hook called
  useLightBox();
  const t = useTranslations();
  const { locale } = useRouter();
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
          title={t('our-vision')}
        />

        <section className="wrapper bg-light">
          <div className="container pt-15 pt-md-17 pb-10">
            <CustomAbout />
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pt-10 pb-10">
            <h2 className="mb-10 text-center">{t('core-values-title')}</h2>
            <div className={`row align-items-center mb-10 `}>
              <div className={`col-12 col-lg-6 ${locale === 'ar' && 'rtl'}`}>
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  {coreValues.map((key) => {
                    return (
                      <li key={`core-values-${key}`}>
                        <span>
                          <i
                            className="uil uil-check"
                            style={locale === 'ar' ? { right: -32, left: 'unset' } : { left: 0 }}
                          />
                        </span>
                        <span>{t(`core-values-${key}`)}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6 col-12">
                <figure className="rounded mx-md-10">
                  <img src="/img/core-values.jpg" alt="Core Values" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <Services23 />

        <section className="wrapper bg-light">
          <div className="container pt-10 pb-10">
            <h2 className="mb-10 text-center">{t('our-team')}</h2>

            <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-10">
              {ourTeam.map((item) => (
                <div className="col-md-4 col-sm-12" key={item.id}>
                  <TeamCard3 {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
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
