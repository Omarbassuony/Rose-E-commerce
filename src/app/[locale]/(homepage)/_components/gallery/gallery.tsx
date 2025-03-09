import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function Gallery() {
  // Translation
    const t = useTranslations();
  // Variables
    const galleryImages = [
        { src: "/assets/images/gallery/gallery-1.png", className: "col-span-1 row-span-1" },
        { src: "/assets/images/gallery/gallery-2.png", className: "col-span-1 row-span-1" },
        { src: "/assets/images/gallery/gallery-3.png", className: "col-span-1 row-span-1" },
        { src: "/assets/images/gallery/gallery-4.png", className: "md:col-span-2 row-span-1 h-full" }, // Added h-full and row-span-1
        { src: "/assets/images/gallery/gallery-5.png", className: "col-span-1 row-span-1" }
      ];

      return (

        // Gallery
        <main className="container mx-auto px-4 py-8">
          <section className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
            {/* Our Gallery */}
              <h2 className="text-[#F82BA9] uppercase tracking-wide text-sm font-bold">
                {t("our-gallery")}
              </h2>
              <h3 className="relative text-3xl font-bold text-[#160E4B] w-fit text-center m-auto before:content-[''] before:absolute before:-z-10 before:top-1/2 before:left-0 before:w-[340px] before:h-[17px] before:bg-[#FEEDF7]">
               <span className="border-b-[#F82BA9] border-b-4">{t("let's-check")}
                </span> {t("our-photo-gallery")}
              </h3>

            </div>
    
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden border-none ${image.className}`}
                >
                  <CardContent className="p-0 h-full">
                  <div className="relative w-full h-96 rounded-3xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover rounded-3xl transition-transform hover:scale-105"
                    />
                  </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      );
}