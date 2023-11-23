async function api(method, url, data, key) {
  // eslint-disable-next-line no-useless-catch
  try {
    let result = await fetch(`${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: key ? key : "",
      },
      body: JSON.stringify(data),
    });
    return result;
  } catch (err) {
    throw err;
  }
}

export default api;
