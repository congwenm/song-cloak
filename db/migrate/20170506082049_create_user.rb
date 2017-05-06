class CreateUser < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :token
      t.string :uid
      
      t.timestamp
    end
    add_index :users, :uid, unique: true
  end
end
