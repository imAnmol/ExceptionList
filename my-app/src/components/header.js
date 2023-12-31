import { Container,  AppBar, Toolbar } from "@mui/material";
import { ReactComponent as CompanyLogo } from "../assets/menu_logo_white.svg";
import React from "react";

const Header = () => {
  return (
    <Container>
      <AppBar
        sx={{
          position:"absolute",
          // paddingLeft:'4rem',
          boxShadow: "none !important",
          zIndex: -1,
        }}
      >
        <Toolbar
          sx={{
            background: "black",
          }}
        >
          <CompanyLogo
            width='100px'
          />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;























// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './header.css';

// function Header() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <a class="nav-link" href="/">
//                 Home{" "}
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="/">
//                 Profile
//               </a>
//             </li>
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle"
//                 href="/"
//                 id="navbarDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Master
//               </a>
//               <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a class="dropdown-item" href="/">
//                   Action
//                 </a>
//                 <a class="dropdown-item" href="/">
//                   Another action
//                 </a>
//                 <div class="dropdown-divider"></div>
//                 <a class="dropdown-item" href="/">
//                   Something else here
//                 </a>
//               </div>
//             </li>

//             <li class="nav-item">
//               <a class="nav-link" href="/">
//                 Reporting
//               </a>
//             </li>
//           </ul>
//           <form class="form-inline my-2 my-lg-0">
//             <input
//               class="form-control mr-sm-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//           </form>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;
