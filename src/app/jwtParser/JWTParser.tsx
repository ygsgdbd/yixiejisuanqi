"use client";

import jose, { decodeJwt } from "jose";
import { useMemo, useState } from "react";

import DescriptionList from "@/components/DescriptionList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Textarea } from "@/shadcn/components/ui/textarea";

export default function JWTParser() {
  const [jwt, setJwt] = useState<string>();
  const claims = useMemo(() => {
    if (jwt) {
      try {
        return decodeJwt(jwt);
      } catch (e) {
        return null;
      }
    }
  }, [jwt]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>JWT Payload 解析器</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"grid gap-4"}>
          <Textarea
            onChange={(e) => setJwt(e.target.value)}
            placeholder={
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
            value={jwt}
          />
          <pre>
            <code>{JSON.stringify(claims, null, 2)}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
