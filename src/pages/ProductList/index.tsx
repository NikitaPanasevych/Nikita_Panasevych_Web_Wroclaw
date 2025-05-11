import { useGetProductsQuery } from "@entities/product/api/api";
import { ProductCard } from "@entities/product/ui/ProductCard";
import { MainLayout } from "@shared/layouts/MainLayout";
import styles from "./ProductList.module.scss";

const ProductListPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Products</h1>

        {isLoading && <div className={styles.loading}>Loading products...</div>}

        {error && (
          <div className={styles.error}>
            Error loading products. Please try again later.
          </div>
        )}

        {products && (
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={(product) => console.log("Product clicked:", product)}
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductListPage;
