import Navbar from '../components/Navbar';
import ColorGrid from '../components/ColorGrid';

const GridPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HTML Element Section */}
          <div
            className="bg- rounded-lg p-6 aspect-square flex items-center justify-center"
            style={{
              background: 'linear-gradient(135.38deg, #3300FF 0%, #FA00FF 98.32%)',
            }}
          >
            <div className="text-white text-xl font-bold">
              <img src="https://i.postimg.cc/N0f5fcNT/logo1-aa59d10dce000c1b6a45.png"/>
            </div>
          </div>


          {/* E-cell Logo Section */}
          <div className="bg-white rounded-lg p-6 aspect-square flex items-center justify-center">
            <img src="https://postimg.cc/4mYTKBj6" alt="" />
          </div>

          {/* Color Grid Section */}
          <div className="bg-white rounded-lg shadow-lg aspect-square flex items-center justify-center">
            <ColorGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
