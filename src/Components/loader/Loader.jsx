import "./Loader.css";

export const Loader = ({ type = "default" }) => {
  switch (type) {
    case "pulse":
      return (
        <div className="loader-container">
          <div className="pulse-loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      );

    case "travel":
      return (
        <div className="loader-container">
          <div className="travel-loader">
            <div className="plane"></div>
            <div className="earth"></div>
          </div>
        </div>
      );

    default:
      return (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      );
  }
};
