import SideNav from './components/navigation/side-nav';
import TopNav from './components/navigation/top-nav';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <TopNav />
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
