import React, { CSSProperties, useEffect, useRef, useState } from 'react';

import { LoadingImage } from './no-image';

const Base = (props: React.ComponentPropsWithRef<'img'> & { iconSize?: number }) => {
  const { src, ...rest } = props;
  const image = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          const src = image.dataset.src;
          if (src) {
            image.src = src;
            image.dataset.src = '';
          }
          self.unobserve(entry.target);
        }
      });
    });

    if (image.current) {
      observer.observe(image.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const hiddenImageStyle: CSSProperties = {
    visibility: 'hidden',
    position: 'absolute',
  };

  return (
    <>
      <img
        ref={image}
        onError={() => {
          setLoaded(true);
        }}
        onLoad={() => {
          setLoaded(true);
        }}
        onLoadedData={() => {
          setLoaded(true);
        }}
        data-src={src}
        alt="person"
        style={!loaded ? hiddenImageStyle : {}}
        {...rest}
      />
      {!loaded && <LoadingImage iconSize={props.iconSize} />}
    </>
  );
};

export const LazyImage = (props: React.ComponentPropsWithRef<'img'> & { iconSize?: number }) => <Base {...props} />;
