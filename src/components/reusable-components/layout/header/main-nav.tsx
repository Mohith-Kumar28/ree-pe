'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { siteConfig } from '@/components/config/site';
import { icons } from '@/components/reusable-components/icons/icons';
import { cn } from '@/lib/utils';

import { homeNavigationConfig } from '../../../config/navigation';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <icons.logo className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {homeNavigationConfig.mainNav?.map(
          (item) =>
            item.href && (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === '/docs'
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                {item.title}
              </Link>
            ),
        )}

        {/* <Link
          href={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  );
}
