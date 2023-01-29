import { Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

import CSS from "./konpeitou.module.css";
import { Logo } from "./Logo/index";
import { Scean1 } from "./Scean1/index";
import { Scean2 } from "./Scean2/index";
import { Scean3 } from "./Scean3";
import { Scean4 } from "./Scean4/index";
import { Scean5 } from "./Scean5/index";
import { Scean6 } from "./Scean6/index";

/*
  1秒後、3秒かけてopacityを0にする。
  →0になった時に、
  
  次、BGMをスタートさせる
    次、シュガラブちゃんを表示、その後に、クリック待ち状態にする。
  で、クリックすると回転する
  ここでサウンドがなる
*/

/*
  またクリック待ちにする。
  ぽんっていうサウンド
  でおみくじを表示
  
  次にクリックで、おみくじの詳細を表示、説明を表示  

  そのあと、こんぺいとうが回りながら落ちてくる

  クリックすると、最後に商品ページもしくは戻るページ


  最後におみくじのランダム性を作る



  久しぶりに開いたりしたら開いた時にロゴを表示する。
  1時間くらいで更新する。
  localstrageで、LatestLogoDateと日付（時刻）とDisplayLogo
  これで差分が１時間くらいだったら、ロゴ表示
  開く度に日付を更新する。
*/

/*
  残っているタスクについて
  BGM系を鳴らす
  こんぺいとうの種類をいい感じにする
  ランダム系にする。

*/

export const Konpeitou: React.FC = () => {
  const { time, start, pause, reset, status } = useTimer();
  useEffect(() => {
    start();
  }, [start]);
  console.log({ time });

  const [sceanCount, setSceanCount] = useState<number>(0);
  console.log({ sceanCount });
  const [conpeitouRandom, setconpeitouRandom] = useState<number>(0);

  return (
    <>
      <Image
        alt="container"
        src="/image/background/コンペイトウ占い（背景）.JPG"
        className={CSS.container}
      />
      <div className={CSS.ContaintWrapper}>
        {/* <div className={CSS.LogoWrapper} /> */}

        {(() => {
          if (time < 4) return <Logo />;
          else if (time > 3 && sceanCount === 0)
            return <Scean1 setSceanCount={setSceanCount} />;
          else if (sceanCount === 1)
            return (
              <Scean2
                setSceanCount={setSceanCount}
                conpeitouRandom={conpeitouRandom}
                setconpeitouRandom={setconpeitouRandom}
              />
            );
          else if (sceanCount === 2)
            return (
              <Scean3
                setSceanCount={setSceanCount}
                conpeitouRandom={conpeitouRandom}
              />
            );
          else if (sceanCount === 3)
            return (
              <Scean4
                setSceanCount={setSceanCount}
                conpeitouRandom={conpeitouRandom}
              />
            );
          else if (sceanCount === 4)
            return (
              <Scean5
                setSceanCount={setSceanCount}
                conpeitouRandom={conpeitouRandom}
              />
            );
          else if (sceanCount === 5)
            return <Scean6 setSceanCount={setSceanCount} />;
          else return <p>C</p>;
        })()}
      </div>
    </>
  );
};
