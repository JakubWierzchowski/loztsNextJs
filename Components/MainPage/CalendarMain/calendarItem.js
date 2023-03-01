import React, { useState } from "react";
import styles from "./calendarItem.module.scss";
import moment from "moment";
import { motion } from "framer-motion";
const myDate = moment().format("YYYY-MM-DD");
const CalendarItem = ({ details }) => {
  const [isInView, setIsInView] = useState(false);
  // const [open, setOpen] = useState();
  return (
    <>
      {details.map((item, index) =>
        moment(item.datamoment).isAfter(myDate) ? (
          <motion.div
            whileInView={() => {
              setIsInView(true);
              return {};
            }}
            key={index}
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? 50 : -50,
              translateY: -50,
            }}
            animate={isInView && { opacity: 1, translateX: 0, translateY: 0 }}
            // whileInView={{ }}
            transition={{
              duration: 0.2,
              delay: index * 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className={styles.eventsPart}>
              <div className={styles.eventsPartDate}>
                <div className={styles.eventsPartDate__day}>{item.data}</div>
              </div>
              <div className={styles.eventsPartContent}>
                <h4 className={styles.h4}>{item.title}</h4>
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )
      )}
    </>
  );
};
export default CalendarItem;
