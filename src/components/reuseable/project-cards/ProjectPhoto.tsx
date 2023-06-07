import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useLightBox from 'hooks/useLightBox';
// import Plyr from 'plyr-react';

// ==============================================================
type Props = {
  id: number;
  src: string;
  title: string;
};
// ==============================================================

const ProjectPhoto: FC<Props> = ({ src, title }) => {
  useLightBox();
  return (
    <>
      <div className="card shadow-lg">
        <figure className="card-img-top" title={title}>
          <Link href="#">
            <Image src={src} width={1300} height={1132} alt="" />
          </Link>
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

export default ProjectPhoto;
