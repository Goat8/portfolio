
import "../globals.css";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full mt-8">
      <div className="flex-grow">
        <main className="my-0 py-16">{children}</main>

      </div>
    </div>
  );
};

export default DashboardLayout;
