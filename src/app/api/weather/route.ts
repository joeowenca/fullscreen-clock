import { NextResponse } from 'next/server';

let cachedWeather: { current: { feelslike_c: number } } | null = null;

export async function GET() {

  if (!cachedWeather) {
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Victoria,BC`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();
      cachedWeather = data;
    } catch (err) {
      console.error('Weather fetch failed:', err);
      return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
    }
  }

  return NextResponse.json({ temperature: cachedWeather!.current.feelslike_c });
}
