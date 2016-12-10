'use strict';

export function status(response) {  
  if (response.status >= 200 && response.status < 300)
    return Promise.resolve(response);
  else
    return Promise.reject(new Error(response.statusText));
}

export function json(response) {
  return response.json();
}

export function error(err) {
  console.log(err.message, err.stack);
  return Promise.reject(err);
}