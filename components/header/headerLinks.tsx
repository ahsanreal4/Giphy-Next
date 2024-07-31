import { HEADER_LINKS } from "@/constants/headerLinks";

function HeaderLinks() {
  const SKYBLUE_GRADIENT = "from-skyblue-100 to-skyblue-300";
  const PURPLE_GRADIENT = "from-purple-100 to-purple-300";

  const getGradient = (index: number) =>
    index < 2 ? SKYBLUE_GRADIENT : PURPLE_GRADIENT;

  return (
    <ul className="flex gap-2 max-lg:hidden">
      {HEADER_LINKS.map((link: string, index: number) => (
        <li
          key={link}
          className={`bg-gradient-to-r ${getGradient(index)} pb-1 text-center`}
        >
          {index < 2 ? (
            <div
              className={`bg-background pt-1 pb-1 w-100 px-5 hover:bg-skyblue-100`}
            >
              <a href="#" className="font-bold text-sm">
                {link}
              </a>
            </div>
          ) : (
            <div
              className={`bg-background pt-1 pb-1 w-100 px-5 hover:bg-purple-300`}
            >
              <a href="#" className="font-bold text-sm">
                {link}
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default HeaderLinks;
