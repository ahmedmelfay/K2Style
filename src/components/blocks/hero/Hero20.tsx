import { FC } from 'react';
import useReplaceMe from 'hooks/useReplaceMe';

type Props = { videoSrc?: string; rotations?: string[]; title?: string };

const Hero20: FC<Props> = ({ videoSrc, rotations, title }) => {
  // enable the text rotator animation
  useReplaceMe();

  return (
    <section className="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-80">
      <video
        loop
        muted
        autoPlay
        playsInline
        // __idm_id__="1187841"
        id="1187841"
        src={videoSrc ? videoSrc : '/media/home-video.mp4'}
      />

      <div className="video-content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-xl-6 text-center text-white mx-auto">
              {rotations && rotations.length !== 1 ? (
                <h1 className="display-1 fs-54 text-white mb-5">
                  <span className="rotator-zoom">{rotations.toString()}</span>
                </h1>
              ) : null}

              {rotations?.length === 1 ? (
                <h1 className="display-1 fs-54 text-white mb-5">
                  <span>{rotations.toString()}</span>
                </h1>
              ) : null}

              {title ? <p className="lead fs-24 mb-0 mx-xxl-8">{title}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero20;
