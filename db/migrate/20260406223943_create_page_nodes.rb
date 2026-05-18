# frozen_string_literal: true

class CreatePageNodes < ActiveRecord::Migration[8.1]
  def change
    create_table :page_nodes, id: :uuid do |t|
      t.references :site, null: false, foreign_key: true, type: :bigint
      t.references :page, null: false, foreign_key: true, type: :uuid
      t.uuid :parent_id
      t.integer :node_type, default: 0, null: false
      t.text :component_key
      t.text :component_version
      t.text :display_name
      t.jsonb :props_json
      t.jsonb :bindings_json
      t.jsonb :style_json
      t.jsonb :editor_meta_json
      t.integer :sort_order, default: 0, null: false
      t.integer :depth, default: 0, null: false
      t.boolean :is_locked, default: false, null: false
      t.boolean :is_visible, default: true, null: false

      t.timestamps
    end

    add_foreign_key :page_nodes, :page_nodes, column: :parent_id
    add_index :page_nodes, [:page_id, :parent_id]
    add_index :page_nodes, [:page_id, :sort_order]
  end
end
