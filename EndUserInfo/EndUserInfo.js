async function getLocationFromIP(ip) {
  const url = "https://" + "api.ippriv.com/api/geo/" + encodeURIComponent(ip);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Request failed: " + res.status);
  }

  const data = await res.json();

  return {
    ip: data.ip,
    latitude: data.lat,
    longitude: data.lon,
    city: data.city,
    region: data.region,
    country: data.country,
    timezone: data.timezone,
    isp: data.isp
  };
}

getLocationFromIP("76.137.240.228")
  .then(console.log)
  .catch(console.error);








  const ipLocation = {
  ip: "76.137.240.228",
  latitude: 38.6711,
  longitude: -121.1495,
  city: "Folsom",
  region: "California",
  country: "United States",
  timezone: "America/Los_Angeles"
};

async function getWeatherFromLocation(location) {
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current: [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "precipitation",
      "rain",
      "showers",
      "snowfall",
      "weather_code",
      "cloud_cover",
      "wind_speed_10m",
      "is_day"
    ].join(","),
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
    precipitation_unit: "inch",
    timezone: "auto"
  });

  const url = `https://api.open-meteo.com/v1/forecast?${params}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Weather request failed: ${res.status}`);
  }

  const data = await res.json();
  const current = data.current;

  const condition = getWeatherCondition(
    current.weather_code,
    current.precipitation,
    current.is_day
  );

  return {
    location: `${location.city}, ${location.region}`,
    temperature: current.temperature_2m,
    feelsLike: current.apparent_temperature,
    humidity: current.relative_humidity_2m,
    windSpeed: current.wind_speed_10m,
    precipitation: current.precipitation,
    cloudCover: current.cloud_cover,
    weatherCode: current.weather_code,
    condition: condition.label,
    icon: condition.icon,
    isRaining: condition.isRaining,
    time: current.time
  };
}

function getWeatherCondition(code, precipitation, isDay) {
  const rainCodes = [
    51, 53, 55, // drizzle
    56, 57,     // freezing drizzle
    61, 63, 65, // rain
    66, 67,     // freezing rain
    80, 81, 82, // rain showers
    95, 96, 99  // thunderstorm
  ];

  const snowCodes = [
    71, 73, 75,
    77,
    85, 86
  ];

  const isRaining = precipitation > 0 || rainCodes.includes(code);

  if (isRaining) {
    return {
      label: "Raining",
      icon: "🌧️",
      isRaining: true
    };
  }

  if (snowCodes.includes(code)) {
    return {
      label: "Snowing",
      icon: "❄️",
      isRaining: false
    };
  }

  if (code === 0) {
    return {
      label: isDay ? "Sunny" : "Clear",
      icon: isDay ? "☀️" : "🌙",
      isRaining: false
    };
  }

  if (code === 1) {
    return {
      label: "Mainly clear",
      icon: "🌤️",
      isRaining: false
    };
  }

  if (code === 2) {
    return {
      label: "Partly cloudy",
      icon: "⛅",
      isRaining: false
    };
  }

  if (code === 3) {
    return {
      label: "Cloudy",
      icon: "☁️",
      isRaining: false
    };
  }

  if (code === 45 || code === 48) {
    return {
      label: "Foggy",
      icon: "🌫️",
      isRaining: false
    };
  }

  return {
    label: "Unknown",
    icon: "❔",
    isRaining: false
  };
}

getWeatherFromLocation(ipLocation)
  .then(weather => {
    console.log(weather);

    console.log(`Location: ${weather.location}`);
    console.log(`Condition: ${weather.condition} ${weather.icon}`);
    console.log(`Temperature: ${weather.temperature}°F`);
    console.log(`Feels like: ${weather.feelsLike}°F`);
    console.log(`Raining now: ${weather.isRaining ? "Yes" : "No"}`);
    console.log(`Humidity: ${weather.humidity}%`);
    console.log(`Wind: ${weather.windSpeed} mph`);
  })
  .catch(console.error);