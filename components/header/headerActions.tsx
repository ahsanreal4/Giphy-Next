import ArrowDown from "@/public/assets/images/arrowDown";
import Button from "../button";

function HeaderActions() {
  return (
    <div className="flex gap-3">
      <div className="flex gap-1 ml-1 max-sm:hidden">
        <Button variant="primary">Upload</Button>
        <Button variant="secondary">Create</Button>
      </div>
      <div className="rounded hover:cursor-pointer">
        <div className="flex items-center gap-2 bg-gray-700 pr-3">
          <img
            src={"https://media.giphy.com/avatars/default5/36h.gif"}
            alt="Eyes"
            width={36}
            height={36}
            className="rounded-sm"
          />
          <p className="font-bold text-sm">ahsanreal4</p>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

export default HeaderActions;
