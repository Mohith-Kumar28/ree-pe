// import { useTranslations } from 'next-intl';

import LayoutWrapper from './components/reusable-components/layout/layout-wrapper';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  // const t = useTranslations('DashboardLayout');

  return <LayoutWrapper>{props.children}</LayoutWrapper>;
}
