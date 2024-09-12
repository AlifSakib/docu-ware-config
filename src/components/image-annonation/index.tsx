// @ts-nocheck
import React, { useCallback, useState } from "react";
import ReactFlow, { addEdge, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [];
const initialEdges = [];

const NodeEditorWithImageBackground = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [drawingMode, setDrawingMode] = useState(null); // Tracks selected drawing mode
  const [isDrawing, setIsDrawing] = useState(false); // Tracks whether user is drawing
  const [rectStart, setRectStart] = useState(null); // Start point of rectangle
  const [rectEnd, setRectEnd] = useState(null); // End point of rectangle

  console.log("nodes", nodes, "edges", edges, rectStart, rectEnd);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleMouseDown = (event) => {
    if (!drawingMode) return;
    setIsDrawing(true);
    const rect = event.currentTarget.getBoundingClientRect();
    setRectStart({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setRectEnd(null); // Reset the end point
  };

  const handleMouseMove = (event) => {
    if (!isDrawing || !drawingMode) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setRectEnd({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseUp = () => {
    if (!isDrawing || !drawingMode) return;
    setIsDrawing(false);

    // Calculate width and height
    const width = Math.abs(rectEnd.x - rectStart.x);
    const height = Math.abs(rectEnd.y - rectStart.y);

    if (width > 0 && height > 0) {
      // Create a new node from the drawn rectangle
      const newNode = {
        id: `${nodes.length + 1}`,
        type: "default",
        data: { label: `${drawingMode} Node` },
        position: {
          x: Math.min(rectStart.x, rectEnd.x),
          y: Math.min(rectStart.y, rectEnd.y),
        },
        // Set explicit width and height for the node style
        style: {
          width: `${width}px`,
          height: `${height}px`,
          border: "1px solid #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.7)",
        },
        // Ensure correct width and height are set for the ReactFlow node dimensions
        __rf: {
          width: width,
          height: height,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    }

    setDrawingMode(null); // Reset drawing mode
    setRectStart(null);
    setRectEnd(null);
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      {/* Background Image with Event Handlers */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Set a higher z-index for event handling
          cursor: drawingMode ? "crosshair" : "default", // Change cursor during drawing
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />

      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure image is behind the nodes
          backgroundImage:
            "url(https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Drawing buttons */}
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }}>
        <button onClick={() => setDrawingMode("Text")}>Text</button>
        <button onClick={() => setDrawingMode("Barcode")}>Barcode</button>
        <button onClick={() => setDrawingMode("Anchor")}>Anchor</button>
      </div>

      {/* React Flow Container */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={{ background: "transparent" }} // Transparent background for React Flow
      ></ReactFlow>

      {/* Drawing Rectangle Preview */}
      {isDrawing && rectStart && rectEnd && (
        <div
          style={{
            position: "absolute",
            border: "2px dashed #333",
            background: "rgba(0, 0, 255, 0.1)",
            left: Math.min(rectStart.x, rectEnd.x),
            top: Math.min(rectStart.y, rectEnd.y),
            width: Math.abs(rectEnd.x - rectStart.x),
            height: Math.abs(rectEnd.y - rectStart.y),
            pointerEvents: "none",
            zIndex: 2, // Ensure preview is above everything
          }}
        />
      )}
    </div>
  );
};

export default NodeEditorWithImageBackground;
