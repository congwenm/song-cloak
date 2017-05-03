# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'factory_girl_rails'

[
  {
    link: 'https://www.youtube.com/watch?v=9syO1bHeymc'
  },
  {
    link: 'https://www.youtube.com/watch?v=LyBIT0Q7fOc'  
  }
].each do |song|
  FactoryGirl.create(:song, link: song[:link])  
end


