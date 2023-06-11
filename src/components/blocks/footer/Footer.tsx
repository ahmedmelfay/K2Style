import { FC } from 'react';
import SocialLinks from 'components/reuseable/SocialLinks';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import footerNav from 'data/footer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer: FC = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  return (
    <>
      <footer className={`bg-dark text-inverse ${locale === 'ar' && 'rtl'}`}>
        <div className="container py-13 py-md-15">
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <figure className="mb-4">
                  <Image
                    alt="logo"
                    width={100}
                    height={26}
                    src="/img/llooggoo.webp"
                    style={{ width: 100, height: 'auto' }}
                  />
                </figure>
                <p className="mb-4">
                  © {new Date().getFullYear()} {t('brandname')} <br className="d-none d-lg-block" />
                  {t('rights')}
                </p>

                <SocialLinks className="nav social social-white" />
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">{t('Get-in-Touch')}</h4>
                {/* <address className="pe-xl-15 pe-xxl-17">
                  <a href="https://goo.gl/maps/XjThFBvWeMfbNonT7" target="_blank">
                    {t('company-address')}
                  </a>
                </address> */}
                <a href="mailto:keytosteelco@gmail.com">keytosteelco@gmail.com</a>
                <br />
                <a href="tel:+201141816000">+2 011 41816 000</a>
                <br />
                <a href="tel:+201092839561">+2 010 92839 561</a>
                <br />
                <a href="tel:+201000943508">+2 010 00943 508</a>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">{t('learn-more')}</h4>
                <ul
                  className="list-unstyled text-reset mb-0"
                  style={locale === 'ar' ? { padding: '0 0 0 40px' } : { padding: '0 40px 0 0' }}
                >
                  {footerNav.map(({ title, url }) => (
                    <li key={title}>
                      <NextLink title={t(title)} href={url} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">{t('working-hours')}</h4>
                <p className="mb-5">{t('schedule')}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-100 d-flex justify-content-center align-items-center">
        Developed by TaliaMedia ©{new Date().getFullYear()}
      </div>
    </>
  );
};

export default Footer;
