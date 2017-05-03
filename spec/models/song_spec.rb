require 'rails_helper'
describe Song do
  it 'validate the uniqueness of @link attribute' do
    link = 'http://youtube.com/daf'
    create(:song, link: link)
    -> { create(:song, link: link) }.should raise_error
  end
end