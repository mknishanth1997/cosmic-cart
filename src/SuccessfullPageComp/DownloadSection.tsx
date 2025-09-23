export default function DownloadSection({ onClick }) {
  return (
    <div className="flex-1 flex flex-col justify-center w-full max-w-xl sm:max-w-md mx-auto text-center p-4">
      <div className="space-y-4">
        <h2 className="text-gray-200 text-xl sm:text-2xl font-light">
          Your Official Ownership Document
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Print it, frame it, brag about it. This certificate proves you're the
          rightful ruler of an entire planet.
        </p>

        <div className="flex justify-center pt-2">
          <button
            onClick={onClick}
            className="flex items-center space-x-2 px-8 py-3 bg-teal-500 text-slate-950 font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-teal-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm sm:text-lg">Download PDF Certificate</span>
          </button>
        </div>

        <div className="pt-2">
          <p className="text-gray-500 text-xs italic">
            📄 High-Quality PDF &bull; 🖨️ Print Ready
          </p>
        </div>
      </div>
    </div>
  );
}
