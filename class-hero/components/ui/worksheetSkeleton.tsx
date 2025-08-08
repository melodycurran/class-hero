import { Skeleton } from "./skeleton";

export default function WorksheetSkeleton() {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-3">
            <Skeleton className="h-1/2 w-1/2 rounded-xl" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
        </div>
    )
}