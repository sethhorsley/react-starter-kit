# frozen_string_literal: true

class Site < ApplicationRecord
  belongs_to :user
  has_many :pages, dependent: :destroy
  has_many :page_nodes, dependent: :destroy

  enum :mode, { simple: 0, advanced: 1, hybrid: 2 }
  enum :status, { draft: 0, published: 1, archived: 2 }
  enum :framework, { react_vite: 0 }
  enum :editor_version, { simple_editor: 0, advanced_editor: 1 }

  before_validation :set_default_subdomain, on: :create
  after_create :create_default_homepage

  validates :name, presence: true
  validates :subdomain, presence: true

  private

  def create_default_homepage
    pages.create!(
      name: "Home",
      slug: "home",
      route_path: "/",
      page_type: :static,
      is_homepage: true,
      is_published: true,
      sort_order: 0
    )
  end

  def set_default_subdomain
    return if subdomain.present?

    self.subdomain = "#{user.name}-#{name}".parameterize
  end
end
