import React from "react";
// @ts-ignore
import profilePicture from "../../../static/assets/images/bio/myimage.jpg";

const About = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="rigth-column">
        <p>
          Consequatur, deserunt rem. Quisquam, consequatur commodi quibusdam
          soluta perspiciatis aliquam harum nobis porro quas rem explicabo
          magni! Facilis, vel qui non ad cumque voluptatibus facere, dolores
          atque veniam, reiciendis at. Quos voluptatibus, voluptates praesentium
          earum quia corrupti ipsa delectus quibusdam aut ad sequi omnis placeat
          libero labore magni officiis adipisci cupiditate tenetur obcaecati
          tempora eaque modi nihil! Mollitia, dignissimos dolorum. Impedit
          quaerat inventore temporibus perferendis ex adipisci molestias eos
          deleniti nostrum, tenetur aliquid, iste fugiat, dolorum dignissimos
          repellendus voluptates! Debitis, quae? Consequatur perspiciatis vel
          dignissimos, totam fugit vero dolorum facilis. Illum, repellendus
          dolore eum id cumque est iusto aut fugit. Molestias dolorem aliquid
          cupiditate, alias explicabo magni, facere deserunt deleniti ad
          voluptatem, soluta incidunt.
        </p>
      </div>
    </div>
  );
};

export default About;
