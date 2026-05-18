# frozen_string_literal: true

class PageNode < ApplicationRecord
  belongs_to :site
  belongs_to :page
  belongs_to :parent, class_name: "PageNode", optional: true
  has_many :children, class_name: "PageNode", foreign_key: :parent_id, dependent: :destroy

  enum :node_type, { component: 0, slot: 1, text: 2, image: 3, container: 4, custom_code: 5 }
end
