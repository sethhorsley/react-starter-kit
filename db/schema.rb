# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_04_06_223943) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "page_nodes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.jsonb "bindings_json"
    t.text "component_key"
    t.text "component_version"
    t.datetime "created_at", null: false
    t.integer "depth", default: 0, null: false
    t.text "display_name"
    t.jsonb "editor_meta_json"
    t.boolean "is_locked", default: false, null: false
    t.boolean "is_visible", default: true, null: false
    t.integer "node_type", default: 0, null: false
    t.uuid "page_id", null: false
    t.uuid "parent_id"
    t.jsonb "props_json"
    t.bigint "site_id", null: false
    t.integer "sort_order", default: 0, null: false
    t.jsonb "style_json"
    t.datetime "updated_at", null: false
    t.index ["page_id", "parent_id"], name: "index_page_nodes_on_page_id_and_parent_id"
    t.index ["page_id", "sort_order"], name: "index_page_nodes_on_page_id_and_sort_order"
    t.index ["page_id"], name: "index_page_nodes_on_page_id"
    t.index ["site_id"], name: "index_page_nodes_on_site_id"
  end

  create_table "pages", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.boolean "is_homepage", default: false, null: false
    t.boolean "is_published", default: false, null: false
    t.text "layout_component_key"
    t.text "name", null: false
    t.integer "page_type", default: 0, null: false
    t.uuid "root_node_id"
    t.text "route_path", null: false
    t.jsonb "seo_config"
    t.bigint "site_id", null: false
    t.text "slug", null: false
    t.integer "sort_order", default: 0, null: false
    t.text "title"
    t.datetime "updated_at", null: false
    t.index ["site_id", "route_path"], name: "index_pages_on_site_id_and_route_path", unique: true
    t.index ["site_id", "slug"], name: "index_pages_on_site_id_and_slug", unique: true
    t.index ["site_id"], name: "index_pages_on_site_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "ip_address"
    t.datetime "updated_at", null: false
    t.string "user_agent"
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "sites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "current_revision_id"
    t.integer "editor_version", default: 0, null: false
    t.integer "framework", default: 0, null: false
    t.integer "mode", default: 0, null: false
    t.string "name"
    t.bigint "published_revision_id"
    t.jsonb "seo_config"
    t.jsonb "site_config"
    t.integer "status", default: 0, null: false
    t.string "subdomain", null: false
    t.jsonb "theme_config"
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_sites_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.datetime "updated_at", null: false
    t.boolean "verified", default: false, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "page_nodes", "page_nodes", column: "parent_id"
  add_foreign_key "page_nodes", "pages"
  add_foreign_key "page_nodes", "sites"
  add_foreign_key "pages", "sites"
  add_foreign_key "sessions", "users"
  add_foreign_key "sites", "users"
end
