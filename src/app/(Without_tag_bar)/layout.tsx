import ScrollSlider from "@/components/homepage/custom_slider";
import LayoutWrapper from "@/lib/shared/WrapperFunctions/LayoutWrapper";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
