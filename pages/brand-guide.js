import '../app/globals.css';

export default function BrandGuide() {
  return (
    <div className="container mx-auto p-10 text-gray-900">
      <h1 className="text-5xl font-heading mb-8">Brand Guide</h1>
      
      {/* Colors Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-primCol rounded-lg mb-2"></div>
            <p className="text-lg">Primary Color</p>
            <p className="text-sm text-gray-600">#1a1a1a</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-secCol rounded-lg mb-2 border border-black"></div>
            <p className="text-lg">Secondary Color</p>
            <p className="text-sm text-gray-600">#F5F3ED</p>
          </div>
        </div>
      </section>
      
      {/* Fonts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-heading mb-4">Fonts</h2>
        <div className="space-y-8">
          <div>
            <p className="text-2xl font-heading">ITC Caslon No 224 Medium (standard)</p>
            <p className="text-lg text-gray-600">Headings</p>
          </div>
          <div>
            <p className="text-2xl font-sans">Avenir Next (medium)</p>
            <p className="text-lg text-gray-600">Body text</p>
          </div>
        </div>
      </section>
      
      {/* Logos Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-4">Logos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <p className="text-lg">Primary Logo</p>
            <img src="/logo_solo.png" alt="Logo 1" className="w-100 h-32 object-contain mb-2" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg">Royal Warrant</p>
            <img src="/crest.png" alt="Logo 2" className="h-60  object-contain mb-2" />
          </div>
        </div>
      </section>
    </div>
  );
}