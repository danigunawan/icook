# iCook

[Live App](https://icookapp.herokuapp.com/#/)

![alt text](https://github.com/mstenflo/icook/blob/master/app/assets/images/README/ScreenShot.png "iCook Logo")

iCook is a recipe database and resource for people who like cooking great meals. It allows members to post their own recipes, view other member recipes and comment on them. No membership is required to view the recipes in the database. The site was built using Rails in the backend and React/Redux in the frontend.

# Features

* User authentication and encrypted login using BCrypt

Frontend error handling to catch any errors before sending info to the database. Catch, display and clear error messages for proper registration and login.

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/LoginForm.png" width="500">

* Members can browse database of recipes and steps associated with the recipe
* Media stored and retrieved through AWS S3 services
* Using Rails backend
* React/Redux frontend
* Members can post new recipes

Creating a new recipe sends an ajax promise to the backend and redirects to the recipe edit page

```export const createRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: "/api/recipes",
    data: {
      recipe
    }
  })
);```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/PublishRecipe.png" width="500">

* Members can edit recipes they posted
* Members can attach a photo to their recipe
* Members can post comments on recipes

# Upcoming Features

* Database is searchable
* Recipes are displayed by categories
* Members have their own show pages with personal info and a list of recipes they posted
