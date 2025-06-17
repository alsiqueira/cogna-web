import Image from 'next/image';
import Link from 'next/link';

async function getProduct(id) {
  const res = await fetch(`http://localhost:3001/produtos/${id}`, {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
 
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export async function generateStaticParams() {
  const products = await fetch('http://localhost:3001/produtos', {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  }).then((res) => res.json());
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await Promise.resolve(params);
  const product = await getProduct(id);
  
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await Promise.resolve(params);
  const product = await getProduct(id);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para produtos
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src={product.photo || '/placeholder.webp'}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              {product.description}
            </p>
            <div className="mb-8">
              <p className="text-3xl font-bold text-blue-600">
                {(product.price/100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
                Adicionar ao Carrinho
              </button>
              <button className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-50">
                Favoritar
              </button>
            </div>
            <div className="mt-8 rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                {product.name}
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {product.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 