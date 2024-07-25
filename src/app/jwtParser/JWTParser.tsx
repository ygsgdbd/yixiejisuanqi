"use client";

import jose, { decodeJwt } from "jose";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";

import DescriptionList from "@/components/DescriptionList";
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

  useEffect(() => {
    moment.locale("zh-CN");
  }, []);

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
            placeholder={
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
            value={jwt}
          />
          {/* 原始数据 */}
          {claims && (
            <pre className={"rounded-lg bg-secondary p-4 text-sm"}>
              <code>{JSON.stringify(claims, null, 2)}</code>
            </pre>
          )}
          {/* 数据解析 */}
          {claims && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>字段</TableHead>
                  <TableHead>原始值</TableHead>
                  <TableHead>格式化</TableHead>
                  <TableHead>备注</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>iss</TableCell>
                  <TableCell>{claims?.iss}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>sub</TableCell>
                  <TableCell>{claims?.sub}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>aud</TableCell>
                  <TableCell>{claims?.aud}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>jti</TableCell>
                  <TableCell>{claims?.jti}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>nbf</TableCell>
                  <TableCell>{claims?.nbf}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className={"grid gap-1"}>
                      <span>exp</span>
                      <span>过期时间</span>
                    </div>
                  </TableCell>
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
                  <TableCell>
                    <div className={"grid gap-1"}>
                      <span>iat</span>
                      <span>颁发时间</span>
                    </div>
                  </TableCell>
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
          )}
        </div>
      </CardContent>
    </Card>
  );
}
