import React from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import useUploadFile from "./useUploadFile";

const UploadFile = ({ title }: { title: String }) => {
  const {} = useUploadFile();
  return (
    <div className="w-full text-center p-[10px]">
      <div className="pb-4 text-start font-light text-[16px]">{title}</div>
      <div className="border-[1px] border-dashed border-customOrange rounded-[10px]">
        <UploadDropzone
          content={{
            allowedContent({ ready, isUploading }) {
              if (!ready) return "Checking what you allow";
              if (isUploading) return "Seems like file is uploading";
              return `Supported formats : Jpeg, pdf`;
            },
            label() {
              return `Drag & Drop or choose file to upload`;
            },
          }}
          appearance={{
            button: "bg-borderGrey mb-2 text-[12px]",
            uploadIcon: "h-[40px] w-[40px] text-customOrange",
            allowedContent: "text-white text-[11px] font-light",
            label: "text-customOrange text-[14px] w-[100%] hover:text-white ",
            container: "flex justify-center items-center flex-column p-0 mt-0",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </div>
  );
};

export default UploadFile;