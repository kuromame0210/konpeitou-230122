import React, { useEffect } from "react";
import { useTimer } from "use-timer";

import CSS from "../konpeitou.module.css";

export const Scean6 = ({
  setSceanCount,
}: {
  setSceanCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { time, start, pause, reset, status } = useTimer();

  useEffect(() => {
    start();
  }, [start]);

  return (
    <>
      <>
        <div
          style={{
            width: "80%",
            display: "grid",
            margin: "auto",
          }}
        >
          <a
            style={{
              minWidth: "200px",
              width: "30%",
              margin: "auto",
              marginTop: "5%",
              backgroundColor: "#FF99CC",
            }}
            onClick={() => {
              setSceanCount(0);
            }}
            className={CSS.btn3}
          >
            ひきなおす！
          </a>

          <a
            style={{
              minWidth: "200px",
              width: "30%",
              margin: "auto",
              marginTop: "5%",
              backgroundColor: "#CDFF98",
            }}
            href="https://konpeitouyasan.com/"
            target="_blank"
            className={CSS.btn3}
            rel="noreferrer"
          >
            商品を見る！
          </a>
        </div>
      </>
    </>
  );
};
