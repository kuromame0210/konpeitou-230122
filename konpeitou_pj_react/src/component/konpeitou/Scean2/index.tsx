import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

import CSS from "../konpeitou.module.css";

//画像最適をそのうちやる

export const Scean2 = ({
  setSceanCount,
  conpeitouRandom,
  setconpeitouRandom,
}: {
  setSceanCount: React.Dispatch<React.SetStateAction<number>>;
  conpeitouRandom: number;
  setconpeitouRandom: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { time, start, pause, reset, status } = useTimer();

  useEffect(() => {
    start();
  }, [start]);
  console.log("Scean2", { time }); // 出力: 0

  const [isClick, setIsClick] = useState(false);

  const conpeitou_image = [
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/red-konpeitou.png",
      text: "赤色のコンペイトウ",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/orange-conpeitou.png",
      text: "オレンジいろのこんぺいとう",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/yellow-konpeitou.png",
      text: "きいろのコンペイトウ",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/greenyellow-konpeitou.png",
      text: "きみどり色のコンペイトウ",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/mizuiro-konpeitou.png",
      text: "みずいろのコンペイトウ",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/murasaki-konpeitou.png",
      text: "むらさき色のコンペイトウ",
    },
    {
      path: "http://curogames.sakura.ne.jp/konpeitou-web/pink-konpeitou.png",
      text: "ピンク色のコンペイトウ",
    },
  ];

  useEffect(() => {
    var random = Math.floor(Math.random() * conpeitou_image.length);
    setconpeitouRandom(random);
  }, [conpeitou_image.length, setconpeitouRandom]);

  console.log(conpeitou_image[conpeitouRandom]);

  return (
    <>
      <div style={{ width: "100%", display: "block", textAlign: "center" }}>
        <Image
          alt="Scean2"
          src={conpeitou_image[conpeitouRandom].path}
          className={CSS.ImageCommon}
          onMouseUp={() => {
            if (!isClick && time > 1) {
              setSceanCount(2);
              setIsClick(true);
            }
          }}
        />
      </div>
      <div className={CSS.scean1SubTitleText}>
        {conpeitou_image[conpeitouRandom].text}
      </div>
      {time > 1 && (
        <div className={CSS.scean1ClickText}>こんぺいとうをクリックしてね</div>
      )}
    </>
  );
};
