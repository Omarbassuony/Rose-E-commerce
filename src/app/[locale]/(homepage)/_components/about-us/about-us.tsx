import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";

export default function AboutUsHeaderPage() {
  // Translation
  const t = useTranslations();

  return (
    <section className="container mx-auto py-20 pe-6">
      {/* About-us section images */}
      <div className="about-us-header  flex gap-x-20 ">
        {/* Images */}
        <div className=" flex  gap-x-2">
          {/* Image 1 */}
          <div className="rtl:me-7 before:absolute before:w-[268px] before:h-[363px] before:bg-transparent before:border-[4px] before:border-custom-rose-900  before:bottom-0 rtl:before:-right-5 before:-left-5 rtl:before:rounded-tr-[50px] before:rounded-tr-[120px] before:rounded-tl-[50px] rtl:before:rounded-br-[120px] before:rounded-br-[120px] before:rounded-bl-[120px] before:rotate-[3.09deg] rtl:before:rotate-[-3.09deg] relative ms-6 mt-6 w-[302px] h-[344px]">
            <Image
              className="object-cover w-full rtl:rounded-tr-[50px] rounded-tr-[120px] rounded-tl-[50px] rtl:rounded-tl-[120px]  rounded-br-[120px] rounded-bl-[120px]"
              src={"/assets/images/about-us/1.png"}
              alt="gift photo"
              fill
              sizes="100%"
            />
          </div>

          {/* Image 2 & 3 */}
          <div className="my-4">
            <div className="relative mb-2 w-[193px] h-[193px]">
              <Image
                className="object-cover rounded-full"
                src={"/assets/images/about-us/2.png"}
                alt="gift photo"
                fill
                sizes="100%"
              />
            </div>

            {/* Image 3 */}
            <div className="relative w-[193px] h-[144px]">
              <Image
                src={"/assets/images/about-us/3.png"}
                className="object-cover rtl:rounded-tr-[50px] rounded-tr-[100px] rounded-tl-[50px] rtl:rounded-tl-[100px]  rounded-br-[100px] rtl:rounded-br-[50px] rounded-bl-[50px] rtl:rounded-bl-[100px]"
                alt="gift photo"
                fill
                sizes="100%"
              />
            </div>
          </div>
        </div>

        {/* Text section */}
        <div className="about-us-info ">
          {/* Start header */}
          <h2 className="rtl:tracking-[0] rtl:text-xl font-bold uppercase font-roboto  text-lg leading-[30px] tracking-[4px]	text-custom-rose-900 pb-6 ">
            {t("about-us")}
          </h2>

          {/* Best seller heading */}
          <div className="">
            <h3 className="pb-2 text-custom-blue-900 font-bold leading-[40px] text-3xl font-inter ">
              {t.rich("we-provide-best-and-quali-1", {
                span: (v) => <span className="text-custom-rose-900">{v}</span>,
              })}
            </h3>

            {/* Best seller paragraph */}
            <p className=" text-custom-muted pe-7 pb-6 font-normal text-base leading-[30px] ">
              {t("recusandae-tempora-aut-la-0")}
            </p>
          </div>

          {/* Discover more button */}
          <div className="">
            <Button className="bg-custom-rose-900 h-[50px] font-medium text-base text-white rounded-md hover:bg-custom-rose-800 ps-5  py-[10px] ">
              {t("explore-more-0")}
              <FaArrowRight className="rtl:scale-x-[-1]" />
            </Button>
          </div>

          {/* About list */}
          <div className="flex gap-x-5 py-6 ">
            {/* The right section */}
            <div className="right-section">
              {/* First feat */}
              <div className="flex items-center  gap-x-2 ">
                {/* Check icon */}
                <div className="flex items-center justify-center ">
                  <HiCheckCircle className="text-custom-violet-900 text-4xl w-[42px] h-[42px] " />{" "}
                </div>

                {/* Feature text */}
                <p className="rtl:text-sm text-xs font-medium">{t("streamlined-shipping-expe")}</p>
              </div>

              {/* Second feat */}
              <div className="flex items-center  gap-x-2">
                {/* Check icon */}
                <div className=" flex items-center justify-center ">
                  <HiCheckCircle className="text-custom-violet-900 text-4xl w-[42px] h-[42px] " />{" "}
                </div>

                {/* Feature text */}
                <p className="rtl:text-sm text-xs font-medium">{t("competitive-price-and-eas")}</p>
              </div>
            </div>

            {/* Lift Section */}
            <div className="lift-section">
              {/* Third feat  */}
              <div className="flex items-center  gap-x-2">
                {/* Check icon */}
                <div className=" flex items-center justify-center ">
                  <HiCheckCircle className="text-custom-violet-900 text-4xl w-[42px] h-[42px]" />
                </div>

                {/* Feature text */}
                <p className="rtl:text-sm text-xs font-medium">{t("affordable-modern-design")}</p>
              </div>

              {/* Fourth feat */}
              <div className="flex items-center  gap-x-2">
                {/* Check icon */}
                <div className=" flex items-center justify-center text-[# 8C52FF]">
                  <HiCheckCircle className="text-custom-violet-900 text-4xl w-[42px] h-[42px]" />
                </div>

                {/* Feature text */}
                <p className="rtl:text-sm text-xs font-medium">{t("we-made-awesome-products")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
