import { NextResponse } from 'next/server';

let cachedWeather: { current: { temp_c: number } } | null = null;
let lastFetched = 0;
const ONE_HOUR = 1000 * 60 * 60;

export async function GET() {
  const now = Date.now();

  if (!cachedWeather || now - lastFetched > ONE_HOUR) {
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Victoria,BC`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();
      cachedWeather = data;
      lastFetched = now;
    } catch (err) {
      console.error('Weather fetch failed:', err);
      return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
    }
  }

  return NextResponse.json({ temperature: cachedWeather!.current.temp_c });
}
