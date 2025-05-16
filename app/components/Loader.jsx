// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const Loader = ({ loading }) => {
//   const location = useLocation(); // to track location changes
//   console.log(location);
//   const [localLoading, setLocalLoading] = useState(loading);

//   useEffect(() => {
//     if (location.hash === "") setLocalLoading(true);
//     else setLocalLoading(false); // Show loader when route changes
//     // setLocalLoading(true);
//     const timer = setTimeout(() => {
//       setLocalLoading(false); // Hide loader after 1 second (or adjust time as needed)
//     }, 1000); // Adjust timeout duration as needed

//     return () => clearTimeout(timer); // Cleanup on unmount or route change
//   }, [location]);

//   return (
//     <>
//       {localLoading && (
//         <div
//           // className={`custom-loading ${loading || localLoading ? "show" : ""}`}
//           className={`custom-loading ${
//             loading || localLoading ? "show" : "hide"
//           }`}
//           // style={{
//           //   position: "fixed",
//           //   zIndex: "10000",
//           //   inset: "0px",
//           //   backgroundColor: "#fff",
//           //   display: "flex",
//           //   justifyContent: "center",
//           //   alignItems: "center",
//           // }}
//         >
//           <div className="spinner">
//             <img src="images/gwebpro_logo.png" alt="" />
//             <div className="disc"></div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Loader;
// ABOVE CODE IS OLD AND USED FOR THE REACT VERSION OF THE APP

export default function Loader() {
  return (
    <div className={`custom-loading ${"show"}`}>
      <div className="spinner">
        <img src="images/gwebpro_logo.png" alt="" />
        <div className="disc"></div>
      </div>
    </div>
  );
}
