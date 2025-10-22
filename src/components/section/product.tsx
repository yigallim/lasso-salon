import React from "react";
import ProductCarousel from "@/components/ui/product-carousel";

const items = [
  "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1683722319473-f851deb3fdf2?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560790671-b76ca4de55ef?q=80&w=734&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1698774303292-7af9410c3a57?q=80&w=436&auto=format&fit=cropv",
  "https://images.unsplash.com/photo-1643994542584-1247b5266429?q=80&w=869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613681230409-6423a38c43e1?q=80&w=871&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486102515046-44130769cb25?q=80&w=435&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?q=80&w=430&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546471180-335a013cb87b?q=80&w=387&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540163502599-a3284e17072d?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555803741-1ac759ac2f53?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516705486637-7b01bf9b9d13?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512045519129-eb9ceb788555?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=880&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611582450053-0f056a82a68e?q=80&w=735&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590872000386-4348c6393115?q=80&w=688&auto=format&fit=crop",
];

const products = [
  {
    name: "For Me - 609",
    brand: "Framesi",
    price: 85.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867315.jpg",
  },
  {
    name: "For Me - 515",
    brand: "Framesi",
    price: 85.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867328.jpg",
  },
  {
    name: "For Me - 401",
    brand: "Framesi",
    price: 85.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867335.jpg",
  },
  {
    name: "For Me - 308",
    brand: "Framesi",
    price: 85.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867341.jpg",
  },
  {
    name: "Morphosis Sublimis Shampoo",
    brand: "Morphosis",
    price: 88.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867354.jpg",
  },
  {
    name: "Framesi - Color Protect Treatment",
    brand: "Framesi",
    price: 108.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867369.jpg",
  },
  {
    name: "Morphosis - Ultimate Care Shampoo",
    brand: "Morphosis",
    price: 89.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867381.jpg",
  },
  {
    name: "Sublimis Conditioner",
    brand: "Morphosis",
    price: 208.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867392.jpg",
  },
  {
    name: "Morphosis - Color Protect Shampoo",
    brand: "Morphosis",
    price: 88.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867399.jpg",
  },
  {
    name: "Framesi - Repair Rich Treatment",
    brand: "Framesi",
    price: 108.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867406.jpg",
  },
  {
    name: "Morphosis - Sublimis Oil All Day Moisture Imulsion",
    brand: "Morphosis",
    price: 85.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867415.jpg",
  },
  {
    name: "Viege - Vegetables Supplement Scalp & Hair Shampoo",
    brand: "Viege",
    price: 89.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867437.jpg",
  },
  {
    name: "Lebel - Moii Balm",
    brand: "Others",
    price: 109.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867444.jpg",
  },
  {
    name: "For Me - 607",
    brand: "Framesi",
    price: 97.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867452.jpg",
  },
  {
    name: "Viege - Hair Treatment Volume",
    brand: "Viege",
    price: 196.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867472.jpg",
  },
  {
    name: "Morphosis - Color Protect Conditioner",
    brand: "Morphosis",
    price: 208.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867489.jpg",
  },
  {
    name: "Morphosis - Repair Conditioner",
    brand: "Morphosis",
    price: 208.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867497.jpg",
  },
  {
    name: "Morphosis - Destress Serum",
    brand: "Morphosis",
    price: 88.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867512.jpg",
  },
  {
    name: "Morphosis - Destress Shampoo",
    brand: "Morphosis",
    price: 88.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867525.jpg",
  },
  {
    name: "Morphosis - Balance Shampoo",
    brand: "Morphosis",
    price: 88.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867533.jpg",
  },
  {
    name: "Morphosis - Repair Shampoo",
    brand: "Morphosis",
    price: 88.0,
    image: "https://www.alphstudio.com.my/storage/product/P1683867540.jpg",
  },
];

const Product = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="section-container relative">
        <div
          className="md:-ml-[0.1em] -mb-[0.3em] sm:-mb-[0.25em] text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] xl:text-[280px] 
            leading-[0.75] lg:tracking-widest font-bold font-bg text-[#F5F5F5]"
        >
          GOODS
        </div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-[1.25em] md:mb-[2em] leading-none">
          OUR PRODUCTS
        </h2>
        <div className="lg:w-[110%] lg:-ml-[5%] md:overflow-hidden">
          <ProductCarousel items={products} />
        </div>
      </div>
    </section>
  );
};

export default Product;
