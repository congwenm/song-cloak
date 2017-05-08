class AddPlaylistNamesToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :playlist_names, :text,
      array: true,
      default: []
  end
end
