import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

import CSS from "../konpeitou.module.css";

export const Scean4 = ({
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
  console.log("Scean4", { time }); // 出力: 0

  const [isClick, setIsClick] = useState(false);

  const conpeitou_image_path = "public/image/omikuji/1-red(title).png";

  const conpeitou_image = [
    {
      path: "/image/omikuji/①red(content).png",
    },
    {
      path: "/image/omikuji/②orange(content).png",
    },
    {
      path: "/image/omikuji/③yellow(content).png",
    },
    {
      path: "/image/omikuji/④green(content).png",
    },
    {
      path: "/image/omikuji/⑤blue(content).png",
    },
    {
      path: "/image/omikuji/⑥purple(content).png",
    },
    {
      path: "/image/omikuji/⑦pink(content).png",
    },
  ];

  return (
    <>
      <div className={CSS.scean1SubTitleText}>占い詳細結果</div>
      <div style={{ width: "100%", display: "block", textAlign: "center" }}>
        <img
          src={location.pathname + conpeitou_image[conpeitouRandom].path} //"/image/omikuji/①red(content).png"
          className={CSS.ImageCommon}
          onMouseUp={() => {
            if (!isClick && time > 1) {
              setSceanCount(4);
              setIsClick(true);
            }
          }}
        />
      </div>
      {time > 1 && <div className={CSS.scean1ClickText}>クリックで次へ</div>}
    </>
  );
};
