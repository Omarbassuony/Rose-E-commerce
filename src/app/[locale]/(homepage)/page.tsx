import { getCategories } from "@/lib/apis/category.api";
import SpecialOffer from "./_components/special-offer/special-offer";
import Information from "./_components/information/information";
import NextIntlProvider from "@/components/providers/components/next-intl-provider";
import Categories from "./_components/categories/categories";
import { RouteProps } from "@/lib/types/route-props";
import AboutUsHeaderPage from "./_components/about-us/about-us";
import BestSellerPage from "./_components/best-seller/page";
import PopularProducts from "./_components/popular-products";
import Gallery from "./_components/gallery/gallery";
import Customer from "./_components/customer/customer";
import TrustedBySection from "./_components/trustedSection/TrustedBySection"
export default async function Page({ searchParams }: RouteProps) {
  // Variables
  const payload = await getCategories();

  // Error handling
  if ("error" in payload) {
    throw new Error(payload.error);
  }

  const categories = payload.categories.slice(0, 4);

  return (
    <>
      <NextIntlProvider>
        <main className="container mx-auto">
          {/* Category section */}
          <Categories payload={payload} />

          {/* Special offer section */}
          <SpecialOffer />

          {/* Information section */}
          <Information />

          <BestSellerPage />
          <PopularProducts categories={categories} searchParams={searchParams} />
          <AboutUsHeaderPage/>
          <Gallery/>
        </main>
          <Customer/>
          <TrustedBySection/>
      </NextIntlProvider>
    </>
  );
}
