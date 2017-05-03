Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#home'

  # `scope` doesn't require api module, `namespace` does
  scope "api" do 
    resources :songs
  end
end
