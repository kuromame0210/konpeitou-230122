import { Image } from "@chakra-ui/react";
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

  // const conpeitou_image_path = "public/image/omikuji/1-red(title).png";

  const conpeitou_image = [
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/1-red(content).png",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/2-orange(content).png",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/3-yellow(content).png",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/4-green(content).png",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/5-blue(content).png",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/6-purple(content).png",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/7-pink(content).png",
    },
  ];

  return (
    <>
      <div className={CSS.scean1SubTitleText}>占い詳細結果</div>
      <div style={{ width: "100%", display: "block", textAlign: "center" }}>
        <Image
          alt="Screen4"
          src={conpeitou_image[conpeitouRandom].path} //"/image/omikuji/①red(content).png"
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
