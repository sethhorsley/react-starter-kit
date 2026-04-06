# frozen_string_literal: true

class SitesController < InertiaController
  before_action :set_site, only: %i[ show edit update destroy ]

  # GET /sites
  def index
    @sites = Site.all
    render inertia: {
      sites: @sites.map do |site|
        serialize_site(site)
      end
    }
  end

  # GET /sites/1
  def show
    render inertia: {
      site: serialize_site(@site)
    }
  end

  # GET /sites/new
  def new
    @site = Site.new
    render inertia: {
      site: serialize_site(@site)
    }
  end

  # GET /sites/1/edit
  def edit
    render inertia: {
      site: serialize_site(@site)
    }
  end

  # POST /sites
  def create
    @site = Current.user.sites.new(site_params)

    if @site.save
      redirect_to @site, notice: "Site was successfully created."
    else
      redirect_to new_site_url, inertia: {errors: @site.errors}
    end
  end

  # PATCH/PUT /sites/1
  def update
    if @site.update(site_params)
      redirect_to @site, notice: "Site was successfully updated."
    else
      redirect_to edit_site_url(@site), inertia: {errors: @site.errors}
    end
  end

  # DELETE /sites/1
  def destroy
    @site.destroy!
    redirect_to sites_url, notice: "Site was successfully destroyed."
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_site
    @site = Site.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def site_params
    params.require(:site).permit(:name, :subdomain, :mode, :status, :framework, :editor_version, :current_revision_id, :published_revision_id, :theme_config, :seo_config, :site_config).compact_blank
  end

  def serialize_site(site)
    site.as_json(only: [
      :id, :name, :subdomain, :user_id, :mode, :status, :framework, :editor_version, :current_revision_id, :published_revision_id, :theme_config, :seo_config, :site_config
    ])
  end
end
