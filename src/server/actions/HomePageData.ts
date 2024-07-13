"use server";
import { db } from "../db/connection/db";
import { cashbackengineRetailers } from "../drizzle/Schema/schema";

export const HomePageData = async () => {
  "use server";
  try {
    const topRecommendationData = await db
      .select({
        title: cashbackengineRetailers.title,
        id: cashbackengineRetailers.retailerId,
        likes: cashbackengineRetailers.dealsTotalLikes,
        cashback: cashbackengineRetailers.cashback,
      })
      .from(cashbackengineRetailers)
      .limit(5)
      .execute();
    const leastRecommendedData = await db
      .select({
        title: cashbackengineRetailers.title,
        id: cashbackengineRetailers.retailerId,
        likes: cashbackengineRetailers.dealsTotalLikes,
        cashback: cashbackengineRetailers.cashback,
      })
      .from(cashbackengineRetailers)
      .limit(10)
      .execute();

    if (topRecommendationData && leastRecommendedData) {
      return [topRecommendationData, leastRecommendedData];
    }
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};
