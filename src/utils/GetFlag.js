export async function getFlagCDNUrl(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();

    if (response.ok) {
      const countryInfo = {
        countryCode: data[0]?.cca2.toLowerCase(),
        flagUrl: data[0]?.flags?.png,
      };

      return countryInfo;
    } else {
      throw new Error(`Failed to fetch country data: ${data.message}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}
