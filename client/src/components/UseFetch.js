import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          console.log('response', response)
          return response.json()
        })
        .then(data => {
          if (!data) {
            setLoading(false);
          console.log('data doesnt resolved!')
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          console.log('usefetch error post')
          reject(error);
        });
        
    });
  }

  return { get, post, loading };
};
