import Arrow from "@/components/common/arrow";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SpecialOffer() {
  // Translation
  const t = useTranslations();

  // Variables
  const images = [
    "/assets/images/background-2.jpg",
    "/assets/images/Top-view-hand.png",
    "/assets/images/Christmas-cart.png",
  ];

  const giftBoxes = [
    {
      image: "/assets/images/Confetti.png",
      title: t("awesome-gifts-box"),
      subtitle: t("collectons"),
      label: t("gifts-box"),
    },
    {
      image: "/assets/images/Top-view-hand.png",
      title: t("best-occasion-gifts"),
      subtitle: t("collectons"),
      label: t("occasion-gifts-0"),
    },
    {
      image: "/assets/images/Christmas-cart.png",
      title: t("combo-sets-gift-box"),
      subtitle: t("up-to-50-off"),
      label: t("occasion-gifts"),
    },
  ];

  return (
    <section className="grid grid-cols-9 gap-4 mt-8 container">
      {/* Special Gifts Box card */}
      <div className="relative col-span-2 p-5 rounded-2xl flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/images/Red-christmas.png"
          alt="Special Gifts"
          fill
          className="object-cover"
        />
        {/* Content */}
        <div className="rtl:text-start relative z-10">
          {/* Title */}
          <p className="text-custom-rose-900 text-base uppercase  tracking-[.2em] font-bold">
            {t("start-10-99-0")}
          </p>

          {/* Main text */}
          <h2 className="text-custom-blue-900 text-2xl font-bold my-3">
            {t("special-gifts-box-for-your-love")}
          </h2>

          {/* Shop button */}
          <Button className="bg-custom-rose-900  font-medium text-base text-white rounded-md hover:bg-custom-rose-800 ps-5  py-[10px] ">
            {t("shop-now")}
            <span>
              <Arrow />
            </span>
          </Button>
        </div>
      </div>

      {/* Carousel card */}
      <Carousel className="col-start-3 col-end-10">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative p-14 col-span-2 rounded-2xl overflow-hidden">
                {/* Background Image */}
                <Image src={image} alt="Background" fill className="object-cover" />

                {/* Content Overlay */}
                <div className=" relative z-10 flex flex-col">
                  {/* Title */}
                  <p className="text-custom-rose-900 text-xl mb-5 uppercase font-bold tracking-[.2em]">
                    {t("best-gift-shop")}
                  </p>

                  {/* Main text */}
                  <h2 className="text-custom-blue-900 font-bold text-5xl mb-5">
                    {t("choose-perfect")} <br />
                    <span className="text-custom-rose-900">{t("gifts")}</span> {t("from-us")}
                  </h2>

                  {/* Description */}
                  <p className="mb-5 max-w-96">{t("special-offer-description")}</p>

                  {/* Shop button */}
                  <Button className="bg-custom-rose-900 self-start  font-medium text-base text-white rounded-md hover:bg-custom-rose-800 ps-5  py-[10px] ">
                    {t("shop-now")}
                    <Arrow />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel navigation */}
        <CarouselPrevious className="top-[90%] right-24 rtl:right-auto rtl:left-24 text-white bg-gray-600" />
        <CarouselNext className="top-[90%] right-11 rtl:right-auto rtl:left-11 text-white bg-gray-600" />

        {/* Carousel pagination */}
        <CarouselPagination />
      </Carousel>

      {/* Gift Boxes */}
      {giftBoxes.map((item, index) => (
        <div
          key={index}
          className="justify-end rtl:justify-start relative col-span-3 h-72 p-5 flex items-center rounded-2xl overflow-hidden"
        >
          {/* Background Image */}
          <Image src={item.image} alt={item.title} fill className="object-cover" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-end">
            {/* Label name */}
            <p className="text-custom-rose-900">{item.label}</p>

            <h2 className="text-custom-blue-900 text-lg font-bold text-end">
              {item.title} <br /> {item.subtitle}
            </h2>

            {/* Shop button */}
            <Button className="bg-custom-rose-900 mt-4  text-white rounded-full hover:bg-custom-rose-800  ">
              {t("shop-now")}
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
