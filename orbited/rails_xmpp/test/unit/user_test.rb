require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: users
#
#  id                  :integer         not null, primary key
#  login               :string(255)
#  email               :string(255)
#  crypted_password    :string(255)
#  password_salt       :string(255)
#  persistence_token   :string(255)
#  single_access_token :string(255)
#  perishable_token    :string(255)
#  login_count         :integer         default(0), not null
#  failed_login_count  :integer         default(0), not null
#  current_login_at    :datetime
#  last_login_at       :datetime
#  last_request_at     :datetime
#  current_login_ip    :datetime
#  last_login_ip       :datetime
#  created_at          :datetime
#  updated_at          :datetime
#

