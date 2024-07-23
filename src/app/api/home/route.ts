// import { HomePageData } from "@/server/actions/HomePageData";

import { DATA } from "@/constants/data";
import { cookies, draftMode } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request: Request, response: Response) {
  // const cookie = cookies();
  // console.log(cookie);
  // draftMode().enable();
  // response.headers.set("Pragma", "no-cache");
  // const data = await HomePageData();
  const data = DATA[0];
  console.log(data);
  if (data) return Response.json({ message: data });
  // return NextResponse.json({ message: "Hello, Next.js!" });
}
