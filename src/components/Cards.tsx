import React from "react";
import FlipCard from "./animata/card/flip-card";

const Cards = () => {
  return (
    <div className="px-16 flex flex-wrap gap-16 justify-center py-10 mx-auto max-w-7xl sm:px-6 lg:px-12">
      <FlipCard
        description="P2P Clouds making product, like NexSkill LMS. It is a perfect for businesses because it makes learning super simple."
        image=" https://p2pclouds.org/wp-content/uploads/2024/04/nexskill-100x100.png"
        rotate="y"
        subtitle="LMS Application"
        title="LMS Application"
      />
      <FlipCard
        description="P2P Clouds making product, like NexSkill LMS. It is a perfect for businesses because it makes learning super simple."
        image=" https://p2pclouds.org/wp-content/uploads/2024/04/Navy-blue-Crm-100x100.png.webp"
        rotate="y"
        subtitle="CRM Application"
        title="CRM Application"
      />
      <FlipCard
        description="P2P Clouds making product, like NexSkill LMS. It is a perfect for businesses because it makes learning super simple."
        image="https://p2pclouds.org/wp-content/uploads/2024/04/ms_1-removebg-preview.png.webp"
        rotate="y"
        subtitle="MS Future"
        title="MS Future"
      />
    </div>
  );
};

export default Cards;
