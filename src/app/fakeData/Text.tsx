import { fakerZH_CN as faker } from "@faker-js/faker";
import { useEffect, useMemo, useState } from "react";
import { useCopyToClipboard } from "react-use";
import { toast } from "sonner";

import { Button } from "@/shadcn/components/ui/button";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { fakeData } from "@/utils/fakeData";

export default function Text() {
  const [str, setStr] = useState<string>(faker.lorem.words());
  const [, copy] = useCopyToClipboard();

  return (
    <div className={"grid gap-2"}>
      <Textarea readOnly value={str} />
      {str && (
        <small className={"text-muted-foreground"}>
          字符串长度：{str.length}
        </small>
      )}
      <div className={"flex items-center gap-2"}>
        {[4, 8, 16, 32, 48, 64, 96, 128, 256, 512, 1024].map((x) => (
          <Button
            key={x}
            onClick={() => {
              const words = faker.lorem.words(x);
              setStr(words);
              copy(words);
              toast.success("复制成功", {
                description: `单词数 ${x}, 字符串长度 ${words.length}`,
              });
            }}
            size={"sm"}
          >
            {x}
          </Button>
        ))}
      </div>
    </div>
  );
}
