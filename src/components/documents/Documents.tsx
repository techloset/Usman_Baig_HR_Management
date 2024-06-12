import React from "react";
import useDocuments from "./useDocuments";

const Documents = ({ display }: { display: string }) => {
  const {} = useDocuments();
  return (
    <div className={`${display}`}>
      <div>Documents</div>
    </div>
  );
};

export default Documents;
