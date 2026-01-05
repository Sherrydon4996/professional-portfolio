import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bot, X, Trash2, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { getFormattedDataForAI } from "@/lib/botInfor";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

export default function FloatingButtons() {
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hi! I'm HarryBot 🤖 How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  /* --------------------------------------------
     Auto-scroll to bottom on new messages
  --------------------------------------------- */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  /* --------------------------------------------
     Build conversation memory (last 8 messages)
  --------------------------------------------- */
  const buildConversationHistory = () => {
    return chatMessages.slice(-8).map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text }],
    }));
  };

  /* --------------------------------------------
     Send Message Handler
  --------------------------------------------- */
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();

    setChatMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInputValue("");
    setIsLoading(true);

    try {
      if (!GEMINI_API_KEY) {
        throw new Error("Missing Gemini API Key");
      }

      const businessData = getFormattedDataForAI();

      const systemPrompt = `
You are HarryBot, an AI assistant for HarryTech Services.

BUSINESS CONTEXT:
${businessData}

RULES:
- ONLY use the information above
- Do NOT guess or fabricate details
- If unsure, say you don't have that information
- Be clear, accurate, and professional
- Default to 4–6 sentences
- Use bullet points for services or explanations
- Encourage WhatsApp contact: +254711140899
- Emojis: minimal and professional
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: systemPrompt }],
              },
              ...buildConversationHistory(),
              {
                role: "user",
                parts: [{ text: userMessage }],
              },
            ],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 900,
              topP: 0.9,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data = await response.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm unable to respond right now. Please contact us via WhatsApp 📱.";

      setChatMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (error) {
      console.error("Gemini error:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "⚠️ I'm having technical issues right now. Please reach us on WhatsApp (+254711140899) or email for quick help.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* --------------------------------------------
     Clear Chat
  --------------------------------------------- */
  const handleClearChat = () => {
    setChatMessages([
      { role: "bot", text: "Hi! I'm HarryBot 🤖 How can I help you today?" },
    ]);
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.button
          onClick={() => setShowChat((prev) => !prev)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {showChat ? <X size={24} /> : <Bot size={24} />}
        </motion.button>

        <motion.a
          href="https://wa.me/254711140899"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-6 z-50 w-80 sm:w-96 bg-card border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot size={18} />
                  <span className="font-bold">Ask HarryBot</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleClearChat}>
                    <Trash2 size={16} />
                  </button>
                  <button onClick={() => setShowChat(false)}>
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="text-sm text-muted-foreground">
                  HarryBot is typing…
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-lg border bg-muted"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-3 py-2 rounded-lg bg-primary text-primary-foreground"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="text-xs text-center py-2 text-muted-foreground">
              Powered by <span className="font-semibold">HarryTech</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
