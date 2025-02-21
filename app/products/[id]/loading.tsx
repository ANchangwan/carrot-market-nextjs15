import {PhotoIcon} from "@heroicons/react/24/outline";

export default function Loading() {
    return (
        <div className="animate-pulse p-5
        flex flex-col gap-5
        ">
            <div className="aspect-square border-neutral-700 border-4 rounded-md border-dashed
            flex items-center justify-center p-5 text-neutral-700
            ">
                <PhotoIcon className="h-28" />
            </div>
            <div className="flex gap-2 items-center">
                <div className="size-14 rounded-full bg-neutral-700"/>
                <div className="flex flex-col gap-1">
                    <div className="h-5 w-40 bg-neutral-700 rounded-md"/>
                    <div className="h-5 w-20 bg-neutral-700 rounded-md"/>
                </div>
            </div>
            <div className="h-8 w-80 rounded-md bg-neutral-700"></div>
        </div>
    )
}