export const fetchData = async (
  endpoint,
  method = "get",
  body = {},
  query = {},
  optionalHeaders = {},
) => {
  const targetURL = endpoint;
  let config;
  config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (Object.keys(optionalHeaders).length > 0) {
    config.headers = Object.assign({}, optionalHeaders);
  }

  return fetch(targetURL, config).then((response) =>
    response.json().then((data) => {
      return data;
    })
  );
};
