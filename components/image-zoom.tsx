"use client"
/* eslint-disable */
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface ImageZoomProps {
    alt: string
    src: string
    width?: number
}

export default function ImageZoom({ alt, src, width }: ImageZoomProps) {
    return (
        <Zoom>
            <img
                alt={alt}
                src={src}
                width={width || undefined}
            />
        </Zoom>
    )
}

