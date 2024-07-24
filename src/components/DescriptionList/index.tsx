import { ReactNode } from "react";

export default function DescriptionList(props: {
  items: {
    team: ReactNode;
    detail?: ReactNode;
  }[];
}) {
  return (
    <div className={"divide-y rounded-md border text-sm"}>
      {props.items.map((x, idx) => (
        <div
          className={
            "grid grid-cols-[1fr_2fr] p-4 transition-colors hover:bg-muted/50"
          }
          key={idx}
        >
          <div className={"text-muted-foreground"}>{x.team}</div>
          <div>{x.detail}</div>
        </div>
      ))}
    </div>
  );
}
