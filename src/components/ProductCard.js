import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/produto/${product.id}`} className="group">
      <div className="h-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={product.photo || '/placeholder.webp'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
            {product.name}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-blue-600">
              {(product.price/100).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})}
            </p>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              Ver detalhes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 