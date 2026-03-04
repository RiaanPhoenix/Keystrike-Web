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
              {/* Solutions Dropdown */}
              <div className="relative group">
                <a 
                  href="/solutions" 
                  className={`px-3 py-2 text-sm font-medium flex items-center ${
                    currentPage === 'solutions' 
                      ? 'text-accent' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  Solutions
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-1 w-72 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a 
                      href="/solutions/manufacturing" 
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-surface-muted hover:text-accent transition-colors"
                    >
                      <div className="font-medium">Operational Technology & Manufacturing</div>
                      <div className="text-xs text-text-secondary mt-1">Industrial IoT and SCADA security</div>
                    </a>
                    <a 
                      href="/solutions/financial" 
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-surface-muted hover:text-accent transition-colors"
                    >
                      <div className="font-medium">Banking</div>
                      <div className="text-xs text-text-secondary mt-1">PCI DSS compliance and fraud prevention</div>
                    </a>
                    <a 
                      href="/solutions/government" 
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-surface-muted hover:text-accent transition-colors"
                    >
                      <div className="font-medium">Government</div>
                      <div className="text-xs text-text-secondary mt-1">FedRAMP and security clearance environments</div>
                    </a>
                    <a 
                      href="/solutions/healthcare" 
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-surface-muted hover:text-accent transition-colors"
                    >
                      <div className="font-medium">Healthcare</div>
                      <div className="text-xs text-text-secondary mt-1">HIPAA compliance and patient data protection</div>
                    </a>
                    <a 
                      href="/solutions/mssps" 
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-surface-muted hover:text-accent transition-colors"
                    >
                      <div className="font-medium">MSSPs</div>
                      <div className="text-xs text-text-secondary mt-1">Managed security service provider solutions</div>
                    </a>
                    <a 
                      href="/solutions/data-centers" 
                      className="block px-4 py-3 text-sm text-text-primary hover:bg-surface-muted hover:text-accent transition-colors"
                    >
                      <div className="font-medium">Data Centers</div>
                      <div className="text-xs text-text-secondary mt-1">Critical infrastructure and facility security</div>
                    </a>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <a 
                        href="/solutions" 
                        className="block px-4 py-2 text-sm text-accent hover:bg-surface-muted font-medium"
                      >
                        View All Solutions →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
            <a href="/contact">
              <button className="btn btn-primary">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}