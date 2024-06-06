// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <div className="flex flex-wrap justify-center gap-2  ">
//           <Button
//             variant="primary"
//             href={props.ghLink}
//             target="_blank"
//             className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//           >
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <BsGithub className="mr-2" />
//               {props.isBlog ? "Blog" : "GitHub"}
//             </div>
//           </Button>
//           {props.demoLink && (
//             <Button
//               variant="primary"
//               href={props.demoLink}
//               target="_blank"
//               className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//             >
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <CgWebsite className="mr-2" />
//                 {"Demo"}
//               </div>
//             </Button>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProjectCards;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view flex flex-col h-full">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="flex flex-col flex-grow">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="flex-grow" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="flex justify-center gap-2 mt-auto">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BsGithub className="mr-2" />
              {props.isBlog ? "Blog" : "GitHub"}
            </div>
          </Button>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <CgWebsite className="mr-2" />
                {"Demo"}
              </div>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
