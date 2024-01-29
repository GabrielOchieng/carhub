export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "355358f1eemsh1fae7072a4ab93ep120575jsnfe6f2d77230d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
