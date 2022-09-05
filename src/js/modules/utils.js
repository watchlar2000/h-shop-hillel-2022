export const parseRequestUrl = () => {
  const url = document.location.hash.toLocaleLowerCase();
  const request = url.split('/');
  // console.log(request);
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};
