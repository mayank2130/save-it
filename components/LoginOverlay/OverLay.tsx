// components/Overlay.tsx
import React from "react";
import styles from "./Overlay.module.css";

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.content} p-8 sm:p-6`}>
        <div className="flex justify-end">
          <button
            className="bg-slate-700 text-white mb-10 p-2 rounded-full"
            onClick={onClose}
          >
            <p className="text-sm pl-2 pr-2">Close</p>
          </button>
        </div>
        <h2 className="text-2xl mb-3 text-black text-center">
          Create an Account
        </h2>
        <h2 className="text-sm mb-10 text-black text-center">
          or sign in by entering your number
        </h2>
        <input
          type="text"
          placeholder="Input 1"
          className="mb-4 p-2 border rounded w-full"
        />
        <button className="bg-black text-white p-3 rounded-3xl w-56">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Overlay;
