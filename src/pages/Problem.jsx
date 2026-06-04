import { useState } from "react";
import Canvas from "../components/Canvas";
import AIChat from "../components/AIChat";

function Problem() {
  const [diagram, setDiagram] = useState(null);

  return (
    <div className="bg-gray-950 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Design WhatsApp</h1>

      <Canvas setDiagram={setDiagram} />

      <div className="mt-8">
        <AIChat diagram={diagram} />
      </div>
    </div>
  );
}

export default Problem;
