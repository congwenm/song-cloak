class SessionsController < ApplicationController
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
    redirect_to root_url
  end
end