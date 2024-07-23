"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Text } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLogger } from "react-use";
import { z } from "zod";

import { Button } from "@/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Checkbox } from "@/shadcn/components/ui/checkbox";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Switch } from "@/shadcn/components/ui/switch";
import { Textarea } from "@/shadcn/components/ui/textarea";

export default function JMS() {
  const [resultUrl, setResultUrl] = useState<URL>();

  const scheme = z.object({
    urlStr: z.string().url(),
    noSs: z.coerce.boolean(),
    noVmess: z.coerce.boolean(),
    useDomains: z.coerce.boolean(),
    exclude: z.array(z.number()).optional(),
  });

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof scheme>>({
    resolver: zodResolver(scheme),
    defaultValues: {
      noSs: false,
      noVmess: false,
      useDomains: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof scheme>) => {
    console.log(data);
    let url = new URL(data.urlStr);
    if (data.noVmess) {
      url.searchParams.append("novmess", "1");
    }
    if (data.noSs) {
      url.searchParams.append("noss", "1");
    }
    if (data.useDomains) {
      url.searchParams.append("usedomains", "1");
    }
    setResultUrl(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Just My Socket 订阅地址选项配置</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid gap-4"}>
          <form className={"grid gap-4"} onSubmit={handleSubmit(onSubmit)}>
            <div className={"grid gap-2"}>
              <Label>订阅地址</Label>
              <Textarea
                {...register("urlStr")}
                placeholder={
                  "https://jmssub.net/members/getsub.php?service=xxxxxx&id=xxxxxxxx"
                }
              />
              {errors.urlStr?.message && (
                <small className={"text-secondary-foreground"}>
                  {errors.urlStr.message}
                </small>
              )}
            </div>
            <Controller
              control={control}
              name={"noSs"}
              render={({ field }) => (
                <div className={"flex items-center space-x-2"}>
                  <Switch
                    checked={field.value}
                    id={field.name}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor={field.name}>排除 Shadowsocks 节点</Label>
                </div>
              )}
            />
            <Controller
              control={control}
              name={"noVmess"}
              render={({ field }) => (
                <div className={"flex items-center space-x-2"}>
                  <Switch
                    checked={field.value}
                    id={field.name}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor={field.name}>排除 Vmess 节点</Label>
                </div>
              )}
            />
            <Controller
              control={control}
              name={"useDomains"}
              render={({ field }) => (
                <div className={"flex items-center space-x-2"}>
                  <Switch
                    checked={field.value}
                    id={field.name}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor={field.name}>使用域名节点而不是 IP 节点</Label>
                </div>
              )}
            />
            <div className={"flex gap-2"}>
              <Button type={"submit"}>转换</Button>
              <Button
                onClick={() => {
                  reset();
                  setResultUrl(undefined);
                }}
                type={"reset"}
                variant={"secondary"}
              >
                重置
              </Button>
            </div>
          </form>
          <div className={"mt-4 grid gap-2"}>
            <Label>转换结果</Label>
            <Textarea readOnly value={resultUrl?.toString()} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
