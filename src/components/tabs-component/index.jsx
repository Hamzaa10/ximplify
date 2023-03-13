import React from "react";
import style from "./tabs.module.scss";

const TabsComponent = ({ tabs, active }) => {
  return (
    <div className={style.headContainer}>
      <div className={style.topper}>
        {tabs?.map((ele, index) => (
          <>
            {ele.name && (
              <p
                id={ele.id}
                key={index}
                className={`${active === index ? style.active : ""} `}
                onClick={ele.onClick}
              >
                {ele.name}
              </p>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
