class Api::LikesController < ApplicationController
  before_action :require_logged_in

  def create
    like = Like.new(like_params)
    like.liker_id = current_user.id
    like.save!
    current_user.likes.push(like)
    if like_params[:likeable_type] == 'post'
      @post = Post.find(like_params[:likeable_id])
      @post.likes.push(like)
      render :post_likes
    elsif like_params[:likeable_type] == 'comment'
      @comment = Comment.find(like_params[:likeable_id])
      @comment.likes.push(like)
      render :comment_likes
    end
  end

  def destroy
    like = Like.find(params[:id])
    current_user.likes = current_user.likes.reject do |like|
      like.id == params[:id]
    end
    
    if like_params[:likeable_type] == 'post'
      @post = Post.find(like_params[:likeable_id])
      @post.likes = @post.likes.reject { |like| like.id == params[:id] }
      like.destroy
      render :post_likes
    elsif like_params[:likeable_type] == 'comment'
      @comment = Comment.find(like_params[:likeable_id])
      @comment.likes = @comment.likes.reject { |like| like.id == params[:id] }
      like.destroy
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
