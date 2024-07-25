import moment from "moment";
import Link from "next/link";

import { Button } from "@/shadcn/components/ui/button";

export default function Home() {
  return (
    <div className={"grid gap-4"}>
      <Link href={"/yuebao"}>
        <Button>余额宝计算器</Button>
      </Link>
      <Link href={"/jwtParser"}>
        <Button>JWT Payload 解析器</Button>
      </Link>
    </div>
  );
}
