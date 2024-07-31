import SearchIcon from "@/public/assets/images/search";

function HeaderSearch() {
  return (
    <div className="mt-3 w-full">
      <div className="flex w-full">
        <div className="w-full">
          <input
            className="w-full h-16 placeholder:text-xl text-black text-xl pl-4 outline-none rounded-tl rounded-bl"
            placeholder="Search all GIFs and Stickers"
          />
        </div>
        <div className="bg-gradient-to-r from-red-300 to-orange-200 w-16 flex items-center justify-center rounded-tr rounded-br hover:cursor-pointer">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
