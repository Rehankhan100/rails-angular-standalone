class TodosController < ApplicationController
  before_action :link_params, only: [:show, :edit, :update, :destroy]

  def index
    @todo = Todo.all
    logger.debug "Response! #{@todo.to_json}"
    respond_to do |format|
      # format.html
      format.json { render json: @todo }
    end
    # @todo.find_each do |todo|
    #   puts todo.name
    #   puts todo.description
    # end
  end

  def create

  end

  def show

  end

  def new

  end

  def edit

  end

  def update

  end

  def destory

  end

  private

  def todo_params
		params.require(:todo).permit(:name, :description)
	end

  def link_params
    @todo = Todo.find(params[:id])
  end
end
