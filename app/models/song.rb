class Song < ApplicationRecord
  before_save :fetch_from_link

  def fetch_from_link
    video = Yt::Video.new(url: self.link)
    self.uid = video.id
    self.title = video.title
    self.likes = video.like_count
    self.dislikes = video.dislike_count
    self.published_at = video.published_at
  rescue Yt::Errors::NoItems
    self.title = ''
  end
end
