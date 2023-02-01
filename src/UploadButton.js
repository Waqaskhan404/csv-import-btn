const UploadButton = ({ showModal, setShowModal, handleFileUpload, handleImport }) => (
  <div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setShowModal(true)}>Upload</button>
    {showModal && (
      <div className="flex justify-center">
        <div className='fixed top-20 w-72 md:w-1/2 lg:w-1/3 z-50'>
          <div className="modal bg-white p-5 border-2">
            <div className="modal-content">
              <input type="file" onChange={handleFileUpload} />
              <div className='space-x-1 p-5'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleImport}>Import</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
export default UploadButton
