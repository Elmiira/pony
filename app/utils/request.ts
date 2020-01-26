import axios from 'axios';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {string} method    HTTP METHODS
 * @param  {object} [options] The options such as header, data, responseType;
 *
 * @return {object}           The response data
 */


export default function request({ method, url, params, ...options }) {
  return axios({
    method,
    url,
    params,
    ...options,
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      throw error;
    });
}
