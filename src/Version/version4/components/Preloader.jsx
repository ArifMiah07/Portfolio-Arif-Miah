import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function Preloader({ children }) {
  const [isReady, setIsReady] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const hideLoader = () => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setIsReady(true),
      });
    };

    // animate loader in when mounted
    gsap.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );

    // if the page is already loaded (like during Vite HMR)
    if (document.readyState === "complete") {
      console.log("Already loaded (fast refresh)");
      hideLoader();
      return;
    }

    // otherwise wait for all assets to finish
    const handleAssetsLoaded = () => {
      console.log("All assets loaded");
      hideLoader();
    };
    window.addEventListener("load", handleAssetsLoaded);

    // cleanup
    return () => window.removeEventListener("load", handleAssetsLoaded);
  }, []);

  if (isReady) return children;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-2">Loading...</h1>
      <p className="text-gray-400 text-sm">Preparing assets</p>
    </div>
  );
}

Preloader.propTypes = {
  children: PropTypes.node.isRequired,
};
