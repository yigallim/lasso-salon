import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tabs = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui.",

  "Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim, numquam perferendis, modi exercitationem qui dolorem veritatis voluptate facilis error amet quidem ipsam architecto ducimus commodi expedita vero eligendi suscipit eius assumenda! Reprehenderit non pariatur dolore incidunt modi repellat doloribus doloremque reiciendis magni iusto, consectetur perferendis, minima earum error sunt distinctio voluptate laboriosam minus, fugit maxime! Ratione animi, non sapiente repudiandae porro ea? Dignissimos sunt non eaque quaerat excepturi, explicabo vel quod, nulla illum dolores, nesciunt veritatis quam obcaecati aliquid voluptas! Ad illum voluptate, quam omnis error perspiciatis possimus in vel libero tempore aperiam. Necessitatibus accusamus aperiam placeat aliquid laudantium.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, ipsa modi ducimus neque magnam quibusdam eius distinctio repellendus voluptatibus rem.",
];
const Test = () => {
  return (
    <div className="mt-12 h-screen section-container">
      <div className="relative *:bg-amber-200 flex">
        {tabs.map((tab, idx) => (
          <motion.div
            key={idx}
            layoutId={idx.toString()}
            style={{
              scale: 1 - idx * 0.1,
              top: idx * -20,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
              originY: 0,
              originX: 0.5,
            }}
            className="absolute top-0 left-0 right-0"
          >
            {tab}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Test;
