import { SiteType } from './types'

interface SiteProps {
  site: SiteType
}

export default function Site({ site }: SiteProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {site.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Subdomain:</strong>
        {site.subdomain?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">User:</strong>
        {site.user_id?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Mode:</strong>
        {site.mode?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Status:</strong>
        {site.status?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Framework:</strong>
        {site.framework?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Editor version:</strong>
        {site.editor_version?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Current revision:</strong>
        {site.current_revision_id?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Published revision:</strong>
        {site.published_revision_id?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Theme config:</strong>
        {site.theme_config?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Seo config:</strong>
        {site.seo_config?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Site config:</strong>
        {site.site_config?.toString()}
      </p>
    </div>
  )
}
