"use client";

import { useState, useEffect, useRef } from "react";

export default function Popup() {
    const [isPopup, setIsPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPopup(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
      <>
      {isPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 shadow-lg max-w-sm w-full">
            <p className="mt-2 text-sm text-gray-600">
              This is a popup.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsPopup(false)}
                className="rounded bg-gray-200 px-3 py-1 text-sm"
              >
                Close
              </button>
              <button className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
                Yes!
              </button>
            </div>
          </div>
        </div>
      )}
      </>
    );
}
