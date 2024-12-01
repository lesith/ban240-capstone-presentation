// src/components/StationLocator.jsx
import React, { useState, useEffect } from 'react';
// Notice we now import CircleMarker instead of Marker
import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet';
import { Card } from './ui/card';
import 'leaflet/dist/leaflet.css';

const StationLocator = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Our function to fetch charging station data from the NREL API
    const fetchStations = async () => {
      try {
        // Replace YOUR_API_KEY with your actual NREL API key
        const response = await fetch(
          'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=ZRKwSXwlrfpqz6NeLLs3GsW2z0yQzUSoGxySo5wy&country=CA&fuel_type=ELEC&status=E&access=public'
        );
        
        const data = await response.json();

        // Transform the API data into a simple format with just the coordinates
        const stationLocations = data.fuel_stations.map(station => ({
          id: station.id,
          position: [station.latitude, station.longitude]
        }));

        setStations(stationLocations);
      } catch (error) {
        console.error('Error fetching stations:', error);
      }
    };

    fetchStations();
  }, []);

  return (
    <Card className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">EV Charging Stations Across Canada</h2>
      <div className="h-[600px] w-full border rounded-lg overflow-hidden">
        <MapContainer
          center={[56.1304, -106.3468]}
          zoom={4}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Replace Marker with CircleMarker for each charging station */}
          {stations.map(station => (
            <CircleMarker
              key={station.id}
              center={station.position}
              // The following properties customize the appearance of our dots
              radius={4}              // Size of the dot
              fillColor="#4F46E5"     // Interior color (matches your theme's blue)
              fillOpacity={0.7}       // Makes the dot slightly transparent
              color="#3730A3"         // Border color (slightly darker)
              weight={1}              // Border width
            />
          ))}
        </MapContainer>
      </div>
    </Card>
  );
};

export default StationLocator;