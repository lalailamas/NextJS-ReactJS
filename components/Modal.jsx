function Modal({ object, closeModal }) {
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50 modal-overlay bg-gray-700 bg-opacity-50">
      <div className="modal bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
        <div className="modal-header px-4 py-3 bg-gray-200">
          <h2 className="text-xl font-semibold">Details for {object.name}</h2>
        </div>
        <div className="modal-body px-4 py-3 b">
          <ul className="text-gray-700">
            <li>ID: {object.id}</li>
            <li>EAN: {object.ean}</li>
            <li>Manufacture Date: {object.manufacture_date}</li>
            <li>Expiration Date: {object.expiration_date}</li>
            <li>Create at: {object.createdAt}</li>
          </ul>
        </div>
        <div className="modal-footer px-4 py-3 bg-gray-200">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
