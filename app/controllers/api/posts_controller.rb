class Api::PostsController < ApplicationController
  before_action :require_logged_in

  def index
    @posts = Post.order(created_at: :desc).includes(:author)
  end

  def show_profile
    @posts = User.find(params[:user_id]).posts
    render :index
  end

  def show_feed
    @posts = Post.order(created_at: :desc).includes(:author) # temporary until "friends" feature implemented
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
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
    params.require(:post).permit(:body, :author_id, :recipient_id)
  end
end
