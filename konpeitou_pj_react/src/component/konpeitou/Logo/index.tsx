import { Image } from "@chakra-ui/react";
// import Image from "next/image";
import React, { useEffect } from "react";
import { useTimer } from "use-timer";

// import LogoImage from "../../../../public/image/others/コンペイトウミュージアム-ロゴ.png";
import CSS from "../konpeitou.module.css";

export const Logo: React.FC = () => {
  const { time, start, pause, reset, status } = useTimer();

  useEffect(() => {
    start();
  }, [start]);
  console.log("LOGO", { time }); // 出力: 0

  let css_templete = "";
  if (time > 0.1) {
    css_templete = CSS.Logo_delay_opacity_1;
  } else if (time > 3.0) {
    css_templete = CSS.Logo_delay_opacity_0;
  }

  return (
    <>
      <Image
        className={
          CSS.ImageCommon +
          " " +
          CSS.Logo +
          " " +
          `${time > 2.0 && CSS.Logo_delay_opacity_0}`
        }
        src="/image/others/コンペイトウミュージアム-ロゴ.png"
        alt="ssssssss"
      />

      {/* <div
        className={
          CSS.ImageCommon +
          " " +
          CSS.Logo +
          " " +
          `${time > 2.0 && CSS.Logo_delay_opacity_0}`
        }
      /> */}
    </>
  );
};
