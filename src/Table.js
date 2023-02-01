import React from "react";
import Modal2 from "../Model/Modal2";

const Table = ({ headers, data ,headerToPropMap}) => (
  <>  
    <table className="min-w-full">
      <thead className="bg-gray-600 text-white text-center">
        <tr className="text-center">
          {headers.map((header) => (
            <th scope="col" className="text-sm font-medium px-6 py-4" key={header}>{header}</th>
          ))}
          <th scope="col" className="text-sm font-medium px-6 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b hover:bg-gray-100 text-center">
            {headers.map((header) => (
              <React.Fragment key={`${row.ClientName}-${header}`}>
                <td className="text-black font-light px-6 py-4 whitespace-nowrap">{row[headerToPropMap[header]]}</td>
              </React.Fragment>
            ))}
            <td className="text-black font-light px-6 py-4 whitespace-nowrap"><Modal2 /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Table
