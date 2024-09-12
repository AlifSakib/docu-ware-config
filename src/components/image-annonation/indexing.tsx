// import Image from "next/image";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import document from "../../../../../../../../assets/document-screen-shot.png";
// import { toast } from "sonner";
// import {
//   setIndexing,
//   setIndexingOCRType,
// } from "@/redux/features/capture/document-processing/document-processing-slice";
// import { RiText } from "react-icons/ri";
// import { CiCircleRemove } from "react-icons/ci";
// import PencilIcon from "@/base-components/common/icons/pencil";
// import TrashIcon from "@/base-components/common/icons/trash";
// import { FaAnchor, FaBarcode } from "react-icons/fa6";

// // Define types for shape areas
// type ShapeArea = { x: number; y: number; width: number; height: number };

// const Indexing = () => {
//   const { zoomLevel } = useSelector(
//     (state: RootState) => state.documentProcessingView
//   );
//   const { indexing, splitting, letterhead } = useSelector(
//     (state: RootState) => state.createDocumentProcessing.processing
//   );

//   console.log(indexing.ocr.type); // Log the OCR type to the console

//   type OCRType = "text" | "barcode" | "anchor";
//   const selectedOCRType: OCRType = indexing.ocr.type as OCRType; // Get the OCR type from Redux state
//   const [shapes, setShapes] = useState<{
//     text: ShapeArea[];
//     barcode: ShapeArea[];
//     anchor: ShapeArea[];
//   }>({
//     text: [],
//     barcode: [],
//     anchor: [],
//   });

//   const [drawing, setDrawing] = useState<boolean>(false);
//   const [currentShape, setCurrentShape] = useState<ShapeArea | null>(null);
//   const dispatch = useDispatch();

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!indexing.type) return;
//     const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//     const startX = e.clientX - rect.left;
//     const startY = e.clientY - rect.top;
//     setDrawing(true);
//     setCurrentShape({ x: startX, y: startY, width: 0, height: 0 });
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!indexing.type) return;
//     if (!drawing || !currentShape) return;
//     const rect = (e.target as HTMLDivElement).getBoundingClientRect();
//     const endX = e.clientX - rect.left;
//     const endY = e.clientY - rect.top;
//     const width = endX - currentShape.x;
//     const height = endY - currentShape.y;

//     setCurrentShape({ ...currentShape, width, height });
//   };

//   const handleMouseUp = () => {
//     if (!indexing.type) return;
//     if (drawing && currentShape) {
//       setShapes((prevShapes) => ({
//         ...prevShapes,
//         [selectedOCRType]: [...prevShapes[selectedOCRType], currentShape],
//       }));
//     }
//     setDrawing(false);
//     setCurrentShape(null);
//     dispatch(
//       setIndexingOCRType({
//         type: selectedOCRType,
//         active: true,
//         selectedType: "",
//       })
//     );
//   };

//   const handleDelete = () => {
//     setShapes((prevShapes) => ({
//       ...prevShapes,
//       [selectedOCRType]: prevShapes[selectedOCRType].slice(0, -1),
//     }));
//     toast.success("Removed successfully!");
//   };

//   return (
//     <div className="relative w-full h-full">
//       {/* Document Image with drawing capability */}
//       <div
//         className={`absolute top-0 left-0 w-full h-full ${
//           indexing.type ? "cursor-crosshair" : "cursor-auto"
//         }`}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       >
//         <Image
//           src={document}
//           alt="Selectable Document"
//           style={{
//             pointerEvents: "none",
//             scale: zoomLevel,
//           }}
//         />

//         {/* Render drawn shapes for the selected OCR type */}
//         {shapes[selectedOCRType]?.map((shape, index) => (
//           <div
//             key={index}
//             className="absolute border-2 border-dashed border-blue-500 "
//             style={{
//               left: shape.x,
//               top: shape.y,
//               width: shape.width,
//               height: shape.height,
//               background: "rgba(0, 0, 255, 0.1)",
//             }}
//           >
//             <div
//               className="absolute border border-blue-500"
//               style={{
//                 right: -20,
//                 top: 4,
//                 width: "20px",
//                 height: 1,
//               }}
//             />
//             <div
//               className="absolute cursor-pointer"
//               style={{
//                 right: -40,
//                 top: -2,
//                 width: 0,
//                 height: 0,
//                 borderTop: "8px solid transparent", // Adjust the size
//                 borderBottom: "8px solid transparent", // Adjust the size
//                 borderLeft: "20px solid blue", // Adjust the color and size
//               }}
//             />
//             <div className="absolute top-1/2 -left-8 transform -translate-x-1/2 -translate-y-1/2">
//               {
//                 {
//                   text: <RiText className="w-6 h-6 text-blue-500" />,
//                   barcode: <FaBarcode className="w-6 h-6 text-blue-500" />,
//                   anchor: <FaAnchor className="w-6 h-6 text-blue-500" />,
//                 }[selectedOCRType]
//               }
//             </div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <CiCircleRemove className="w-6 h-6 text-red-500 cursor-pointer" />
//             </div>
//             <div
//               onClick={() => handleDelete()}
//               className="absolute top-1/2 right-3 transform -translate-x-1/2 -translate-y-1/2"
//             >
//               <TrashIcon className="w-4 h-4  cursor-pointer" />
//             </div>
//             <div className="absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2">
//               <PencilIcon className="w-4 h-4  cursor-pointer" />
//             </div>
//           </div>
//         ))}

//         {/* Render the current shape being drawn */}
//         {currentShape && (
//           <div
//             className="absolute border border-red-500"
//             style={{
//               left: currentShape.x,
//               top: currentShape.y,
//               width: currentShape.width,
//               height: currentShape.height,
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Indexing;
