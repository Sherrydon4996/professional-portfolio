// components/FloatingButtons.tsx

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bot, X, Trash2, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import { getFormattedDataForAI } from "@/lib/botInfor";
import { sendPortfolioAIQuery } from "@/Api/ApiServices";

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
      // Get business data
      const businessData = getFormattedDataForAI();

      // Send query to backend
      const aiResponse = await sendPortfolioAIQuery({
        query: userMessage,
        businessData,
        conversationHistory: chatMessages.slice(-8), // Last 8 messages
      });

      setChatMessages((prev) => [...prev, { role: "bot", text: aiResponse }]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "⚠️ I'm having technical issues right now. Please reach us on WhatsApp (+254711140899) or email for quick help.";

      setChatMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: errorMessage,
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
            className="fixed bottom-28 right-6 z-50 w-[90vw] sm:w-96 max-w-md bg-card border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot size={18} />
                  <span className="font-bold">Ask HarryBot</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleClearChat}
                    className="hover:bg-white/20 p-1 rounded transition-colors"
                    aria-label="Clear chat"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    onClick={() => setShowChat(false)}
                    className="hover:bg-white/20 p-1 rounded transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-3 bg-background">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl text-sm break-words ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    }`}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-2 rounded-xl">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t bg-muted/30"
            >
              <div className="flex gap-2">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  disabled={isLoading}
                  maxLength={1000}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 text-center">
                {inputValue.length}/1000
              </p>
            </form>

            {/* Footer */}
            <div className="text-xs text-center py-2 text-muted-foreground bg-muted/30">
              Powered by <span className="font-semibold">HarryTech</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
