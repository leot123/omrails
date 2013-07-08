class ApplicationController < ActionController::Base
  protect_from_forgery
end


=begin 
Step 1: create a controller
		in order to have pages to show users, we need a contorller to have ownership for those pages
$ rails generate

locales--> routes
	- the actual routes necessary for example the /pages/home
create view
	apps=> views
	create a new file
	save it under pages as “about.html.erb”

you need to have an “about” action for it to work. 
You can have an “about” controller but that wont get you anywhere until you have the action
=end