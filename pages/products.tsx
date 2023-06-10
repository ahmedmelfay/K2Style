import Link from 'next/link';
import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
import { useTranslations } from 'next-intl';
// -------- data -------- //

const Products: NextPage = () => {
  const { handleFilterKeyChange, filterKey } = useIsotope();
  const t = useTranslations();
  const projectList = [
    {
      id: 1,
      type: 'engineering-steel',
      category: t('products-engineering-steel'),
      title: '16MnCr 5 (W.Nr1.7139 )',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 2,
      type: 'engineering-steel',
      category: t('products-engineering-steel'),
      title: '34lCrAlNi7 (W.Nr1.8550)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 3,
      type: 'engineering-steel',
      category: t('products-engineering-steel'),
      title: '41Cr4 (W.Nr1.7035)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 4,
      type: 'engineering-steel',
      category: t('products-engineering-steel'),
      title: '42CrMo4 (W.Nr1.7252)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 5,
      type: 'engineering-steel',
      category: t('products-engineering-steel'),
      title: '34CrNiMo6	(W.Nr1.6582)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 6,
      type: 'cold-work-tool-steel',
      category: t('products-engineering-steel'),
      title: 'X210Cr12 D3(W.Nr1.6582)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 7,
      type: 'cold-work-tool-steel',
      category: t('products-engineering-steel'),
      title: 'X210CrW12 D6(W.Nr1.2436)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 8,
      type: 'cold-work-tool-steel',
      category: t('products-engineering-steel'),
      title: 'X155CrVMo12.1 D2(W.Nr1.2479)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 9,
      type: 'cold-work-tool-steel',
      category: t('products-engineering-steel'),
      title: '60WCrV7	D6(W.Nr1.2436)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 10,
      type: 'cold-work-tool-steel',
      category: t('products-engineering-steel'),
      title: 'X45NiCrMo4 6F7(W.Nr1.2767)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 11,
      type: 'hot-work-tool-steel',
      category: t('products-hot-work-tool-steel'),
      title: 'X40CrMoV5.1	H13(W.Nr1.2344)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 12,
      type: 'hot-work-tool-steel',
      category: t('products-hot-work-tool-steel'),
      title: 'X32CrMoV3.3	H10(W.Nr1.2365)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    },
    {
      id: 13,
      type: 'steel-cutting-plastic-stamps',
      category: t('products-steel-cutting-plastic-stamps'),
      title: '40CrMmMo58 P20+S (W.Nr1.2312)',
      image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
    }
  ];

  const filterItems = [
    { id: 1, title: t('products-all'), value: '*' },
    { id: 2, title: t('products-engineering-steel'), value: '.engineering-steel' },
    { id: 3, title: t('products-cold-work-tool-steel'), value: '.cold-work-tool-steel' },
    { id: 4, title: t('products-hot-work-tool-steel'), value: '.hot-work-tool-steel' },
    { id: 5, title: t('products-steel-cutting-plastic-stamps'), value: '.steel-cutting-plastic-stamps' }
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

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-dark" style={{ marginTop: 0, backgroundColor: '#4c4d5b' }}>
          <div className="container pt-7 pt-md-11 pb-6"></div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <h1 className="display-1 mb-3">{t('products-page-title')}</h1>
              </div>
            </div>
          </div>
          <div className="container pb-14 pb-md-16 pt-4">
            <div className="grid grid-view projects-masonry">
              {/* ========== filter section ========== */}
              <div className="isotope-filter filter mb-10">
                <p>{t('products-filter')}</p>
                <ul>
                  {filterItems.map(({ id, title, value }) => (
                    <li key={id}>
                      <a
                        onClick={handleFilterKeyChange(value)}
                        className={`filter-item ${value === filterKey ? 'active' : ''}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ========== projects section ========== */}
              <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                {projectList.map(({ id, image, title, category, type }) => (
                  <div key={id} className={`project item col-md-6 col-xl-4 ${type}`}>
                    <figure className="lift rounded mb-6">
                      <Image
                        alt={title}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </figure>

                    <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className="post-category text-line mb-3 text-purple">{category}</div>
                        <h2 className="post-title h3">{title}</h2>
                      </div>
                    </div>
                  </div>
                ))}
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

export default Products;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      messages: (await import(`../public/locales/${context.locale}.json`)).default
    }
  };
};
