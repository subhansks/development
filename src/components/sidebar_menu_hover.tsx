import Link from "next/link";

function HoverAction({ title }: any) {
  return (
    <div>
      <Link href={"/"}>{title}</Link>
    </div>
  );
}

export function HoverCardNavigate({ title, sub_content }: any) {
  return (
    <div className="w-full h-10">
      {sub_content ? (
        <HoverAction title={title} />
      ) : (
        <Link href={"/"}>{title}</Link>
      )}
    </div>
  );
}
