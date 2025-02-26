import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heart, Search } from "lucide-react";
import { PiBagBold } from "react-icons/pi";
import { useTranslations } from "next-intl";

export default function Header() {
  // Translation
  const t = useTranslations();

  return (
    <header className="flex justify-between items-center container  my-4 ">
      {/* Logo */}
      <Image src="/assets/images/Logo.png" alt="Logo" width={86} height={0} />

      {/* Navigation */}
      <div className="flex gap-5 text-custom-blue-900 font-medium rtl:font-semibold text-base">
        <Link className=" text-rose-500 " href={"/"}>
          {t("home")}
        </Link>
        <Link href={"/"}> {t("all-category")}</Link>
        <Link href={"/"}> {t("about")}</Link>
        <Link href={"/"}> {t("contact")}</Link>
      </div>

      {/* Actions */}
      <div className="flex gap-5">
        {/* Search */}
        <Search className=" text-rose-500 " />

        {/* Favorites */}
        <div className=" relative">
          <Heart className=" text-rose-500 " />

          <div className="absolute -top-4 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
            2
          </div>
        </div>

        {/* Cart */}
        <div className=" relative">
          <PiBagBold fontSize={26} className=" text-rose-500 " />
          <div className="absolute -top-4 -right-2 bg-rose-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
            5
          </div>
        </div>
      </div>
    </header>
  );
}
