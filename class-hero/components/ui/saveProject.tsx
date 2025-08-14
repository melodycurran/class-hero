// 'use client'
// import { Save } from "lucide-react";
// import { Button } from "./button";
// import { useCanvasInstance } from "./providerDiv";
// import CanvasContext from "@/context/worksheetEditorContext";
// import { useContext } from "react";
// import { updateProjectFields } from "@/lib/query";


// export default function SaveProject() {
//     const { canvasInit } = useCanvasInstance()
//     const canvas = useContext(CanvasContext)
//     const id = canvas?.projectId


//     async function handleSaveProject() {
//         const canvasInitToJson = canvasInit.toJSON()
//         if (id && canvasInitToJson) {
//             const response = await updateProjectFields(id, canvasInitToJson)

//         }

//         console.log('JSON', canvasInitToJson)
//         console.log(typeof id)
//         console.log('Context', canvas)
//     }

//     return (
//         <div>
//             <Button onClick={handleSaveProject}>
//                 <Save />Save
//             </Button>
//         </div>
//     )
// }