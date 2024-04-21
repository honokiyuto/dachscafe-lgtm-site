export const convertDropboxUrlListToSrcList = (
  dropboxUrlList: string[],
): string[] => {
  return dropboxUrlList.map((url) => convertDropboxUrlToSrc(url));
};

export const convertDropboxUrlToSrc = (url: string): string =>
  url
    .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
    .replace('?dl=0', '');

export const createLGTMMd = (src: string): string => {
  return `![LGTM](${src})`;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const copiedArray = [...array];
  copiedArray.forEach((_, i) => {
    const r = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[r]] = [copiedArray[r], copiedArray[i]];
  });
  return copiedArray;
};
