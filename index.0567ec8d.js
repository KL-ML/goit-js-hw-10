const n=document.querySelector("#search-box"),t=(document.querySelector(".country-list"),document.querySelector(".country-info"));n.addEventListener("input",(()=>{fetch("https://restcountries.com/v2/all?fields=name,capital,population,flags,languages").then((n=>{if(!n.ok)throw new Error(n.status);return n.json()})).then((n=>function(n){const{name:e,capital:o,population:a,flags:l,languages:s}=n;console.log(n);const c=n.map((({name:n,capital:t,population:e,flags:o,languages:a})=>{const l=[];return a.map((({name:n})=>{l.push(n)})),`\n        <div>\n            <h2 class="country-title">\n            <img alt="Flag of ${n}" src=${o.svg} width="25">\n            ${n}</h2>\n        </div>\n        <p><b>Capital:</b> ${t}</p>\n        <p><b>Population:</b> ${e}</p>\n        <p><b>Languages:</b> ${l}</p>\n        `})).join("");t.insertAdjacentHTML("beforeend",c)}(n))).catch((n=>console.log(n)))}));
//# sourceMappingURL=index.0567ec8d.js.map
