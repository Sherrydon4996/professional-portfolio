// lib/portfolioAI.api.ts

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export interface AIQueryRequest {
  query: string;
  businessData: string;
  conversationHistory: Array<{ role: "user" | "bot"; text: string }>;
}

export interface AIQueryResponse {
  success: boolean;
  response?: string;
  message?: string;
  timestamp: string;
}

/**
 * Send query to backend AI service
 */
export const sendPortfolioAIQuery = async (
  request: AIQueryRequest,
): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/portfolio/ai/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const data: AIQueryResponse = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(
        data.message ||
          "Failed to get AI response. Please contact us via WhatsApp.",
      );
    }

    return (
      data.response ||
      "I'm unable to respond right now. Please contact us via WhatsApp 📱."
    );
  } catch (error) {
    console.error("Portfolio AI Error:", error);
    throw new Error(
      "⚠️ I'm having technical issues right now. Please reach us on WhatsApp (+254711140899) or email for quick help.",
    );
  }
};

/**
 * Check if AI service is available
 */
export const checkAIHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/portfolio/ai/health`);
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("AI Health Check Error:", error);
    return false;
  }
};
