import React from 'react';
import { useBureau, EventData } from '../context/BureauContext';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { events, triggerCoconutDrop } = useBureau();

  return (
    <section id="events" className="max-w-6xl mx-auto px-4 py-12">
      {/* Tilted Black Badge */}
      <div className="mb-10 text-center sm:text-left">
        <div className="badge-tape-black text-2xl sm:text-3xl transform -rotate-2 shadow-lg mb-2">
          UPCOMING EVENTS
        </div>
        <p className="text-xs font-mono text-zinc-500 mt-2">
          CLICK REGISTER TO RELEASE COCONUTS
        </p>
      </div>

      {/* Grid of 4 Poster Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {events.map((event: EventData) => (
          <div 
            key={event.id}
            className="brutalist-card p-5 flex flex-col justify-between group relative overflow-hidden bg-white"
          >
            {/* Poster Thumbnail Display */}
            <div className="relative w-full h-72 sm:h-80 bg-zinc-100 border border-zinc-200 overflow-hidden mb-4 rounded-sm">
              <img 
                src={event.poster} 
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 right-3 bg-yellow-300 border border-black text-black text-[10px] font-pixel px-2 py-1 font-bold">
                OFFICIAL POSTER
              </div>
            </div>

            {/* Event Details */}
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-2">
                <span className="flex items-center gap-1 font-bold text-zinc-800">
                  <Calendar className="w-3.5 h-3.5 text-pink-600" />
                  {event.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {event.time}
                </span>
              </div>

              {/* Title in Elegant Italic Serif */}
              <h3 className="font-serif-italic text-2xl sm:text-3xl text-zinc-900 leading-snug mb-3 group-hover:text-pink-600 transition-colors">
                {event.title}
              </h3>

              <p className="text-xs text-zinc-600 mb-4 line-clamp-2 font-sans">
                {event.description}
              </p>

              <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 mb-5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{event.venue}</span>
              </div>
            </div>

            {/* Action Button: ONLY TRIGGERS COCONUT DROP (NO POPUPS) */}
            <button
              onClick={(e) => triggerCoconutDrop(e)}
              className="w-full py-3.5 bg-black text-white font-pixel font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 hover:bg-[#ff77bc] hover:text-black transition-all border border-black shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              <span>REGISTER FOR EVENT ↗</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
