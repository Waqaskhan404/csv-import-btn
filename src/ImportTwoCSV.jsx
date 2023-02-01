import React, { useState } from 'react';
import Papa from 'papaparse';
import UploadButton from "./UploadButton"
import Table from "./Table"
const ImportCsv = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([
    { ClientName: "Waqas Khan", Project:"ERp System", Deliverable: 2,Charges:"$25000",AmountPaid:"$10000",Deadline:"27/12/2023",Status:"Working" },
    { ClientName: "Waseem Khan", Project:"Data Science ", Deliverable: 3,Charges:"$20000",AmountPaid:"$15000",Deadline:"15/09/2023",Status:"Complete" },

  ]);
  const [headers, setHeaders] = useState(["Client Name","Project","Deliverable","Charges","Amount Paid","Deadline","Status"]);
  const headerToPropMap = {
    "Client Name": "ClientName",
    "Project": "Project",
    "Deliverable": "Deliverable",
    "Charges":"Charges",
    "Amount Paid":"AmountPaid",
    "Deadline":"Deadline",
    "Status":"Status",
  };
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleImport = async () => {
    if (!file) {
      return;
    }
  
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        if (headers.length === 0) {
          setHeaders(Object.keys(results.data[0]));
        }
  
        setData([...data, ...results.data.filter((row) => Object.values(row).some(Boolean))]);
      },
    });

    // try {
    //   await axios.post('/api/data', data);
    // } catch (error) {
    //   console.error(error);
    // }
    


    setFile(null);
    setShowModal(false);
  };
  

  return (
    <div className='flex justify-center'>
      <div>
        <UploadButton showModal={showModal} setShowModal={setShowModal} handleFileUpload={handleFileUpload} handleImport={handleImport} />
        <Table headers={headers} data={data} headerToPropMap={headerToPropMap} />
      </div>
    </div>
  );
};

export default ImportCsv;
