import { Form as InertiaForm } from '@inertiajs/react'
import { type ComponentProps } from 'react'

import { SiteType } from './types'

type FormProps = Omit<ComponentProps<typeof InertiaForm>, 'children'> & {
  site: SiteType
  submitText: string
}

export default function Form({ site, submitText, ...formProps }: FormProps) {
  return (
    <InertiaForm
      transform={data => ({ site: data })}
      className="contents"
      {...formProps}
    >
      {({ errors, processing }) => (
        <>
          <div className="my-5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={site.name}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.name && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.name.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="subdomain">Subdomain</label>
            <input
              type="text"
              name="subdomain"
              id="subdomain"
              defaultValue={site.subdomain}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.subdomain && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.subdomain.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="user">User</label>
            <input
              type="text"
              name="user"
              id="user"
              defaultValue={site.user_id}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.user_id && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.user_id.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="mode">Mode</label>
            <input
              type="number"
              name="mode"
              id="mode"
              defaultValue={site.mode}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.mode && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.mode.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="status">Status</label>
            <input
              type="number"
              name="status"
              id="status"
              defaultValue={site.status}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.status && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.status.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="framework">Framework</label>
            <input
              type="text"
              name="framework"
              id="framework"
              defaultValue={site.framework}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.framework && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.framework.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="editor_version">Editor version</label>
            <input
              type="number"
              name="editor_version"
              id="editor_version"
              defaultValue={site.editor_version}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.editor_version && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.editor_version.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="current_revision">Current revision</label>
            <input
              type="text"
              name="current_revision"
              id="current_revision"
              defaultValue={site.current_revision_id}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.current_revision_id && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.current_revision_id.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="published_revision">Published revision</label>
            <input
              type="text"
              name="published_revision"
              id="published_revision"
              defaultValue={site.published_revision_id}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.published_revision_id && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.published_revision_id.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="theme_config">Theme config</label>
            <input
              type="text"
              name="theme_config"
              id="theme_config"
              defaultValue={site.theme_config}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.theme_config && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.theme_config.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="seo_config">Seo config</label>
            <input
              type="text"
              name="seo_config"
              id="seo_config"
              defaultValue={site.seo_config}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.seo_config && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.seo_config.join(', ')}
              </div>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="site_config">Site config</label>
            <input
              type="text"
              name="site_config"
              id="site_config"
              defaultValue={site.site_config}
              className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
            />
            {errors.site_config && (
              <div className="text-red-500 px-3 py-2 font-medium">
                {errors.site_config.join(', ')}
              </div>
            )}
          </div>

          <div className="inline">
            <button
              type="submit"
              disabled={processing}
              className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
            >
              {submitText}
            </button>
          </div>
        </>
      )}
    </InertiaForm>
  )
}
