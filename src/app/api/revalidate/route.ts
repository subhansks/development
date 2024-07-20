import { revalidatePath, revalidateTag } from "next/cache";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  //   draftMode().enable();
  // response.headers.set("Pragma", "no-cache");
  //   const data = await HomePageData();
  //   console.log(data);

  revalidateTag("data");

  return Response.json({ message: "revalidated" });
  // return NextResponse.json({ message: "Hello, Next.js!" });
}
