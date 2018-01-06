# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  body               :string           not null
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  recipient_id       :integer
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ApplicationRecord
  validates :body, :author_id, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
  foreign_key: :author_id,
  class_name: 'User'
end
