import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

import CSS from "../konpeitou.module.css";

export const Scean5 = ({
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
  console.log("Scean5", { time }); // 出力: 0

  const [isClick, setIsClick] = useState(false);

  const conpeitou_image = [
    {
      path: "/image/omikuji/①red(title).png",
      conpeitou_path: "/image/konpeitou/赤色のコンペイトウ.png",
      text: "赤色のコンペイトウ",
    },

    {
      path: "/image/omikuji/②orange(title).png",
      conpeitou_path: "/image/konpeitou/オレンジ色のコンペイトウ.png",
      text: "オレンジいろのこんぺいとう",
    },
    {
      path: "/image/omikuji/③yellow(title).png",
      conpeitou_path: "/image/konpeitou/きいろのコンペイトウ.png",
      text: "きいろのコンペイトウ",
    },
    {
      path: "/image/omikuji/④green(title).png",
      conpeitou_path: "/image/konpeitou/きみどり色のコンペイトウ.png",
      text: "きみどり色のコンペイトウ",
    },
    {
      path: "/image/omikuji/⑤blue(title).png",
      conpeitou_path: "/image/konpeitou/みずいろのコンペイトウ.png",
      text: "みずいろのコンペイトウ",
    },
    {
      path: "/image/omikuji/⑥purple(title).png",
      conpeitou_path: "/image/konpeitou/むらさき色のコンペイトウ.png",
      text: "むらさき色のコンペイトウ",
    },
    {
      path: "/image/omikuji/⑦pink(title).png",
      conpeitou_path: "/image/konpeitou/ピンク色のコンペイトウ.png",
      text: "ピンク色のコンペイトウ",
    },
  ];

  return (
    <>
      <div className={CSS.scean1SubTitleText}>今日のあなたの運勢は。。</div>

      {time > 1 && (
        <>
          <Image
            alt="Screen5_conpeitou1"
            src={conpeitou_image[conpeitouRandom].conpeitou_path}
            style={{
              width: "50px",
              left: "10%",
              top: "-2vh",
              animationDelay: "150ms",
            }}
            className={CSS.conpaitouAnimationSwing}
          />
          <Image
            alt="Screen5_conpeitou2"
            src={conpeitou_image[conpeitouRandom].conpeitou_path}
            style={{
              width: "50px",
              left: "20%",
              top: "-10vh",
              animationDelay: "6500ms",
            }}
            className={CSS.conpaitouAnimationSwing}
          />
          <Image
            alt="Screen5_conpeitou3"
            src={conpeitou_image[conpeitouRandom].conpeitou_path}
            style={{
              width: "50px",
              left: "30%",
              top: "-10vh",
              animationDelay: "2500ms",
            }}
            className={CSS.conpaitouAnimationSwing}
          />
          <Image
            alt="Screen5_conpeitou3"
            src={conpeitou_image[conpeitouRandom].conpeitou_path}
            style={{
              width: "50px",
              left: "80%",
              top: "-10vh",
              animationDelay: "3500ms",
            }}
            className={CSS.conpaitouAnimationSwing}
          />
          <Image
            alt="Screen5_conpeitou4"
            src={conpeitou_image[conpeitouRandom].conpeitou_path}
            style={{
              width: "50px",
              left: "70%",
            }}
            className={CSS.conpaitouAnimationSwing}
          />

          <div style={{ width: "100%", display: "block", textAlign: "center" }}>
            <Image
              alt="Screen5_main"
              src={conpeitou_image[conpeitouRandom].path}
              className={CSS.ImageCommon}
              onMouseUp={() => {
                if (!isClick && time > 1) {
                  setSceanCount(5);
                  setIsClick(true);
                }
              }}
            />
          </div>
          {time > 1 && (
            <div className={CSS.scean1ClickText}>クリックで次へ</div>
          )}
        </>
      )}
    </>
  );
};
