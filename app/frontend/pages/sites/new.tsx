import { Form, Head } from '@inertiajs/react'

import HeadingSmall from '@/components/heading-small'
import InputError from '@/components/input-error'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import AppLayout from '@/layouts/app-layout'
import { sitesPath } from '@/routes'
import type { BreadcrumbItem } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Sites', href: sitesPath() },
  { title: 'New site', href: '#' },
]

export default function New() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="New site" />

      <div className="mx-auto max-w-lg space-y-6 p-8">
        <HeadingSmall
          title="Create a new site"
          description="Give your site a name to get started."
        />

        <Form
          method="post"
          action={sitesPath()}
          transform={(data) => ({ site: data })}
          className="space-y-6"
        >
          {({ errors, processing }) => (
            <>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoFocus
                  placeholder="My awesome site"
                />
                <InputError messages={errors.name} />
              </div>

              <Button disabled={processing}>Create Site</Button>
            </>
          )}
        </Form>
      </div>
    </AppLayout>
  )
}
