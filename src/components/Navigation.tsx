export default function Navigation({ currentPage }: { currentPage?: string }) {
  return (
    <header className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-text-primary">Keystrike</a>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <a 
                href="/solutions" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'solutions' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Solutions
              </a>
              <a 
                href="/platform" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'platform' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Platform
              </a>
              <a 
                href="/resources" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'resources' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Resources
              </a>
              <a 
                href="/partners" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'partners' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Partners
              </a>
              <a 
                href="/about" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'about' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Company
              </a>
              <a 
                href="/faq" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'faq' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                FAQ
              </a>
              <a 
                href="/support" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'support' 
                    ? 'text-accent' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Support
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="btn btn-secondary">
              Customer Login
            </button>
            <a href="/contact">
              <button className="btn btn-primary">
                Contact Sales
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}