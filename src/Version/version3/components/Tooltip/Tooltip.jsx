import { useState } from "react";


const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Tooltip Trigger */}
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>

      {/* Tooltip Box */}
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1 bg-black text-white text-sm rounded shadow-md">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
