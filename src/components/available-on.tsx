import Image from "next/image";

type Marketplace = {
  name: string;
  logo?: { src: string; width: number; height: number };
  wordmarkColor: string;
};

const marketplaces: Marketplace[] = [
  { name: "Amazon", logo: { src: "/brands/amazon.svg", width: 603, height: 182 }, wordmarkColor: "#232f3e" },
  { name: "Flipkart", wordmarkColor: "#2874f0" },
  { name: "Meesho", wordmarkColor: "#570be8" },
  { name: "Snapdeal", wordmarkColor: "#e40046" },
  { name: "JioMart", wordmarkColor: "#0a7a3d" },
];

export function AvailableOn() {
  return (
    <section aria-labelledby="available-on-title" className="available-on" id="available-on">
      <div className="home-section-inner">
        <header className="section-heading">
          <p className="section-eyebrow">Find us online</p>
          <h2 className="section-title" id="available-on-title">We are available where you shop</h2>
          <p className="section-description">Order DrCleanX products on the marketplaces you already trust.</p>
        </header>

        <ul aria-label="Marketplaces selling DrCleanX" className="marketplace-grid">
          {marketplaces.map((marketplace) => (
            <li className="marketplace-card" key={marketplace.name}>
              {marketplace.logo ? (
                <Image
                  alt={`${marketplace.name} logo`}
                  className="marketplace-logo"
                  height={marketplace.logo.height}
                  src={marketplace.logo.src}
                  unoptimized
                  width={marketplace.logo.width}
                />
              ) : (
                <span className="marketplace-wordmark" style={{ color: marketplace.wordmarkColor }}>
                  {marketplace.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
