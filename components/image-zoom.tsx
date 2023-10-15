"use client"
/* eslint-disable */
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { GoDownload} from "react-icons/go"

interface ImageZoomProps {
    alt: string
    src: string
    width?: number
    downloadable?: boolean
}

export default function ImageZoom({ alt, src, width, downloadable }: ImageZoomProps) {
    const download = (e: any )=> {
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
    return (
        <article className='relative'>
            
            <Zoom>
            <img
                alt={alt}
                src={src}
                width={width || undefined}
            />
            
            </Zoom>
            {
                downloadable && (
                    <a
                        className='absolute bottom-0 right-0 text-lg'
                        href={src}
                        download
                        // onClick={e => download(e)}
                    >
                        <GoDownload />
                    </a>
                )
            }
        </article>
    )
}

