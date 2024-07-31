"use client";

import Text from "@/app/fakeData/Text";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";

export default function FakeData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>假数据</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid gap-4"}>
          <Text />
        </div>
      </CardContent>
    </Card>
  );
}
