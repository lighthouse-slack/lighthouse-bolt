"use strict";

const parseCategories = (view) => {
  const categories =
    view.state.values.selected_categories.categories.selected_options;
  return categories.map((currCategory) => currCategory.value);
};

module.exports = parseCategories;
