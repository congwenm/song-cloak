class Song < ApplicationRecord
  before_save :fetch_from_link

  validates :link, uniqueness: true

  def fetch_from_link
    self.uid = video.id
    self.title = video.title
    self.likes = video.like_count
    self.dislikes = video.dislike_count
    self.published_at = video.published_at
    self.thumbnail_url = video.thumbnail_url
    self.description = video.description
  rescue Yt::Errors::NoItems
    self.title = ''
  end

  def video
    @video ||= Yt::Video.new(url: self.link)
  end
end
