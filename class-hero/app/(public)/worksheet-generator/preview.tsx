import React, { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { PreviewProps } from "@/lib/definitions"
import { RefElement } from "@/lib/definitions"

export const Preview = forwardRef<RefElement, PreviewProps>(
    ({ children, onClick }, ref) => {
        return (

            <div className="w-2/5 flex flex-col items-center bg-red previewContainer">
                <h3>Preview</h3>
                <div ref={ref} className="w-full h-45 bg-white texttypecontainer">
                    {children}
                </div>
                <Button onClick={onClick} variant="outline" className="w-1/2 texinputBtn">Download</Button>
            </div>


        );
    }
);

