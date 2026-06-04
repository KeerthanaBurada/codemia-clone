import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useCallback } from "react";

const nodeStyle = {
  background: "#ffffff",
  color: "#000000",
  width: 140,
  textAlign: "center",
  padding: "10px",
  border: "2px solid #333",
  borderRadius: "8px",
  fontWeight: "bold",
};

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Client",
    },
    style: nodeStyle,
  },
];

const initialEdges = [];

const NODE_TYPES = ["Client", "Server", "Database", "Cache", "Load Balancer"];

export default function Canvas({ setDiagram }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const addNode = (label) => {
    setNodes((nds) => [
      ...nds,
      {
        id: Date.now().toString(),
        position: {
          x: Math.random() * 500,
          y: Math.random() * 300,
        },
        data: {
          label,
        },
        style: nodeStyle,
      },
    ]);
  };

  const saveDiagram = () => {
    const diagram = {
      nodes,
      edges,
    };

    console.log("Diagram Saved:");
    console.log(diagram);

    setDiagram(diagram);
  };

  return (
    <div>
      {/* Node Buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {NODE_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => addNode(type)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={saveDiagram}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded mb-4"
      >
        Save Diagram
      </button>

      {/* Debug */}
      <div className="mb-2 text-sm text-gray-300">
        Nodes: {nodes.length} | Edges: {edges.length}
      </div>

      {/* Canvas */}
      <div className="h-[500px] border border-gray-700 rounded bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
