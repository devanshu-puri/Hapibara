import recipes from "../data/recipes"; // We will create this
import RecipeCard from "../components/RecipeCard";

const RecipePage = () => {
  return (
    <div className="bg-[#F7F8F3] min-h-screen px-6 md:px-12 py-10 font-sans">
      {/* Title & Subtext */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-900">Vegan Recipes that Nourish the Soul</h1>
        <p className="text-gray-700 mt-2 text-sm md:text-base">
          Explore handpicked, plant-based recipes made for every Indian home — complete with nutrition facts and simple, delicious steps.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm md:text-base">
        <select className="px-4 py-2 rounded-full border border-gray-300">
          <option>Meal Type</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snacks</option>
          <option>Dessert</option>
        </select>
        <select className="px-4 py-2 rounded-full border border-gray-300">
          <option>Cuisine</option>
          <option>Indian</option>
          <option>Continental</option>
          <option>Asian</option>
          <option>Fusion</option>
        </select>
        <select className="px-4 py-2 rounded-full border border-gray-300">
          <option>Tags</option>
          <option>Gluten-Free</option>
          <option>High-Protein</option>
          <option>Low-Carb</option>
          <option>No Soy</option>
          <option>Nut-Free</option>
        </select>
        <input
          type="text"
          placeholder="Search by ingredient"
          className="px-4 py-2 rounded-full border border-gray-300 w-full md:w-64"
        />
      </div>

      {/* Recipe Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold text-green-900">🍲 More Recipes Coming Soon...</h2>
        <p className="text-sm text-gray-600">New categories, filters, and features will be available shortly!</p>
      </div>
    </div>
  );
};

export default RecipePage;
