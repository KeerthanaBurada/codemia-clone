import { useState } from "react";
import { analyzeWithAI } from "../services/aiService";

export default function AIChat({ diagram }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeDiagram = async () => {
    if (!diagram) {
      setResponse("Please click Save Diagram first.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeWithAI(diagram);

      setResponse(result);
    } catch (error) {
      console.error(error);
      setResponse("Failed to analyze.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg mt-6">
      <button
        onClick={analyzeDiagram}
        className="bg-purple-600 px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Design"}
      </button>

      <div className="mt-4 whitespace-pre-wrap text-white">{response}</div>
    </div>
  );
}
