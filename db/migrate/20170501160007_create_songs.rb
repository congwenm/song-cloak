class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :link
      t.string :title
      t.datetime :published_at
      t.integer :likes
      t.integer :dislikes
      t.string :uid
      t.string :thumbnail_url
      t.string :description

      t.timestamps
    end
    add_index :songs, :uid
  end
end
