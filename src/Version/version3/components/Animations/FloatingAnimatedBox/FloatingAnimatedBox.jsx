

const FloatingAnimatedBox = ({ color, font }) => {
  const baseClasses =
    "animate-bounce flex items-center justify-center rounded-full";

  return (
    <div
      className={`${baseClasses} absolute bottom-10 right-10 w-[60px] h-[60px] bg-${color}-800`}
    >
      <div
        className={`${baseClasses} w-[55px] h-[55px] bg-${color}-700`}
      >
        <div
          className={`${baseClasses} w-[50px] h-[50px] bg-${color}-600`}
        >
          <div
            className={`${baseClasses} w-[45px] h-[45px] bg-${color}-500`}
          >
            <div
              className={`${baseClasses} w-[40px] h-[40px] bg-${color}-400`}
            >
              <div
                className={`${baseClasses} w-[35px] h-[35px] bg-${color}-300`}
              >
                <div
                  className={`${baseClasses} w-[30px] h-[30px] bg-${color}-200`}
                >
                  <div
                    className={`${baseClasses} w-[25px] h-[25px] bg-${color}-100`}
                  >
                    <div
                      className={`${baseClasses} w-[20px] h-[20px] bg-${color}-50`}
                    >
                      <div className="animate-spin flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        <span className={`${font}`}>A</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingAnimatedBox;
