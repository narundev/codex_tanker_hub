import React, { useState } from 'react';
import { Bot, Send, Minimize2 } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

const TANKER_AI_REPLIES = [
  "Ask Google.",
  "I don't know.",
  "Why are you asking me? Go search on Google.",
  "Google it bro.",
  "I am on lunch break.",
  "Error 404: I don't care.",
  "Bro just Google it.",
  "Have you tried asking Google?",
  "I am 100% useless, ask Google."
];

export const TinkerBotChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: 'Hello! I am Tanker AI , How can i help you' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      const reply = TANKER_AI_REPLIES[Math.floor(Math.random() * TANKER_AI_REPLIES.length)];
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="brutalist-btn bg-black text-white p-3 rounded-full flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_#ff77bc] hover:bg-[#ff77bc] hover:text-black transition-all cursor-pointer"
          title="Tanker AI"
        >
          <Bot className="w-5 h-5 text-yellow-300" />
          <span className="font-pixel text-xs hidden sm:inline">TANKER AI</span>
        </button>
      )}

      {isOpen && (
        <div className="brutalist-card w-80 sm:w-96 bg-white border-2 border-black shadow-[6px_6px_0px_#000] overflow-hidden flex flex-col h-96">
          {/* Header */}
          <div className="bg-black text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-yellow-300" />
              <div>
                <span className="text-xs font-pixel font-bold text-yellow-300 block">TANKER AI</span>
                <span className="text-[9px] text-zinc-400">UNHELPFUL ASSISTANT</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-pink-400"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-[#faf9f3] text-xs">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-2.5 border border-black shadow-[2px_2px_0px_#000] ${
                    msg.sender === 'user' 
                      ? 'bg-yellow-200 text-black font-semibold' 
                      : 'bg-white text-zinc-900 font-mono font-bold'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2 bg-white border-t border-black flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Tanker AI anything..."
              className="flex-1 p-2 border border-black text-xs font-mono focus:outline-none focus:bg-yellow-50"
            />
            <button 
              type="submit"
              className="px-3 bg-black text-white hover:bg-pink-500 hover:text-black border border-black cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
