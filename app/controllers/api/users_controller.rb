class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    # @user = User.new(user_params)
    # @user.first_name = current_user.first_name
    # @user.last_name = current_user.last_name
    # @user.email = current_user.email
    # @user.birthday = current_user.birthday
    # @user.gender = current_user.gender

    debugger

    @user = current_user
    @user.cover_photo = user_params[:cover_photo]

    if @user.save!
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def get_friends
    # @users = current_user.friends # once friends feature is implemented
    @users = User.all
    render :friends
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :id,
      :email,
      :password,
      :first_name,
      :last_name,
      :gender,
      :birthday,
      :cover_photo,
      :image
    )
  end
end
