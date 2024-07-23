"use server";

// import { eq } from "drizzle-orm";
// import { db } from "../db/connection/db";
// import { cashbackengineRetailers, tableImages } from "../drizzle/Schema/schema";

export const HomePageData = async () => {
  // try {
  //   // Assuming there is a common key, e.g., `retailerId` in both tables.
  //   const recommendationData = await db
  //     .select({
  //       title: cashbackengineRetailers.title,
  //       id: cashbackengineRetailers.retailerId,
  //       likes: cashbackengineRetailers.dealsTotalLikes,
  //       cashback: cashbackengineRetailers.cashback,
  //       imageUrl: tableImages.images,
  //     })
  //     .from(cashbackengineRetailers)
  //     .leftJoin(
  //       tableImages,
  //       eq(cashbackengineRetailers.retailerId, tableImages.userId)
  //     )
  //     .limit(15)
  //     .execute();

  //   // Separate the top 5 recommendations and the least 10 recommendations
  //   const topRecommendationData = recommendationData.slice(0, 5);
  //   const leastRecommendedData = recommendationData.slice(5, 15);

  //   console.log(topRecommendationData);
  //   console.log(leastRecommendedData);

  //   if (topRecommendationData && leastRecommendedData) {
  //     return [topRecommendationData, leastRecommendedData];
  //   }
  // } catch (error: any) {
  //   console.log(error);
  //   return error;
  // }
  return 0;
};
