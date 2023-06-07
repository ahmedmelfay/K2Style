import { FC } from 'react';
import { ProjectCard4 } from 'components/reuseable/project-cards';
// -------- hook -------- //
import useTooltip from 'hooks/useTooltip';
// -------- data -------- //
import { mediaPhotos, ytVids } from 'data/demo-28';
// import ProjectPhoto from 'components/reuseable/project-cards/ProjectPhoto';
// import Carousel from 'components/reuseable/Carousel';
// import carouselBreakpoints from 'utils/carouselBreakpoints';
import useLightBox from 'hooks/useLightBox';
import { useTranslations } from 'next-intl';

const Portfolio13: FC = () => {
  useTooltip();
  useLightBox();

  const t = useTranslations()

  return (
    <div className="grid grid-view projects-masonry pt-8">
      <div className="row g-8 g-lg-10">
        <h2 className="p-1 text-center text-dark">{t('videos')}</h2>

        {ytVids.map((item) => (
          <div key={item.id} className="project col-md-6 col-xl-4">
            <ProjectCard4 {...item} />
          </div>
        ))}

        {/* <h2 className="p-1 text-center text-dark">Photos</h2> */}

        {/* {mediaPhotos.map((item) => (
          <div key={item.id} className="project col-md-6 col-xl-4">
            <ProjectPhoto {...item} />
          </div>
        ))} */}
        {/* <Carousel breakpoints={carouselBreakpoints}>
          <figure className="overlay overlay-1 hover-scale mb-0 rounded cursor-dark">
            <a href="/img/photos/p1.jpg" data-glightbox data-gallery="project-1">
              <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
            </a>
          </figure>
          <figure className="overlay overlay-1 hover-scale mb-0 rounded cursor-dark">
            <a href="/img/photos/p1.jpg" data-glightbox data-gallery="project-1">
              <img src="/img/photos/p1.jpg" srcSet="/img/photos/p1@2x.jpg 2x" alt="" />
            </a>
          </figure>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Portfolio13;
