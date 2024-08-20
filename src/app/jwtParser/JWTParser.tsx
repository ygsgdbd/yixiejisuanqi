"use client";

import jose, { decodeJwt } from "jose";
import { LinkIcon } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/components/ui/table";
import { Textarea } from "@/shadcn/components/ui/textarea";

interface IClaims {
  cla: string;
  url: string;
  desc: string;
  raw: string;
  format: string;
}

export default function JWTParser() {
  const [jwt, setJwt] = useState<string>();
  const claims = useMemo(() => {
    if (jwt) {
      try {
        return decodeJwt(jwt.trim());
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
          {/* Token */}
          <Textarea
            className={"min-h-32"}
            onChange={(e) => setJwt(e.target.value)}
            placeholder={"eyJhbGciOiJI ........"}
            value={jwt}
          />
          {/* 原始数据 */}
          {claims && (
            <div>
              <pre className={"rounded-lg bg-secondary p-4 text-xs"}>
                <code>{JSON.stringify(claims, null, 2)}</code>
              </pre>
            </div>
          )}
          {/* 数据解析 */}
          <div className={"rounded-md border"}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>字段</TableHead>
                  <TableHead>描述</TableHead>
                  <TableHead>原始值</TableHead>
                  <TableHead>格式化</TableHead>
                  <TableHead>备注</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className={"flex items-center gap-2"}>
                      iss
                      <Link
                        href={
                          "https://www.rfc-editor.org/rfc/rfc7519#section-4.1.1"
                        }
                        target={"_blank"}
                      >
                        <LinkIcon
                          className={"size-3 text-secondary-foreground"}
                        />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>颁发者</TableCell>
                  <TableCell>{claims?.iss}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className={"flex items-center gap-2"}>
                      sub
                      <Link
                        href={
                          "https://www.rfc-editor.org/rfc/rfc7519#section-4.1.2"
                        }
                        target={"_blank"}
                      >
                        <LinkIcon
                          className={"size-3 text-secondary-foreground"}
                        />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>数据包</TableCell>
                  <TableCell>{claims?.sub}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>aud</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{claims?.aud}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>jti</TableCell>
                  <TableCell>JWT ID</TableCell>
                  <TableCell>{claims?.jti}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>nbf</TableCell>
                  <TableCell>不早于</TableCell>
                  <TableCell>{claims?.nbf}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>exp</TableCell>
                  <TableCell>过期时间</TableCell>
                  <TableCell>{claims?.exp}</TableCell>
                  <TableCell>
                    {claims?.exp && (
                      <div className={"grid gap-1"}>
                        <span>
                          {moment(claims.exp * 1000).format(
                            "YYYY-MM-DD HH:mm:ss",
                          )}
                        </span>
                        <span>{moment(claims.exp * 1000).fromNow()}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>iat</TableCell>
                  <TableCell>颁发时间</TableCell>
                  <TableCell>{claims?.iat}</TableCell>
                  <TableCell>
                    {claims?.iat && (
                      <div className={"grid gap-1"}>
                        <span>
                          {moment(claims.iat * 1000).format(
                            "YYYY-MM-DD HH:mm:ss",
                          )}
                        </span>
                        <span>{moment(claims.iat * 1000).fromNow()}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
