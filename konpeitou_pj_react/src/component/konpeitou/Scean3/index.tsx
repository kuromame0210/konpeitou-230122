import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

import CSS from "../konpeitou.module.css";

export const Scean3 = ({
  setSceanCount,
  conpeitouRandom,
}: {
  setSceanCount: React.Dispatch<React.SetStateAction<number>>;
  conpeitouRandom: number;
}) => {
  const { time, start, pause, reset, status } = useTimer();

  useEffect(() => {
    start();
  }, [start]);
  console.log("Scean3", { time }); // 出力: 0

  const [isClick, setIsClick] = useState(false);

  // const conpeitou_image_path = "public/image/omikuji/1-red(title).png";

  const conpeitou_image = [
    {
      path: "/image/omikuji/①red(title).png",
      text: "超幸運",
    },
    {
      path: "/image/omikuji/②orange(title).png",
      text: "成長運",
    },
    {
      path: "/image/omikuji/③yellow(title).png",
      text: "黄金吉",
    },
    {
      path: "/image/omikuji/④green(title).png",
      text: "平和運",
    },
    {
      path: "/image/omikuji/⑤blue(title).png",
      text: "仕事吉",
    },
    {
      path: "/image/omikuji/⑥purple(title).png",
      text: "夢運",
    },
    {
      path: "/image/omikuji/⑦pink(title).png",
      text: "恋吉",
    },
  ];

  return (
    <>
      <div style={{ width: "100%", display: "block", textAlign: "center" }}>
        <Image
          alt="Screen3"
          src={conpeitou_image[conpeitouRandom].path} //"/image/omikuji/1-red(title).png"
          className={CSS.ImageCommon}
          onMouseUp={() => {
            if (!isClick && time > 1) {
              setSceanCount(3);
              setIsClick(true);
            }
          }}
        />
      </div>
      <div className={CSS.scean1SubTitleText}>
        {conpeitou_image[conpeitouRandom].text}
      </div>
      {time > 1 && (
        <div className={CSS.scean1ClickText}>おみくじをクリックしてね</div>
      )}
    </>
  );
};
