const url =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,borders";
async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

getData(url);

async function getMacedonia() {
  let data = await getData(url);
  data.filter((mk) => {
    if (mk.name.common === "North Macedonia") {
      console.log(mk);
    }
  });
}

getMacedonia();

async function getNeighbours(country) {
  let data = await getData(url);
  data.filter((ne) => {
    if (ne.name.common === country) {
      console.log(ne.borders);
    }
  });
}

getNeighbours("North Macedonia");
