export const convertDropboxUrlListToSrcList = (
  dropboxUrlList: string[],
): string[] => {
  return dropboxUrlList.map((url) =>
    url
      .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
      .replace('?dl=0', ''),
  );
};
