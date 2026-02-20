import { Cloud, MapPin } from 'lucide-react';

const WeatherCard = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-full">
            <MapPin className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">Seoul</h2>
            <p className="text-white/60 text-sm">South Korea</p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-white/70 text-sm">Friday, 20 February 2026</div>
          <div className="text-white/50 text-xs">12:06 PM</div>
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex-1">
          <div className="text-7xl font-bold text-white mb-3 tracking-tight">
            9°
            <span className="text-4xl font-normal text-white/70">C</span>
          </div>
          <div className="text-white/90 text-xl capitalize mb-2 font-medium">
            A little Cloudy
          </div>
          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <span>H: 12°</span>
            <span>L: 4°</span>
          </div>
        </div>
        <div className="text-white/90 transform hover:scale-110 transition-transform duration-300">
          <Cloud className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
