import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
 
  DialogTrigger,
} from "@/components/ui/dialog";


export default function testing() {
  return (
    <Dialog>
      <DialogTrigger className="mt-60" asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  ">Teting</DialogContent>
    </Dialog>
  );
}
