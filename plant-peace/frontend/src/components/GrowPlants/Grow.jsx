import React, { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import './Grow.scss';


export default function Grow() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [growSteps, setGrowSteps] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);
  const { get } = useApi();

  const handleSuccess = (response) => {
    const { title, description, GrowSteps, Gallery } =
        response?.data?.data?.attributes;

      setTitle(title);
      setDescription(description);
      setGrowSteps(GrowSteps);
      setGallery(Gallery);
  };

  const getGrowData = async () => {
    await get('grow', {
      params: {
        'populate[GrowSteps][populate][image]': true,
        'populate[Gallery][populate][image]': true,
        'populate[Gallery][populate][button]': true,
      },
      onSuccess: (response) => handleSuccess(response),
      onFailure: (errorMesage) => setError(errorMesage),
    });
  };

  useEffect(() => {
    getGrowData();
  }, []);


  return (
    <main className="grow">
      <div className="grow__header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <section className="grow__adviceCards">
        {growSteps.map((step) => (
          <div key={step.id}>
            <ul>
              <li>
                <img src={`http://localhost:1337${step?.image?.data?.attributes?.url}`} />
              </li>
              <li>{step.title}</li>
            </ul>
            <p>{step.description}</p>
          </div>
        ))}
      </section>

      <section className="grow__ourWeb">
        {gallery.map((item, index) => {
          if (item.__component === 'grow.gallery') {
            return (
              <img key={index} src={`http://localhost:1337${item.image.data.attributes.url}`} alt={item.image.data.attributes.name} />
            );
          }
          if (item.__component === 'grow.gallery-detail') {
            return (
              <div key={index}>
                <ul>
                  <li>
                    <img src={`http://localhost:1337${item.image.data.attributes.url}`} alt={item.image.data.attributes.name} />
                  </li>
                  <li>
                    {item.description}
                  </li>
                </ul>
                <button>{item?.button?.btnLabel}</button>
              </div>
            );
          }
          return null;
        })}
      </section>
    </main>
  );
}

