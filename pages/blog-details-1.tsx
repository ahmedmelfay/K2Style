import { GetServerSideProps, NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import BlogDetailsTemplate from 'components/common/BlogDetailsTemplate';

const BlogDetailsOne: NextPage = () => {
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

      <main className="content-wrapper" style={{ marginTop: '-1.25rem' }}>
        {/* ========== title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: 'url(/img/photos/bg5.jpg)', borderRadius: '1rem', overflow: 'hidden' }}
        >
          <div className="container pt-18 pb-15 pt-md-20 pb-md-19 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <h1 className="display-1 mb-4 text-white">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== details section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <BlogDetailsTemplate />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </div>
  );
};

export default BlogDetailsOne;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      messages: (await import(`../public/locales/${context.locale}.json`)).default
    }
  };
};
