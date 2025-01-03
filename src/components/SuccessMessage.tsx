
interface SuccessMessageProps {
  onClose: () => void;  // Accept the onClose prop
}

function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-green-500">Success!</h2>
        <p className="mt-4 text-gray-700">The member has been successfully added.</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={onClose}  // Call onClose when the button is clicked
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
