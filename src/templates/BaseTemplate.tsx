// import { useTranslations } from 'next-intl';

import { SiteHeader } from '@/components/reusable-components/layout/header/site-header';

const BaseTemplate = (props: {
  // leftNav: React.ReactNode;
  // rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full  text-gray-700 antialiased">
      <div className="">
        {/* <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.name}
            </h1>
            <h2 className="text-xl">{t('description')}</h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header> */}
        <SiteHeader />

        <main>{props.children}</main>
      </div>
    </div>
  );
};

export { BaseTemplate };
