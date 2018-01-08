# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  email                    :string           not null
#  session_token            :string           not null
#  password_digest          :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  first_name               :string           not null
#  last_name                :string           not null
#  birthday                 :date             not null
#  gender                   :string           not null
#  image_file_name          :string
#  image_content_type       :string
#  image_file_size          :integer
#  image_updated_at         :datetime
#  cover_photo_file_name    :string
#  cover_photo_content_type :string
#  cover_photo_file_size    :integer
#  cover_photo_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
