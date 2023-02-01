import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

const ImportCsv = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleImport = async () => {
    if (!file) {
      return;
    }

    Papa.parse(file, {
      complete: async (results) => {
        const data = results.data;
        console.log(data)
        return data;
      //   try {
      //     const response = await axios.post('/api/Attendenceauth/add', { data });
      //     console.log(response.data);
      //   } catch (error) {
      //     console.error(error);
      //   }
      },
    });
  };
  const data=handleImport();

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleImport}>Import</button>
      

    </div>
  );
};

export default ImportCsv;
