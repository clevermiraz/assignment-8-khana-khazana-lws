export default function ShareModal({ isOpen, onClose, children }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-lg overflow-hidden z-50 w-3/4 md:w-1/2">
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-4">Share</h2>
                            {children}
                        </div>
                        <div className="flex justify-end p-4 bg-gray-100">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
