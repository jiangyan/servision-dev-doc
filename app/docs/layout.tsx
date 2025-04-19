import { DocsLayout } from '@/components/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import Image from 'next/image';

// Helper function to map URL to icon path
const getIconForUrl = (url?: string): string | null => {
  if (!url) return null;
  if (url.startsWith('/docs/tech-stacks')) return '/saltstack-svgrepo-com.svg';
  if (url.startsWith('/docs/project-dev-spec')) return '/plan-list-svgrepo-com.svg';
  if (url.startsWith('/docs/frontend-dev-spec')) return '/javascript-16-svgrepo-com.svg';
  if (url.startsWith('/docs/backend-dev-spec')) return '/java-svgrepo-com.svg';
  if (url.startsWith('/docs/db-spec')) return '/database-svgrepo-com.svg';
  if (url.startsWith('/docs/devops')) return '/dev-to-svgrepo-com.svg';
  return null;
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: { 
          transform: (option: { url: string, title: ReactNode, [key: string]: any }) => { 
            const iconPath = getIconForUrl(option.url);
            return {
              ...option,
              url: option.url || '',
              icon: iconPath ? (
                <Image src={iconPath} alt="" width={20} height={20} />
              ) : undefined,
            };
          },
        }
      }}      
    >
      {children}
    </DocsLayout>
  );
}
