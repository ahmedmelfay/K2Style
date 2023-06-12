import { FC } from 'react';

const Tiles11: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded">
          <img src="/img/products/p-1.jpg" alt="Tiles 1" />
        </figure>
      </div>

      <div className="col-md-6 align-self-end">
        <figure className="rounded">
          <img src="/img/products/p-12.jpg" alt="Tiles 2" />
        </figure>
      </div>

      <div className="col-12">
        <figure className="rounded mx-md-5">
          <img src="/img/products/p-23.jpg" alt="Tiles 3" />
        </figure>
      </div>
    </div>
  );
};

export default Tiles11;
