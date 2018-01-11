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

class User < ApplicationRecord
  attr_reader :password

  validates :session_token, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :email, presence: { message: ["You'll use this when you log in and if you ever need to reset your password."] }
  validates :first_name, presence: { message: ["What's your name?"] }
  validates :last_name, presence: { message: ["What's your name?"] }
  validates :gender, presence: { message: ["Please choose a gender. You can change who can see this later."] }
  validates :birthday, presence: { message: ["Select a birthday. You can change who can see this later."] }
  validates :password, length: {
    minimum: 6,
    allow_nil: true,
    message: ["Enter a combination of at least 6 numbers, letters, and punctuation marks (like ! and &)."]
  }

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_photo, default_url: "missing.png", styles: { large: "851x851#" }
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :posts,
  foreign_key: :author_id,
  dependent: :destroy

  has_many :comments,
  foreign_key: :author_id,
  dependent: :destroy

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
