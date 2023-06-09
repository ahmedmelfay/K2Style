import { GetServerSideProps, NextPage } from 'next';
// -------- custom hooks -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Hero20 } from 'components/blocks/hero';
import { About21 } from 'components/blocks/about';
import { Facts14 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import { Clients5 } from 'components/blocks/clients';
import { Process13 } from 'components/blocks/process';
import { Services23 } from 'components/blocks/services';
import { Portfolio11 } from 'components/blocks/portfolio';
import PageProgress from 'components/common/PageProgress';

const Demo20: NextPage = () => {
  // lighbox hook called
  useLightBox();
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
          rotations={['Rapid Solutions', 'Innovative Thinking', 'Top-Notch Support']}
          title="We are a digital agency specializing in web design, mobile development and seo optimization."
        />

        {/* ========== what we do section ========== */}
        <Services23 />

        {/* ========== working process section ========== */}
        <Process13 />

        {/* ========== our projects section ========== */}
        <Portfolio11 />

        {/* ========== our clients section ========== */}
        <Clients5 />

        <section className="wrapper bg-light">
          <div className="container pt-15 pt-md-17">
            {/* ========== what make us section ========== */}
            <About21 />

            {/* ========== community section ========== */}
            <Facts14 />
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
