import ArrowIncrease from "@/public/assets/images/arrowIncrease";

function TopBar() {
  return (
    <div className="flex gap-2 items-center">
      <ArrowIncrease />
      <p className="text-gray-300 font-bold">Trending</p>
    </div>
  );
}

export default TopBar;
