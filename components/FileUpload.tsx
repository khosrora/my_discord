'use client'
import React from 'react'
import { UploadDropzone } from '@/lib/uploadthing'


interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: 'messageFile' | 'serverImage'
}

function FileUpload({
    onChange,
    value,
    endpoint
}: FileUploadProps) {
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    )
}

export default FileUpload