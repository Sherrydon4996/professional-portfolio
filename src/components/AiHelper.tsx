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
  const inputRef = useRef<HTMLInputElement>(null);

  /* --------------------------------------------
     Auto-scroll to bottom on new messages
  --------------------------------------------- */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  /* --------------------------------------------
     Focus input when chat opens on desktop only
     (avoids keyboard popping up on mobile unexpectedly)
  --------------------------------------------- */
  useEffect(() => {
    if (showChat && window.innerWidth >= 640) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [showChat]);

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
      const businessData = getFormattedDataForAI();

      const aiResponse = await sendPortfolioAIQuery({
        query: userMessage,
        businessData,
        conversationHistory: chatMessages.slice(-8),
      });

      setChatMessages((prev) => [...prev, { role: "bot", text: aiResponse }]);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "⚠️ I'm having technical issues right now. Please reach us on WhatsApp (+254711140899) or email for quick help.";

      setChatMessages((prev) => [...prev, { role: "bot", text: errorMessage }]);
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
      {/* ─── Floating Action Buttons ─── */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
        {/* AI Bot button */}
        <motion.button
          onClick={() => setShowChat((prev) => !prev)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label={showChat ? "Close chat" : "Open AI chat"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {showChat ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="bot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bot size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* WhatsApp button */}
        <motion.a
          href="https://wa.me/254711140899"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
        </motion.a>
      </div>

      {/* ─── Chat Window ─── */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`
              fixed z-50
              bg-card border border-border rounded-2xl shadow-2xl
              overflow-hidden flex flex-col

              /* ── Mobile: full-width sheet anchored above buttons ── */
              bottom-[5.5rem] right-2 left-2
              max-h-[calc(100svh-7rem)]

              /* ── Small phones (≥360px) ── */
              min-[360px]:right-3 min-[360px]:left-3

              /* ── Tablet / desktop: fixed-width popup ── */
              sm:left-auto sm:right-6
              sm:w-[26rem] sm:max-w-[calc(100vw-3rem)]
              sm:bottom-[6.5rem]
              sm:max-h-[min(600px,calc(100svh-8rem))]
            `}
          >
            {/* ── Header ── */}
            <div className="flex-shrink-0 bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={15} />
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-tight">
                      Ask HarryBot
                    </p>
                    <p className="text-[10px] text-white/70 leading-tight">
                      AI Assistant · Usually replies instantly
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleClearChat}
                    className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                    aria-label="Clear chat"
                  >
                    <Trash2 size={14} />
                  </button>
                  <button
                    onClick={() => setShowChat(false)}
                    className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 space-y-3 bg-background min-h-0">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Bot avatar */}
                  {msg.role === "bot" && (
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-0.5">
                      <Bot size={12} className="text-white" />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed
                      break-words whitespace-pre-wrap
                      ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }
                    `}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={handleSendMessage}
              className="flex-shrink-0 px-3 py-3 border-t border-border bg-muted/30"
            >
              <div className="flex gap-2 items-end">
                <textarea
                  ref={
                    inputRef as unknown as React.RefObject<HTMLTextAreaElement>
                  }
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    // Auto-grow: reset height, then set to scrollHeight (max 3 lines ≈ 80px)
                    e.target.style.height = "auto";
                    e.target.style.height =
                      Math.min(e.target.scrollHeight, 80) + "px";
                  }}
                  onKeyDown={(e) => {
                    // Send on Enter (not Shift+Enter)
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e as unknown as React.FormEvent);
                    }
                  }}
                  placeholder="Type a message…"
                  rows={1}
                  maxLength={1000}
                  disabled={isLoading}
                  className="
                    flex-1 resize-none px-3 py-2 rounded-xl border border-border
                    bg-background focus:outline-none focus:ring-2 focus:ring-primary
                    text-sm leading-relaxed
                    disabled:opacity-50 disabled:cursor-not-allowed
                    placeholder:text-muted-foreground
                    max-h-20 overflow-y-auto
                  "
                  style={{ height: "38px" }}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="
                    flex-shrink-0 w-9 h-9 rounded-xl
                    bg-primary text-primary-foreground
                    hover:bg-primary/90
                    disabled:opacity-40 disabled:cursor-not-allowed
                    transition-colors flex items-center justify-center
                  "
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>

              {/* Character counter — only shows near limit */}
              {inputValue.length > 800 && (
                <p
                  className={`text-xs mt-1 text-right ${
                    inputValue.length >= 950
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}
                >
                  {inputValue.length}/1000
                </p>
              )}
            </form>

            {/* ── Footer ── */}
            <div className="flex-shrink-0 text-[11px] text-center py-1.5 text-muted-foreground bg-muted/30 border-t border-border/50">
              Powered by <span className="font-semibold">HarryTech</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
