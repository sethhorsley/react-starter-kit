export interface SiteType {
  id: number
  name: string
  subdomain: string
  user_id: number
  mode: string | null
  status: string | null
  framework: string | null
  editor_version: string | null
  current_revision_id: string | null
  published_revision_id: string | null
  theme_config: Record<string, unknown> | null
  seo_config: Record<string, unknown> | null
  site_config: Record<string, unknown> | null
}

export type SiteFormType = Omit<SiteType, 'id'>
