import { fa, Faker, fakerZH_CN as faker, zh_CN } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/shadcn/components/ui/button";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { fakeData } from "@/utils/fakeData";

export default function Text() {
  const fa = useMemo(
    () =>
      new Faker({
        locale: [zh_CN],
      }),
    [],
  );
  const [str, setStr] = useState<string>("");

  useEffect(() => {}, []);

  return (
    <div className={"grid gap-2"}>
      <Textarea readOnly value={str} />
      {str && (
        <small className={"text-muted-foreground"}>
          字符串长度: {str.length}
        </small>
      )}
      <div className={"flex items-center gap-2"}>
        {[4, 8, 16, 32, 48, 64, 96, 128, 256, 512, 1024].map((x) => (
          <Button
            key={x}
            onClick={() => {
              const newWords = fa.lorem.words(x);
              setStr(newWords);
              toast.success("复制成功", {
                description: `字符串长度: ${newWords.length}`,
              });
            }}
            size={"sm"}
          >
            单词 x{x}
          </Button>
        ))}
      </div>
    </div>
  );
}
