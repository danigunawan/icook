# json.recipe do
  # json.set! @recipe.id do
    json.extract! @recipe, :id, :title, :body, :category, :ingredients, :author_id
  # end
    json.extract! @recipe.author, :username
    # json.set! @recipe.id do
    if @recipe.photo.attached?
      json.photourl url_for(@recipe.photo)
    else
      json.photourl nil
    end
# end

json.steps do
    @recipe.steps.each do |step|
      json.set! step.id do
        json.extract! step, :id, :title, :body, :recipe_id
      end
    end
end

json.comments do
    @recipe.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :created_at, :recipe_id, :user_id
        json.extract! comment.author, :username
      end
    end
end
