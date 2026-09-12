import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

interface Story {
  id: string;
  category: string;
  author: string;
  subject: string;
  tag: string;
  tagColor: string;
  image: string;
  excerpt: string;
  fullStory: string;
}

const STORIES: Story[] = [
  {
    id: "story-1",
    category: "GROWING THROUGH IMPACT",
    subject: "Thanishk",
    author: "BY BHARATH",
    tag: "LEARNING STORY",
    tagColor: "bg-purple-200 text-purple-900 border-purple-400",
    image: "/useless poster.jpeg",
    excerpt: "From building useless automated bots to organizing community hackathons, Thanishk shares how committing to idleness led to surprising breakthroughs.",
    fullStory: "I started by building a script that automatically closed Chrome tabs every time I tried to search for productivity tips. It was totally useless, but it taught me Python! Later at TankerHub, we realized that giving students permission to fail with hilarious projects builds true confidence."
  },
  {
    id: "story-2",
    category: "GROWING THROUGH IMPACT",
    subject: "Narun",
    author: "BY BHARATH",
    tag: "MAKER OF THE MONTH",
    tagColor: "bg-yellow-300 text-yellow-900 border-yellow-500",
    image: "/ippo sheri poster.jpeg",
    excerpt: "Breaking RC cars to building hardware that calculates the exact speed of procrastination. Narun's maker journey.",
    fullStory: "My first hardware hack was connecting an LCD screen to a button that displays 'Wait 5 minutes'. People actually pressed it and waited! That's when I learned that humor in UI design connects people faster than formal corporate software."
  },
  {
    id: "story-3",
    category: "GROWING THROUGH IMPACT",
    subject: "Akshay",
    author: "BY BHARATH",
    tag: "LEARNING STORY",
    tagColor: "bg-purple-200 text-purple-900 border-purple-400",
    image: "/code 2 game poster.jpeg",
    excerpt: "Empowering 500+ female tinkerers through useless initiatives & building absurd web extensions for fun.",
    fullStory: "We hosted an useless hackathon where participants built absurd AI voice generators that speak exclusively in proverb riddles. It was the most engaged workshop of the entire year!"
  }
];

export const CommunityStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <section id="stories" className="max-w-6xl mx-auto px-4 py-12">
      {/* Tilted Black Badge matching Screenshot 3 */}
      <div className="mb-12 text-center">
        <div className="badge-tape-black text-2xl sm:text-3xl transform rotate-1 shadow-lg mb-2">
          STORIES FROM THE COMMUNITY
        </div>
        <p className="text-xs font-mono text-zinc-500 mt-2">
          TALES OF USELESS INVENTION & MAKER SPIRIT
        </p>
      </div>

      {/* 3 Cards Grid matching Screenshot 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORIES.map((story) => (
          <div 
            key={story.id}
            onClick={() => setActiveStory(story)}
            className="brutalist-card p-5 bg-white flex flex-col justify-between cursor-pointer group relative overflow-hidden"
          >
            {/* Header copy */}
            <div className="mb-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase block mb-1">
                {story.category}
              </span>
              <h3 className="font-serif-italic text-3xl text-zinc-900 leading-tight mb-1 group-hover:text-pink-600 transition-colors">
                {story.subject}
              </h3>
              <p className="text-[11px] font-mono text-zinc-500 font-semibold uppercase tracking-wider">
                {story.author}
              </p>
            </div>

            {/* Pill Tag centered over image border matching Screenshot 3 */}
            <div className="relative my-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className={`px-4 py-1 rounded-full border border-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm ${story.tagColor}`}>
                  {story.tag}
                </span>
              </div>

              {/* Photo */}
              <div className="w-full h-64 bg-zinc-100 border border-black overflow-hidden rounded-sm">
                <img 
                  src={story.image} 
                  alt={story.subject}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <p className="text-xs text-zinc-600 mt-4 line-clamp-3 font-sans">
              "{story.excerpt}"
            </p>

            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono font-bold text-black group-hover:text-pink-600">
              <span>READ FULL CHRONICLE</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="brutalist-card w-full max-w-xl bg-white p-6 relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-pink-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="badge-tape-pink text-xs font-mono mb-2">COMMUNITY CASE CHRONICLE</span>
            <h2 className="font-serif-italic text-4xl text-zinc-900 mb-1">{activeStory.subject}</h2>
            <p className="text-xs font-mono text-zinc-500 uppercase mb-4">{activeStory.author}</p>

            <div className="w-full h-60 border border-black mb-4 overflow-hidden">
              <img src={activeStory.image} alt={activeStory.subject} className="w-full h-full object-cover" />
            </div>

            <p className="text-sm text-zinc-800 leading-relaxed font-sans mb-6">
              {activeStory.fullStory}
            </p>

            <div className="flex justify-end">
              <button 
                onClick={() => setActiveStory(null)}
                className="px-5 py-2 bg-black text-white font-pixel text-xs uppercase hover:bg-pink-500 hover:text-black border border-black cursor-pointer"
              >
                CLOSE CHRONICLE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
