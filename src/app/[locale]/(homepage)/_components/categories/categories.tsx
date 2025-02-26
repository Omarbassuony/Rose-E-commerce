import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CategoryCard from "./category-card";

export default function Categories({ payload }: { payload: CategoriesResponse }) {
  return (
    <Carousel className="mt-8 container">
      <CarouselContent>
        {payload.categories.map((category) => (
          <CarouselItem className="basis-1/5" key={category._id}>
            <CategoryCard category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
