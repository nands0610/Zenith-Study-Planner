import { useState } from "react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    if (!query.trim()) return;

    const userMessage = { text: query, sender: "user" };
    setMessages([...messages, userMessage]); // Add user query to chat
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("Failed to fetch response.");

      const data = await res.json();
      const botMessage = { text: data.response, sender: "bot" };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error querying chatbot:", error);
      setMessages([...messages, { text: "Error fetching response.", sender: "bot" }]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 flex flex-col">
      <h1 className="text-2xl font-semibold text-center mb-4">AI Chatbot</h1>

      {/* Chat Display */}
      <div className="h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-500">Thinking...</p>}
      </div>

      {/* Input Box */}
      <div className="mt-4 flex items-center gap-2">
        <textarea
          className="flex-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 resize-none"
          rows="2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          onClick={handleQuery}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
