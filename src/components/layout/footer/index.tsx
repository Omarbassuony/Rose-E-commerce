import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Arrow from "@/components/common/arrow";

export default function Footer() {
  // Translation
  const t = useTranslations();

  return (
    <div className="relative py-16">
      {/* Background Footer */}
      <Image
        fill
        src={"/assets/images/Footerbg.png"}
        sizes="100vw"
        alt=""
        className="opacity-30 object-cover"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <div className="flex justify-center gap-20 mx-auto font-bold text-custom-blue-900">
          <Link href={"/"}> {t("about-us")}</Link>
          <Link href={"/"}> {t("store-location")}</Link>
          <Link href={"/"}> {t("contact")}</Link>
          <Link href={"/"}> {t("delivery")}</Link>
          <Link href={"/"}> {t("policy")}</Link>
          <Link href={"/"}> {t("FAQS")}</Link>
        </div>

        {/* Headline */}
        <h3 className="text-center mt-10 text-3xl font-bold text-custom-blue-900">
          {t.rich("footer-discount", {
            span: (value) => <span className="text-custom-rose-900">{value}</span>,
          })}
        </h3>

        {/* Description */}
        <p className="text-center mt-2 text-xl font-medium text-custom-blue-500 ">
          {t("by-subscribe-our-newsletter")}
        </p>

        {/* Field */}
        <div className="flex justify-center items-center mt-5 w-fit mx-auto relative ">
          {/* Input */}
          <Input
            type="email"
            placeholder={t("enter-your-email")}
            className="w-[400px] h-[45px] px-5 py-2 border-0  rounded-full focus:outline-0"
          />

          {/* Button */}
          <button className="w-[131px] h-[45px] text-white text-base font-medium bg-custom-rose-900 rounded-full text-center flex justify-center items-center absolute rtl:left-0 ltr:right-0">
            {t("subscribe")}
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}
