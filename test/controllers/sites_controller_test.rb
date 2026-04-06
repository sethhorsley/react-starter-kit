# frozen_string_literal: true

require "test_helper"

class SitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @site = sites(:one)
  end

  test "should get index" do
    get sites_url
    assert_response :success
  end

  test "should get new" do
    get new_site_url
    assert_response :success
  end

  test "should create site" do
    assert_difference("Site.count") do
      post sites_url, params: {site: {current_revision_id: @site.current_revision_id, editor_version: @site.editor_version, framework: @site.framework, mode: @site.mode, name: @site.name, published_revision_id: @site.published_revision_id, seo_config: @site.seo_config, site_config: @site.site_config, status: @site.status, subdomain: @site.subdomain, theme_config: @site.theme_config, user_id: @site.user_id}}
    end

    assert_redirected_to site_url(Site.last)
  end

  test "should show site" do
    get site_url(@site)
    assert_response :success
  end

  test "should get edit" do
    get edit_site_url(@site)
    assert_response :success
  end

  test "should update site" do
    patch site_url(@site), params: {site: {current_revision_id: @site.current_revision_id, editor_version: @site.editor_version, framework: @site.framework, mode: @site.mode, name: @site.name, published_revision_id: @site.published_revision_id, seo_config: @site.seo_config, site_config: @site.site_config, status: @site.status, subdomain: @site.subdomain, theme_config: @site.theme_config, user_id: @site.user_id}}
    assert_redirected_to site_url(@site)
  end

  test "should destroy site" do
    assert_difference("Site.count", -1) do
      delete site_url(@site)
    end

    assert_redirected_to sites_url
  end
end
