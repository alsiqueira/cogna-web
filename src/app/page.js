import ProductCard from '@/components/ProductCard';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produtos`, {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export const metadata = {
  title: 'Produtos',
  description: 'Conheça nossos produtos e soluções para transformar a educação.',
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Nossos Produtos</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Conheça nossas soluções inovadoras para transformar a educação e impulsionar o aprendizado.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
