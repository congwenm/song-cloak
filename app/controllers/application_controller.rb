class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include ApplicationHelper
  def home
    # leave this as the front end application endpoint
  end
end
