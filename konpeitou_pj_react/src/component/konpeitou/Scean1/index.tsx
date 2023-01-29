// import Image from "next/image";
import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

import CSS from "../konpeitou.module.css";

export const Scean1 = ({
  setSceanCount,
}: {
  setSceanCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { time, start, pause, reset, status } = useTimer();

  useEffect(() => {
    start();
  }, [start]);
  console.log("Scean1", { time }); // 出力: 0

  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <div style={{ width: "100%", display: "block", textAlign: "center" }}>
        <Image
          src="/image/konpeitou/シュガラブちゃんA.png"
          alt="Picture of the author"
          className={
            CSS.ImageCommon +
            " " +
            CSS.Scean1 +
            " " +
            `${isClick && CSS.rotateTest180}`
          }
          onMouseUp={() => {
            if (!isClick) {
              setIsClick(true);
              reset();
              console.log("kurikku");
            } else {
              setSceanCount(1);
            }
          }}
        >
          {/* <Image
            src="/image/konpeitou/シュガラブちゃんA.png"
            alt="Picture of the author"
            // fill
          /> */}
        </Image>
      </div>
      <div className={CSS.scean1SubTitleText}>コンペイトウ占い</div>
      <div className={CSS.scean1ClickText}>
        シュガラブちゃんをクリックしてね
      </div>
    </>
  );
};
