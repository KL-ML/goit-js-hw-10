const BASE_URL = `https://restcountries.com/v2/name/`;

function fetchCountries(name) {
const url = `${BASE_URL}${name}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
          return response.json();
    }
  );
}

export default { fetchCountries };