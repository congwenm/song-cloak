class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, on: [:destroy]
  def status
    user = User.find_by(id: session[:user_id]) 
    if user
      render json: {
        user: user,
        songs: get_songs(user)
      }
    end
  end

  def get_songs(user)
    account = Yt::Account.new(refresh_token: user.token)

    # find my favorite playlist that contains all the music
    playlist = account.channel.playlists.find do |pl|   
      pl.title.include?('masterpieces') 
    end

    playlist.playlist_items.map do |item|
      {
        type: 'playlist',
        uid: item.id, 
        title: item.title, 
        thumbnail_url: item.thumbnail_url, 
        video_id: item.video_id,
        link: 'https://www.youtube.com/watch?v=' + item.video_id,
        published_at: item.published_at,
      }
    end
  end
  
  def create
    user = User.from_omniauth(
      request.env['omniauth.auth']
      # `omniauth.auth` contains all the information sent by the server to our app, aka "Auth Hash"
    )
    
    session[:user_id] = user.id
    flash[:success] = "Welcome, #{user.name}"
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    session[:success] = "Goodbye!"
    render json: { success: true }
  end
end