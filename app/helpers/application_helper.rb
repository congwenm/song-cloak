module ApplicationHelper
  def fingerprinted_asset(name)
    Rails.env.production? ? "#{name}-#{ASSET_FINGERPRINT}" : name + '-dev'
  end

  def current_user
    User.find session[:user_id]
  end
end
