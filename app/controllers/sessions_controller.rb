class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, on: [:destroy]
  def status
    user = User.find_by(id: session[:user_id]) 
    if user
      render json: {
        user: user,
        songs: user.songs
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