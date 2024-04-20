export const convertDropboxUrlListToSrcList = (
  dropboxUrlList: string[],
): string[] => {
  return dropboxUrlList.map((url) => convertDropboxUrlToSrc(url));
};

export const convertDropboxUrlToSrc = (url: string): string =>
  url
    .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
    .replace('?dl=0', '');
