import "../../index.css";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <a href="#" className="inline-block">
            <h3
              className="text-3xl font-bold bg-clip-text text-transparent font-primary"
              style={{
                background:
                  "linear-gradient(to right, #FF56F6, #B936EE, #3BACE2, #406AFF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Камран
            </h3>
            <h3 className="text-3xl font-bold bg-clip-text text-transparent text-white font-primary">
              Раджабов
            </h3>
          </a>
          <button className="btn btn-sm">Работай со мной</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
