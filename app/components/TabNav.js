const TabNav = ({ navItems, active, setActive }) => {
  return (
    <>
      <div className="tabs-nav flex items-center gap-3 overflow-x-auto">
        {navItems.map((item) => (
          <div
            className={`text-sm text-[#f5f5f5] text-center capitalize cursor-pointer transition-opacity ease-linear duration-300 ${
              active === item ? "opacity-100" : "opacity-50"
            }`}
            key={item}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabNav;
