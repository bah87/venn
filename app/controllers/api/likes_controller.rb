class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    like = Like.new(like_params)
    like.liker_id = current_user.id
    like.likeable_type = 'post' ? Post : Comment
    like.save!
    # current_user.like_ids.push(like.id)
    if like_params[:likeable_type] == Post
      @post = Post.find(like_params[:likeable_id])
      # @post.liker_ids ||= []
      # @post.liker_ids.push(current_user.id)
      render :post_likes
    elsif like_params[:likeable_type] == Comment
      @comment = Comment.find(like_params[:likeable_id])
      # @comment.liker_ids ||= []
      # @comment.liker_ids.push(current_user.id)
      render :comment_likes
    end
  end

  def destroy
    like = Like.find(
      liker_id: current_user.id,
      likeable_id: like_params[:likeable_id],
      likeable_type: like_params[:likeable_type]
    )
    # current_user.like_ids = current_user.like_ids.reject do |id|
    #   id == params[:id]
    # end
    like.destroy

    if like_params[:likeable_type] == 'post'
      @post = Post.find(like_params[:likeable_id])
      # @post.liker_ids = @post.liker_ids.reject { |id| id == current_user.id }
      render :post_likes
    elsif like_params[:likeable_type] == 'comment'
      @comment = Comment.find(like_params[:likeable_id])
      # @comment.liker_ids = @comment.liker_ids.reject { |id| id == current_user.id }
      # like.destroy
      render :comment_likes
    end
  end

  # def like_post
  #   like = Like.new(like_params)
  #   like.liker_id = current_user.id
  #   like.likeable_type = 'post'
  #   like.save!
  #   @post = Post.find(like_params[:likeable_id])
  #   @post.likes.push(like)
  #   render :post_likes
  # end

  # def unlike_post
  #   like = Like.find(params[:id])
  #   @post.likes.delete(like)
  #   render :post_likes
  # end

  # def like_comment
  #   like = Like.new(like_params)
  #   like.liker_id = current_user.id
  #   like.likeable_type = 'comment'
  #   like.save!
  #   @comment = Comment.find(like_params[:likeable_id])
  #   @comment.likes.push(like)
  #   render :comment_likes
  # end

  # def unlike_comment
  #   like = Like.find(params[:id])
  #   @comment.likes.delete(like)
  #   render :comment_likes
  # end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end
end
