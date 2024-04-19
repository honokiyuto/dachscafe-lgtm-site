import styles from './index.module.scss';
import { useState } from 'react';

type Props = {
  src: string;
};

export const Image = ({ src }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    navigator.clipboard.writeText(`![LGTM](${src})`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <button className={styles['image-container']} onClick={handleClick}>
      <img src={src} loading="lazy" alt="picture" />
      {isCopied && <p>Copied!!</p>}
    </button>
  );
};
