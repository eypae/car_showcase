export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "509cdfa3ebmsha57cf62b26edaa8p16e30djsnc9063ac6e13f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      {
        headers: headers,
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
