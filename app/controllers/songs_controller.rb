class SongsController < ApplicationController
  def index
    render json: Song.all.order(:created_at)
  end
end
