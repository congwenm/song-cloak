class SongsController < ApplicationController
  def index
    saved_songs = Song.all.order(:created_at).as_json(except: [:description])
    render json: {
      saved_songs: saved_songs,
    }
  end

  # def index
  # account = Yt::Account.new access_token: 
  #   end

  # wont need this.
  def create
    @song_link ||= params[:song][:link]
    if @song_link
      song = Song.find_or_create_by(link: @song_link)
      render json: song
    end
  end
end
