import dayjs from 'dayjs';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// -------- custom components -------- //
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import carouselBreakpoints from 'utils/carouselBreakpoints';
// -------- data -------- //
import { blogList3 } from 'data/blog';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

type DList = { id: number; title: string };

const CustomBlog: FC = () => {
  const t = useTranslations();
  const { locale } = useRouter();

  const devList: DList[] = [
    { id: 1, title: '' },
    { id: 2, title: '' },
    { id: 3, title: '' },
    { id: 4, title: '' },
    { id: 5, title: '' }
  ];

  return (
    <section className="wrapper bg-soft-primary">
      <div className="overflow-hidden">
        <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-xl-7 col-xxl-6 mx-auto text-center">
              <i className="icn-flower text-leaf fs-30 opacity-25"></i>
              <h2 className="display-5 text-center mt-2 mb-10">{t('dev-title')}</h2>
            </div>
          </div>

          <div className="swiper-container nav-bottom nav-color mb-14 swiper-container-3">
            <Carousel grabCursor pagination={false} className="overflow-visible pb-2" breakpoints={carouselBreakpoints}>
              {devList.map((item) => (
                <article key={item.id}>
                  <div className="card shadow-lg">
                    <figure className="card-img-top">
                      <span>
                        <img src={`/img/development/dev-${item.id}.webp`} alt={item.title} />
                        <span className="bg" />
                      </span>
                    </figure>

                    <div className="card-body p-6">
                      <div className="post-header">
                        <h2
                          className="post-title h3 mt-1 mb-3"
                          style={{ height: 92.4, textAlign: locale === 'ar' ? 'right' : 'left' }}
                        >
                          {t(`dev-${item.id}-title`)}
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBlog;
