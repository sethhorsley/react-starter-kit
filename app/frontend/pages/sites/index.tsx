import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { newSitePath, sitePath, sitesPath } from '@/routes'
import type { BreadcrumbItem } from '@/types'
import type { SiteType } from './types'

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Sites', href: sitesPath() },
]

interface IndexProps {
  sites: SiteType[]
}

const statusVariant = (status: string | null) => {
  switch (status) {
    case 'published':
      return 'default'
    case 'archived':
      return 'secondary'
    default:
      return 'outline'
  }
}

export default function Index({ sites }: IndexProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Sites" />

      <div className="space-y-6 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Sites</h1>
            <p className="text-muted-foreground text-sm">
              Manage your websites
            </p>
          </div>
          <Button asChild>
            <Link href={newSitePath()}>
              <Plus />
              New site
            </Link>
          </Button>
        </div>

        {sites.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-24">
            <div className="bg-muted mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Plus className="text-muted-foreground h-6 w-6" />
            </div>
            <h2 className="text-lg font-semibold">No sites yet</h2>
            <p className="text-muted-foreground mt-1 mb-4 text-sm">
              Create your first site to get started.
            </p>
            <Button asChild>
              <Link href={newSitePath()}>
                <Plus />
                Create site
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <Link key={site.id} href={sitePath(site.id)} className="group">
                <Card className="transition-shadow group-hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{site.name}</CardTitle>
                    <CardAction>
                      <Badge variant={statusVariant(site.status)}>
                        {site.status || 'draft'}
                      </Badge>
                    </CardAction>
                    <CardDescription>
                      {site.subdomain
                        ? `${site.subdomain}.subely.com`
                        : 'No subdomain set'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
