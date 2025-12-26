import { NextResponse } from 'next/server';

let cachedWeather: { heatindex: number } | null = null;

export async function GET() {

  if (!cachedWeather) {
    try {
      const res = await fetch(`https://api.airgradient.com/public/api/v1/world/locations/170575/measures/current`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();
      cachedWeather = data;
    } catch (err) {
      console.error('Weather fetch failed:', err);
      return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
    }
  }

  return NextResponse.json({ temperature: cachedWeather!.heatindex});
}
