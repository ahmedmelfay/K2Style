import { FC, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useLightBox from 'hooks/useLightBox';
import Plyr from 'plyr-react';

// ==============================================================
type Props = {
  id: number;
  video: string;
  title: string;
};
// ==============================================================

const ProjectCard4: FC<Props> = ({ video, title }) => {
  // if (isVideo)
  return (
    <>
      <div className="card shadow-lg" style={{ height: 354 }}>
        <figure className="card-img-top hover-scale rounded cursor-dark" title={title}>
          <Plyr
            options={{ loadSprite: true, clickToPlay: true, ratio: '16:9' }}
            source={{ type: 'video', sources: [{ src: video, provider: 'youtube' }] }}
          />
        </figure>

        <div className="card-body p-7">
          <div className="post-header">
            <h3 className="mb-0">{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard4;
