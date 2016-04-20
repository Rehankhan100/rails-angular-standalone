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

  def show
    @todo = Todo.find(params[:id])
    logger.debug "Response! #{@todo.to_json}"
    respond_to do |format|
      format.json {render json: @todo}
    end
  end

  def create
    Todo.transaction do
      @todo = Todo.new(todo_params)
      if @todo.save
        render json: @todo
      else
        render json: @todo.errors
        end
      end
  end
  # def edit
  #   @todo = Todo.new
  # end
  def update
    @todo.update!(todo_params)
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def destroy
    @todo.destroy!
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  def todo_params
		params.require(:todo).permit(:name, :description)
	end

  def link_params
    @todo = Todo.find(params[:id])
  end
end
