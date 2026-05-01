import { AnimatePresence, motion } from 'framer-motion';
import { Bot, ChevronDown, ChevronUp, LoaderCircle, MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const starterMessages = [
  {
    role: 'assistant',
    content:
      'Hi, I am the Rode Fitness assistant. I can help with timings, membership, location, and joining details.'
  }
];

const suggestions = [
  'What are the timings?',
  'How do I join?',
  'Do you offer personal training?',
  'Where is the gym located?'
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const sendMessage = async (rawText) => {
    const text = rawText.trim();
    if (!text || isSending) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: nextMessages })
      });

      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: data.reply || 'I can help with the gym details and joining process.'
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: 'I am available for timings, location, and contact details right here.'
        }
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="glass soft-glow fixed bottom-24 right-4 z-50 flex h-[78vh] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl md:bottom-6 md:right-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-electric/30 text-white shadow-glow">
                  <Bot size={19} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Rode AI Assistant</p>
                  <p className="text-xs text-white/60">Quick help for joiners</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === 'user'
                        ? 'bg-accent text-black'
                        : 'border border-white/10 bg-white/6 text-white/90'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isSending ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/60">
                    <LoaderCircle className="animate-spin" size={16} />
                    Thinking...
                  </div>
                </div>
              ) : null}
              <div ref={bottomRef} />
            </div>

            <div className="space-y-3 border-t border-white/10 bg-[#101010]/95 p-4">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 transition hover:border-accent/40 hover:bg-accent/10 hover:text-white"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about membership or timings"
                  className="h-12 flex-1 rounded-2xl border border-white/10 bg-black/50 px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-accent/50"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-electric text-black transition hover:scale-[1.02]"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-24 right-4 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/80 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-xl transition hover:border-accent/40 hover:bg-black md:bottom-6 md:right-6"
        aria-label="Open chatbot"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-electric/25 text-white shadow-glow">
          <MessageCircle size={18} />
        </span>
        <span className="hidden text-left sm:block">
          <span className="block font-semibold">Chat with Rode</span>
          <span className="block text-xs text-white/55">Gym info in seconds</span>
        </span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </button>
    </>
  );
}