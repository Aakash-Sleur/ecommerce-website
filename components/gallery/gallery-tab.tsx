import { Image } from "@/types";
import { Tab } from '@headlessui/react'

import { cn } from "@/libs/utils";
import NextImage from "next/image";

interface GalleryTabProps {
    image: Image
}

const GalleryTab = ({
    image
}: GalleryTabProps) => {
    return (
        <Tab
            className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'
        >
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <NextImage
                            fill
                            src={image.url}
                            alt="gallery-image"
                            className="object-cover origin-center"
                        />
                    </span>
                    <span className={cn(
                        'absolute inset-0 rounded-md ring-2 ring-offset-2',
                        selected ? 'ring-black' : 'ring-transparent'
                    )} />
                </div>
            )}
        </Tab>
    );
}

export default GalleryTab;