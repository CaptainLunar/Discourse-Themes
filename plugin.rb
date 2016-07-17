# name: user-themes
# about: Make Discourse have users be able to switch from available forum themes on the fly. 
# version: 0.0.1
# authors: lunarmuffins

enabled_site_setting :DiscourseThemes_enabled

add_admin_route 'DiscourseThemes.title', 'DiscourseThemes'

Discourse::Application.routes.append do
    get '/admin/plugins/DiscourseThemes' => 'admin/plugins#index', constraints: StaffConstraint.new
end