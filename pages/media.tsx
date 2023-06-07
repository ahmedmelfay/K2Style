import { GetServerSideProps, NextPage } from 'next';
// import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero1, Hero2, Hero20, Hero28, Hero3, Hero4, Hero5 } from 'components/blocks/hero';
// import { About29 } from 'components/blocks/about';
// import { Facts18 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
// import { Process18 } from 'components/blocks/process';
// import { Contact14 } from 'components/blocks/contact';
// import { Services30 } from 'components/blocks/services';
import { Portfolio13 } from 'components/blocks/portfolio';
// import { Testimonial22 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import useLightBox from 'hooks/useLightBox';

const Media: NextPage = () => {
  useLightBox();

  return (
    <div className="page-frame bg-pale-primary" style={{ marginTop: 0 }}>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          language
          stickyBox
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero3 />

        <section className="wrapper">
          <div className="container pt-12 pt-md-0 pb-16">
            {/* ========== projects section ========== */}
            <Portfolio13 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </div>
  );
};

export default Media;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      messages: (await import(`../public/locales/${context.locale}.json`)).default
    }
  };
};
