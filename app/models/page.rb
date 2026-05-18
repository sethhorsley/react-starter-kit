# frozen_string_literal: true

class Page < ApplicationRecord
  belongs_to :site
  has_many :page_nodes, dependent: :destroy

  enum :page_type, { static: 0, collection: 1, system: 2 }

  validates :name, presence: true
  validates :slug, presence: true, uniqueness: { scope: :site_id }
  validates :route_path, presence: true, uniqueness: { scope: :site_id }
end
