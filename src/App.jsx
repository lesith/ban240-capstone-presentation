import React from "react";
import { Card } from "./components/ui/card";
import StationLocator from './components/StationLocator';
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
  CircleDollarSign,
  Cable,
  Ambulance,
  Leaf,
  BatteryCharging,
  Earth,
  MapPinned,
  TrendingUp,
  ChartCandlestick,
  Users,
  Wifi,
  Code,
  Landmark,
  Factory,
  UserCheck,
  Route,
  Medal,
  Atom,
  Database,
  Activity
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
  { segment: "Mid", price: 90000, share: 45 },
  { segment: "Entry", price: 50000, share: 30 },
];

const rangeData = [
  { percentile: "25th", range: 402 },
  { percentile: "Median", range: 454 },
  { percentile: "75th", range: 500 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

const Presentation = () => {
  return (
    <div className="w-full space-y-4 p-2 md:space-y-8 md:p-4">

      {/* Title Slide - Responsive padding and icon spacing */}
      <Card className="p-4 md:p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Breaking Down Barriers</h1>
        <h2 className="text-xl md:text-2xl mb-2 md:mb-4">
          Overcoming Obstacles to EV Ownership in Canada
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Business Analytics Capstone Project - Automobile Industry Group
        </p>
        <div className="mt-4 md:mt-8 flex justify-center space-x-4 md:space-x-8">
          <div className="text-center">
            <Car size={50} className="mx-auto text-blue-600 mb-2" />
            <p className="text-xl md:text-xl">Market Analysis</p>
          </div>
          <div className="text-center">
            <Battery size={50} className="mx-auto text-green-600 mb-2" />
            <p className="text-xl md:text-xl">Infrastructure</p>
          </div>
          <div className="text-center">
            <DollarSign size={50} className="mx-auto text-yellow-600 mb-2" />
            <p className="text-xl md:text-xl">Cost Analysis</p>
          </div>
        </div>
      </Card>

      {/* Research Problem - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Research Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-red-500 mb-2" />
            <h3 className="font-bold mb-2">High Costs</h3>
            <p className="text-lg">
              EVs start at CAD 40,000 vs. gasoline vehicles at CAD 16,998
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <MapPin className="h-6 w-6 md:h-8 md:w-8 text-red-500 mb-2" />
            <h3 className="font-bold mb-2">Infrastructure Gaps</h3>
            <p className="text-lg">
              Limited charging station availability in many regions
            </p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <Zap className="h-6 w-6 md:h-8 md:w-8 text-red-500 mb-2" />
            <h3 className="font-bold mb-2">Service Concerns</h3>
            <p className="text-lg">
              Maintenance and long-term reliability uncertainties
            </p>
          </div>
        </div>
      </Card>

      {/* Methodology - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <ul className="space-y-2">
            <h3 className="text-lg font-bold mb-3">Mixed-Methods Approach</h3>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={40} />
                <span className="text-lg">Quantitative and Qualitative</span>
              </li>
              <h3 className="text-lg font-bold mb-3">Target Population</h3>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={40} />
                <span className="text-lg">Consumers, Industries and the State</span>
              </li>
              <h3 className="text-lg font-bold mb-3">Sample</h3>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={40} />
                <span className="text-lg">Urban and Rural Car Buyers, Gov Bodies</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
            <h3 className="text-lg font-bold mb-3">Primary Limitation</h3>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={40} />
                <span className="text-lg">Reliance on existing data sources</span>
              </li>
              <h3 className="text-lg font-bold mb-3">Mitigation Strategy</h3>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-blue-500" size={40} />
                <span className="text-lg">Use of reputable and official sources</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Data Collection - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Data Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-4 bg-purple-50 rounded-lg">
            <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-2">Public Domain Data</h3>
            <p className="text-lg">
              Research Papers and Industry Reports
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <Wifi className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-2">Web Scraping</h3>
            <p className="text-lg">
              Kijiji and Plug'n Drive
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <Code className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-2">Government Data Sources</h3>
            <p className="text-lg">
              Charging Stations API
            </p>
          </div>
        </div>
      </Card>

      {/* Analysis - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Analysis Methods</h2>
        <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-3">Statistical Analysis</h3>
            <ChartCandlestick size={50} className="mx-auto text-green-600 mb-2" />
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold mb-3">Correlation Studies</h3>
            <TrendingUp size={50} className="mx-auto text-red-600 mb-2" />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-3">Geospatial Analysis</h3>
            <MapPinned size={50} className="mx-auto text-blue-600 mb-2" />
          </div>
        </div>
      </Card>

      {/* Key Findings - Responsive charts */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Key Findings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Price Analysis (Mean)</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer>
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
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Range Distribution</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer>
                <LineChart data={rangeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="percentile" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="range" stroke="#10B981" strokeWidth={5} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Card>

      {/* Market Evolution - Responsive charts */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Market Evolution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Market Segments</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer>
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
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Charging Infrastructure</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer>
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
        </div>
      </Card>

      {/* <StationLocator /> */}
      <StationLocator />

      {/* Conclusion */}
      <Card className="p-4 md:p-8 text-center bg-gradient-to-r from-green-50 to-indigo-50">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Discussion and Conclusion</h1>
        <h2 className="text-xl md:text-2xl mb-2 md:mb-4">
          The Study Reveals
        </h2>
        <div className="mt-4 md:mt-8 flex justify-center space-x-4 md:space-x-8">
          <div className="text-center">
            <CircleDollarSign size={50} className="mx-auto text-blue-600 mb-2" />
            <p className="text-lg md:text-lg">EV Price Premium</p>
          </div>
          <div className="text-center">
            <Cable size={50} className="mx-auto text-green-600 mb-2" />
            <p className="text-lg md:text-lg">Chargers are Scarce</p>
          </div>
          <div className="text-center">
            <Ambulance size={50} className="mx-auto text-yellow-600 mb-2" />
            <p className="text-lg md:text-lg">Service Concerns</p>
          </div>
        </div>
      </Card>

      {/* Recommendations - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">These Can be Addressed by</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
          <Landmark className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-3">The Government</h3>
            <ul className="space-y-2 text-lg">
              <li>1. Expand charging infrastructure</li>
              <li>2. Enhance purchase incentives</li>
              <li>3. Standardize payment systems</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
          <Factory className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-3">The Manufacturers</h3>
            <ul className="space-y-2 text-lg">
              <li>1. Develop entry and mid-market segments</li>
              <li>2. Improve cold-weather tech</li>
              <li>3. Expand service networks</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
          <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-3">The Consumers</h3>
            <ul className="space-y-2 text-lg">
              <li>1. Consider total ownership costs</li>
              <li>2. Use available incentives</li>
              <li>3. Research charging access</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Further Studies - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Recommendations for Further Studies</h2>
        <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-3">Environmental and Economic Impact</h3>
            <Leaf size={50} className="mx-auto text-green-600 mb-2" />
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold mb-3">Battery Technologies</h3>
            <BatteryCharging size={50} className="mx-auto text-red-600 mb-2" />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-3">Regional Needs of Charging Infrastructure</h3>
            <Earth size={50} className="mx-auto text-blue-600 mb-2" />
          </div>
        </div>
      </Card>

      {/* Impact - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Impact for Business Analytics Managers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <Route className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-3">Strategic Planning</h3>
            <ul className="space-y-2 text-lg">
              <li>• Data-driven infrastructure decisions</li>
              <li>• Predictive market modeling</li>
              <li>• Consumer behavior analysis</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <Medal className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-3">Operational Excellence</h3>
            <ul className="space-y-2 text-lg">
              <li>• Real-time monitoring</li>
              <li>• Performance tracking</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <Atom className="h-6 w-6 md:h-8 md:w-8 text-purple-500 mb-2" />
            <h3 className="font-bold mb-3">Innovation</h3>
            <ul className="space-y-2 text-lg">
              <li>• Machine learning applications</li>
              <li>• Geospatial analysis</li>
              <li>• Sentiment analysis</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Limitations - Responsive grid */}
      <Card className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Limitations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-4 bg-red-50 rounded-lg">
            <Database className="h-6 w-6 md:h-8 md:w-8 text-red-500 mb-2" />
            <h3 className="font-bold mb-3">Data Constraints</h3>
            <ul className="space-y-2 text-lg">
              <li>• Limited historical data</li>
              <li>• Incomplete reliability data</li>
              <li>• Regional variations</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <Activity className="h-6 w-6 md:h-8 md:w-8 text-red-500 mb-2" />
            <h3 className="font-bold mb-3">Methodological Limitations</h3>
            <ul className="space-y-2 text-lg">
              <li>• Evolving market conditions</li>
              <li>• Technology advancement uncertainty</li>
              <li>• Limited cold-weather data</li>
            </ul>
          </div>
        </div>
      </Card>


      {/* Sources */}
      <Card className="p-4 md:p-6">
        <h2 className="text-2xl font-bold mb-4">Sources</h2>
        <ul className="space-y-2 text-lg">
          <li>1. Natural Resources Canada (2024)</li>
          <li>2. Statistics Canada (2024)</li>
          <li>3. International Energy Agency (2023)</li>
          <li>4. Clean Energy Canada (2024)</li>
          <li>5. Canadian Automobile Association (2023)</li>
          <li>6. Environment and Climate Change Canada (2023)</li>
          <li>7. Kijiji Public Listings (2024)</li>
          <li>8. Plug'n Drive (2024)</li>
        </ul>
      </Card>

    </div>
  );
};

export default Presentation;
