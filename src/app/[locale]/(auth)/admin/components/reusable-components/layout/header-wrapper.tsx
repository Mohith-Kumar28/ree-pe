const HeaderWrapper = ({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-full flex-1 flex-col space-y-8 p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          {subTitle && <p className="text-muted-foreground">{subTitle}</p>}
        </div>
        <div className="flex items-center space-x-2">{/* <UserNav /> */}</div>
      </div>
      {children}
    </div>
  );
};

export default HeaderWrapper;
