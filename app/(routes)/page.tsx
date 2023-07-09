import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const billboard = await getBillboard("e9c789f4-8ad3-4a56-a026-224b70a3e026");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
