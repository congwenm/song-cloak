class User < ApplicationRecord
  serialize (:playlist_names || [])

  scope :inactive, -> { where("expires_at < ?", DateTime.now)}
  
  default_scope { where("expires_at > ?", DateTime.now)}

  class << self
    def from_omniauth(auth)
      user = User.unscoped.find_or_initialize_by(uid: auth['uid'])
      user.name = auth['info']['name']
      user.token = auth['credentials']['token']
      user.expires_at = Time.at(auth['credentials']['expires_at'])
      user.save!
      user
    end
  end
  
  # private
  def account
    @account ||= Yt::Account.new(refresh_token: token)
  end

  def playlists 
    return if @playlists
    @playlists = []
    account.channel.playlists.each do |pl|
      @playlists << pl
    end
    @playlists
  end

  def query_playlists
    result = []
    playlists.each do |pl| 
      result << pl if yield(pl)
    end  
    result
  end

  def songs
    # find my favorite playlist that contains all the music
    
    pls = query_playlists do |pl|
      (playlist_names || []).include? pl.title
    end
    
    # basically flat maps
    items = []
    pls.map(&:playlist_items).each do |plis| 
      plis.each do |item| # omg, this collection thing sucks
        items << item
      end
    end
    
    items.map do |item|
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
end