class AddPlaylistNamesToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :playlist_names, :string, {
      array: true, 
      default: [].to_yaml
    }
  end
end
