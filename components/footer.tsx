import { FOOTER_LINKS } from "@/constants/footerLinks";

export const Footer = () => {
  return (
    <div className="fixed bottom-3 left-4 flex gap-2">
      {FOOTER_LINKS.map((footer: string) => (
        <div key={footer} className="bg-gray-700 px-3 rounded py-0.5">
          <a href="#" className="text-sm text-gray-300 ">
            {footer}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
