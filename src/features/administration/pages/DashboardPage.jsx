import { Cards, LastActivity, Menu } from "../components";

export const DashboardPage = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-4 w-full">
      <div className="row-span-2">
        {/* Menu */}
        <Menu />
      </div>
      <div className="h-auto">
        {/* Cards */}
        <Cards />
      </div>
      <div className="row-start-2 col-start-2 p-4">
        {/* Last activity */}
        <LastActivity />
      </div>
    </div>
  );
};
