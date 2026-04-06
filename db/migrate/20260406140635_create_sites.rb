# frozen_string_literal: true

class CreateSites < ActiveRecord::Migration[8.1]
  def change
    create_table :sites do |t|
      t.string :name
      t.string :subdomain, null: false
      t.references :user, null: false, foreign_key: true
      t.integer :mode, default: 0, null: false
      t.integer :status, default: 0, null: false
      t.integer :framework, default: 0, null: false
      t.integer :editor_version, default: 0, null: false
      t.bigint :current_revision_id, null: true
      t.bigint :published_revision_id, null: true
      t.jsonb :theme_config
      t.jsonb :seo_config
      t.jsonb :site_config

      t.timestamps
    end
  end
end
