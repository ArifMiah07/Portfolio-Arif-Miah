import { Plus, Move, Copy, Pointer } from "lucide-react";
import { useEffect, useState } from "react";
import { FaICursor } from "react-icons/fa6";
// import iCursor from '../../../public/assets/icons8-cursor-64.png'

export const InteractiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("default");
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });

        const target = e.target;
        if (target.dataset.cursorType) {
          setCursorState(target.dataset.cursorType);
        } else if (
          ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "A"].includes(
            target.tagName
          )
        ) {
          setCursorState("text");
        } else {
          setCursorState("default");
        }
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const getCursorIcon = () => {
    const size = isClicking ? 35 : 40;
    const commonProps = {
      size,
      className: `text-black transition-transform ${
        isClicking ? "scale-90" : "scale-100"
      }`,
    };
    // < />
    switch (cursorState) {
      case "text":
        return <FaICursor {...commonProps} />;
      case "drag":
        return <Move {...commonProps} />;
      case "copy":
        return <Copy {...commonProps} />;
      case "add":
        return <Plus {...commonProps} />;
      default:
        return <Pointer {...commonProps} />;
    }
  };

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      <div
        className="fixed pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          willChange: "transform",
        }}>
        {getCursorIcon()}
      </div>
    </>
  );
};
