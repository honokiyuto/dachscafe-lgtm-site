import styles from './index.module.scss';
import { useEffect, useState } from 'react';

type Props = {
  src: string;
};

const Placeholder = () => {
  return (
    <div className={styles['placeholder']}>
      <div className={styles['animated-background']}></div>
    </div>
  );
};

export const LGTMImage = ({ src }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    navigator.clipboard.writeText(`![LGTM](${src})`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading) {
    return <Placeholder />;
  }

  return (
    <div className={styles['image-container']} onClick={handleClick}>
      <img
        className={(isCopied && styles['copied']) || undefined}
        src={src}
        loading="lazy"
        alt="picture"
      />
      {isCopied && <p>Copied!!</p>}
    </div>
  );
};
