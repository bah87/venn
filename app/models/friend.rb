class Friend < ApplicationRecord
  validates :receiver_id, :requestor_id, presence: true
  validates :receiver_id, uniqueness: { scope: :requestor_id }
  validates :status, presence: true, inclusion: { in: ['PENDING', 'ACCEPTED'] }
end
