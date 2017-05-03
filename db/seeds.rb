# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'factory_girl_rails'

[
  'https://www.youtube.com/watch?v=tOKS5oSqjII',
  'https://www.youtube.com/watch?v=Zu3M1XoM2rw',
  'https://www.youtube.com/watch?v=5N8sUccRiTA',
].each do |link|
  FactoryGirl.create(:song, link: link)  
end


