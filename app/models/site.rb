# frozen_string_literal: true

class Site < ApplicationRecord
  belongs_to :user

  enum :mode, { simple: 0, advanced: 1, hybrid: 2 }
  enum :status, { draft: 0, published: 1, archived: 2 }
  enum :framework, { react_vite: 0 }
  enum :editor_version, { simple_editor: 0, advanced_editor: 1 }

  before_validation :set_default_subdomain, on: :create

  validates :name, presence: true
  validates :subdomain, presence: true

  private

  def set_default_subdomain
    return if subdomain.present?

    self.subdomain = "#{user.name}-#{name}".parameterize
  end
end
