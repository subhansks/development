import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
const nav = ["Electronics", "Clothes", "Children", "Garden"];

export function HoverCardNavigate() {
  return (
    <NavigationMenu className="h-fit w-full max-w-full">
      <NavigationMenuList className="h-fit w-full">
        <NavigationMenuItem className="h-fit w-full">
          <NavigationMenuTrigger className="w-[300px] ">
            Item One
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="bg-dealguru-blue ">
              Link Link Link Link Link Link Link Link
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
              <p>LInk</p>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
