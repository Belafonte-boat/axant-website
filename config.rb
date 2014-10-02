require 'builder'
require 'susy'

activate :bower
activate :automatic_image_sizes
activate :livereload
activate :i18n

activate :deploy do |deploy|
  deploy.method = :ftp
  deploy.host = "web332.webfaction.com"
  deploy.user = "piermaria"
  deploy.password = "Nonmelaricordo2"
  deploy.path = "/home/piermaria/webapps/axant"

end

page "/", :layout => :html5
page "/sitemap.xml", :layout => false

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'
set :fonts_dir, 'fonts'


configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # # Minify Javascript on build
  activate :minify_javascript
  activate :minify_html
  # # Create favicon/touch icon set from source/favicon_base.png
  activate :favicon_maker do |f|
    f.template_dir  = File.join(root, 'source')
    f.output_dir    = File.join(root, 'build')
    f.icons = {
        "favicon_template.png" => [
            { icon: "apple-touch-icon-152x152-precomposed.png" },
            { icon: "apple-touch-icon-114x114-precomposed.png" },
            { icon: "apple-touch-icon-72x72-precomposed.png" },
            { icon: "mstile-144x144", format: :png },
            { icon: "favicon.png", size: "16x16" },
            { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
        ]
    }
  end

  # # Enable cache buster
  activate :asset_hash
  activate :imageoptim do |imageoptim|
    imageoptim.pngout_options = false # Should disable pngout
  end

  # # Use relative URLs
  #activate :relative_assets
  # # To put width and height inside tag and to compression

  activate :gzip


  # Or use a different image path
  #set :http_path, "http://thedoers.co/"
end