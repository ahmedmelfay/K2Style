// import { About21 } from 'components/blocks/about';
// import { Blog5 } from 'components/blocks/blog';
import CustomBlog from 'components/blocks/blog/CustomBlog';
// import { Clients5 } from 'components/blocks/clients';
// import { Facts14 } from 'components/blocks/facts';
import { Footer } from 'components/blocks/footer';
import { Hero20 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
// import { Portfolio11 } from 'components/blocks/portfolio';
// import { Process13 } from 'components/blocks/process';
// import { Services23 } from 'components/blocks/services';
import PageProgress from 'components/common/PageProgress';
import { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

const Development = () => {
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
        <section
          className="wrapper bg-image bg-overlay bg-dark custom-hero3 bgs"
          style={{ marginTop: 0, backgroundColor: '#4c4d5b' }}
        >
          <div className="container pt-7 pt-md-11 pb-6"></div>
        </section>
        <CustomBlog />
      </main>
      {/* ========== footer section ========== */}
      <Footer />
    </div>
  );
};

export default Development;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      messages: (await import(`../public/locales/${context.locale}.json`)).default
    }
  };
};
