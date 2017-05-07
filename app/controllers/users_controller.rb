class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, on: [:destroy]
  def playlists
    user = User.find_by(id: session[:user_id])

    if user
      render json: user.account.channel.playlists.map(&:title)
    end
  end

  # so far you can only update playlists
  def update
    current_user.update(playlist_names: Array.new(params[:playlists]))
    render json: current_user
  end
end
