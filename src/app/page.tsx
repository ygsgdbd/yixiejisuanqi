"use client";

import moment from "moment";
import Link from "next/link";
import { useEffectOnce } from "react-use";

export default function Home() {
  useEffectOnce(() => {
    moment.locale("zh-CN");
  });

  return (
    <div>
      <Link href={"/yuebao"}>
        <button>余额宝</button>
      </Link>
    </div>
  );
}
