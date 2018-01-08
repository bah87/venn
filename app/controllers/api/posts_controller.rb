class Api::PostsController < ApplicationController
  before_action :require_logged_in

  def show_profile
    # my_posts_no_recipient = User.find(params[:user_id]).posts.reject do |post|
    #   !post.recipient_id.nil
    # end
    #
    # posts_to_me = Post.find_by(recipient_id: current_user.id)
    #
    # @posts = my_posts_no_recipient + posts_to_me
    @posts = User.find(params[:user_id]).posts
    render :index
  end

  def show_feed
    @posts = Post.all.includes(:author) # temporary until "friends" feature implemented
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def edit
    @post = current_user.posts.find(params[:id])
    render :show
  end

  def update
    @post = current_user.posts.find(params[:id])

    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    if @post
      @post.destroy
      render :show
    end
  end

  private

  def post_params
    params.require(:post).permit(
      :body,
      :recipient_id,
      :image
    )
  end
end
