import React from "react";
import { Card } from "./components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Car,
  Battery,
  MapPin,
  DollarSign,
  Zap,
  ChevronRight,
} from "lucide-react";

const provinceData = [
  { province: "Ontario", stations: 4925 },
  { province: "Quebec", stations: 4808 },
  { province: "BC", stations: 2644 },
  { province: "Alberta", stations: 820 },
  { province: "Manitoba", stations: 318 },
];

const marketSegmentData = [
  { segment: "Premium", price: 150000, share: 25 },
  { segment: "Mid-market", price: 90000, share: 45 },
  { segment: "Entry-level", price: 50000, share: 30 },
];

const rangeData = [
  { percentile: "25th", range: 402 },
  { percentile: "Median", range: 454 },
  { percentile: "75th", range: 500 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

const Presentation = () => {
  return (
    <div className="w-full space-y-8 p-4">
      {/* Title Slide */}
      <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-4xl font-bold mb-4">Breaking Down Barriers</h1>
        <h2 className="text-2xl mb-4">
          Overcoming Obstacles to EV Ownership in Canada
        </h2>
        <p className="text-xl text-gray-600">
          Business Analytics Capstone Project
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <div className="text-center">
            <Car size={32} className="mx-auto text-blue-600 mb-2" />
            <p className="text-sm">Market Analysis</p>
          </div>
          <div className="text-center">
            <Battery size={32} className="mx-auto text-green-600 mb-2" />
            <p className="text-sm">Infrastructure</p>
          </div>
          <div className="text-center">
            <DollarSign size={32} className="mx-auto text-yellow-600 mb-2" />
            <p className="text-sm">Cost Analysis</p>
          </div>
        </div>
      </Card>

      {/* Research Problem */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Research Problem</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <DollarSign className="h-8 w-8 text-red-500 mb-2" />
            <h3 className="font-bold mb-2">High Costs</h3>
            <p className="text-sm">
              EVs start at CAD 40,000 vs. gasoline vehicles at CAD 16,998
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <MapPin className="h-8 w-8 text-yellow-500 mb-2" />
            <h3 className="font-bold mb-2">Infrastructure Gaps</h3>
            <p className="text-sm">
              Limited charging station availability in many regions
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Zap className="h-8 w-8 text-blue-500 mb-2" />
            <h3 className="font-bold mb-2">Service Concerns</h3>
            <p className="text-sm">
              Maintenance and long-term reliability uncertainties
            </p>
          </div>
        </div>
      </Card>

      {/* Methodology */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Methodology</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Data Collection</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={16} />
                Public Domain Data (Statistics Canada, Natural Resources Canada)
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={16} />
                Web scraping (Kijiji, Plug'n Drive)
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={16} />
                Canadian EV Charging Stations Data API (nrel.gov)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Analysis Methods</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="text-green-500" size={16} />
                Statistical analysis
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-green-500" size={16} />
                Correlation studies
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-green-500" size={16} />
                Geospatial analysis
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Key Findings */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Key Findings</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Price Analysis (Mean)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={[
                  { type: "BEV", price: 76387 },
                  { type: "PHEV", price: 72200 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Range Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={rangeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="percentile" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="range" stroke="#10B981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Market Evolution */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Market Evolution</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Market Segments</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketSegmentData}
                  dataKey="share"
                  nameKey="segment"
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {marketSegmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Charging Infrastructure</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={provinceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="province" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stations" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-3">For Government</h3>
            <ul className="space-y-2 text-sm">
              <li>1. Expand charging infrastructure</li>
              <li>2. Enhance purchase incentives</li>
              <li>3. Standardize payment systems</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-3">For Manufacturers</h3>
            <ul className="space-y-2 text-sm">
              <li>1. Develop mid-market segment</li>
              <li>2. Improve cold-weather tech</li>
              <li>3. Expand service networks</li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold mb-3">For Consumers</h3>
            <ul className="space-y-2 text-sm">
              <li>1. Consider total ownership costs</li>
              <li>2. Use available incentives</li>
              <li>3. Research charging access</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Impact for Business Analytics Managers */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          Impact for Business Analytics Managers
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold mb-3">Strategic Planning</h3>
            <ul className="space-y-2 text-sm">
              <li>• Data-driven infrastructure decisions</li>
              <li>• Predictive market modeling</li>
              <li>• Consumer behavior analysis</li>
            </ul>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-bold mb-3">Operational Excellence</h3>
            <ul className="space-y-2 text-sm">
              <li>• Real-time monitoring</li>
              <li>• Performance tracking</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-3">Innovation</h3>
            <ul className="space-y-2 text-sm">
              <li>• Machine learning applications</li>
              <li>• Geospatial analysis</li>
              <li>• Sentiment analysis</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Limitations */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Limitations</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold mb-3">Data Constraints</h3>
            <ul className="space-y-2 text-sm">
              <li>• Limited historical data</li>
              <li>• Incomplete reliability data</li>
              <li>• Regional variations</li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-bold mb-3">Methodological Limitations</h3>
            <ul className="space-y-2 text-sm">
              <li>• Evolving market conditions</li>
              <li>• Technology advancement uncertainty</li>
              <li>• Limited cold-weather data</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Sources */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-sm">
          <li>1. Natural Resources Canada (2024)</li>
          <li>2. Statistics Canada (2024)</li>
          <li>3. International Energy Agency (2023)</li>
          <li>4. Clean Energy Canada (2024)</li>
          <li>5. Canadian Automobile Association (2023)</li>
          <li>6. Environment and Climate Change Canada (2023)</li>
        </ul>
      </Card>
    </div>
  );
};

export default Presentation;