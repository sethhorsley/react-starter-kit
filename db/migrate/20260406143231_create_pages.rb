# frozen_string_literal: true

class CreatePages < ActiveRecord::Migration[8.1]
  def change
    create_table :pages, id: :uuid do |t|
      t.references :site, null: false, foreign_key: true, type: :bigint
      t.text :name, null: false
      t.text :slug, null: false
      t.text :route_path, null: false
      t.integer :page_type, default: 0, null: false
      t.text :title
      t.jsonb :seo_config
      t.text :layout_component_key
      t.uuid :root_node_id
      t.integer :sort_order, default: 0, null: false
      t.boolean :is_homepage, default: false, null: false
      t.boolean :is_published, default: false, null: false

      t.timestamps
    end

    add_index :pages, [:site_id, :slug], unique: true
    add_index :pages, [:site_id, :route_path], unique: true
  end
end
