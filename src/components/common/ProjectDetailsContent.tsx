import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

// =======================================================
type ProjectDetailsContentProps = {
  title: string;
  titleClass?: string;
  contentRowClass?: string;
};
// =======================================================

const ProjectDetailsContent: FC<ProjectDetailsContentProps> = ({
  title,
  contentRowClass = 'row gx-0',
  titleClass = 'display-6 mb-4'
}) => {
  return (
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <h2 className={titleClass}>{title}</h2>

        <div className={contentRowClass}>
          <div className="col-md-9 text-justify">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis. Etiam
              porta sem malesuada magna mollis euismod. Aenean lacinia bibendum.
            </p>
            <p>
              Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Aenean eu leo
              quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
