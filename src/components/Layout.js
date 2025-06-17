import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Vitrine Cogna
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Produtos
              </Link>
           
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">{children}</main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Vitrine Cogna</h3>
              <p className="text-gray-600">
                Transformando a educação através da tecnologia e inovação.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600">
                    Produtos
                  </Link>
                </li>
                <li>
                 
                </li>
                <li>
                 
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Contato</h3>
              <ul className="space-y-2 text-gray-600">
                <li>contato@cogna.com.br</li>
                <li>(11) 1234-5678</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Vitrine Cogna. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 