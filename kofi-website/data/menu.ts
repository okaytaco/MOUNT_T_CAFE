export type MenuCategory = 'Hot Beverages' | 'Shakes' | 'Smoothies' | 'Ice Mocktails' | 'Coffee Frappe' | 'Special' | 'Sandwiches';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
}

export const menuCategories: MenuCategory[] = [
  'Hot Beverages',
  'Shakes',
  'Smoothies',

  'Ice Mocktails',
  'Coffee Frappe',
  'Special',
  'Sandwiches'
];

export const menuItems: MenuItem[] = [
  // Hot Beverages
  { id: 'hb-1', name: 'Delhi Special Tea', description: 'Our signature masala chai brewed to perfection with aromatic spices.', price: 69, category: 'Hot Beverages', image: '/images/menu_tea.jpg' },
  { id: 'hb-2', name: 'Hot Coffee', description: 'Classic hot frothy coffee to kickstart your day.', price: 69, category: 'Hot Beverages', image: '/images/menu_tea.jpg' },
  { id: 'hb-3', name: 'Hot Chocolate', description: 'Rich, creamy and decadent hot cocoa.', price: 69, category: 'Hot Beverages', image: '/images/menu_tea.jpg' },
  { id: 'hb-4', name: 'Saffron Badam Milk', description: 'Warm milk infused with premium saffron strands and crushed almonds.', price: 69, category: 'Hot Beverages', image: '/images/menu_tea.jpg' },

  // Shakes
  { id: 'sh-1', name: 'Mango Shake', description: 'Thick and creamy mango shake made with fresh pulp.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-2', name: 'Butter Scotch', description: 'Sweet and buttery shake with crunchy praline bits.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-3', name: 'Strawberry', description: 'Classic sweet strawberry blended with thick milk.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-4', name: 'Oreo', description: 'Crushed Oreos blended into a thick vanilla shake.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-5', name: 'Vanilla', description: 'Smooth, classic vanilla bean shake.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-6', name: 'Chocolate', description: 'Rich chocolate shake loaded with cocoa goodness.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-7', name: 'Blueberry', description: 'Fruity and creamy blueberry milkshake.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-8', name: 'Nutella', description: 'Hazelnut and chocolate blended into an irresistible shake.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-9', name: 'Peanut Butter', description: 'Creamy peanut butter blended for a protein-packed treat.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },
  { id: 'sh-10', name: 'Banana Shake', description: 'Fresh bananas blended with milk and honey.', price: 140, category: 'Shakes', image: '/images/menu_shake.jpg' },

  // Smoothies
  { id: 'sm-1', name: 'Classic Plain', description: 'Refreshing sweet yogurt-based classic smoothie.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },
  { id: 'sm-2', name: 'Mango', description: 'Tropical mango blended into a smooth yogurt base.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },
  { id: 'sm-3', name: 'Rose', description: 'Fragrant rose syrup blended for a floral, cooling drink.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },
  { id: 'sm-4', name: 'Strawberry', description: 'Fresh strawberry smoothie, perfect for a sunny day.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },
  { id: 'sm-5', name: 'Blueberry', description: 'Antioxidant-rich blueberry smoothie.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },
  { id: 'sm-6', name: 'Pineapple', description: 'Tangy and sweet tropical pineapple smoothie.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },
  { id: 'sm-7', name: 'Kesar', description: 'Royal saffron infused yogurt smoothie.', price: 89, category: 'Smoothies', image: '/images/menu_shake.jpg' },

  // Ice Mocktails
  { id: 'im-1', name: 'Lemon Ice Tea', description: 'Chilled sweet tea with a zesty lemon kick.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },
  { id: 'im-2', name: 'Peach Ice Tea', description: 'Sweet peach flavored chilled iced tea.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },
  { id: 'im-3', name: 'Masala Lemonade', description: 'Indian style spiced lemonade for an instant refresh.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },
  { id: 'im-4', name: 'Cool Blue', description: 'Vibrant blue curacao mocktail with a citrus burst.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },
  { id: 'im-5', name: 'Pina Colada Mojito', description: 'Tropical coconut and pineapple cooler.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },
  { id: 'im-6', name: 'Green Apple Mojito', description: 'Crisp and tart green apple flavored cooler.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },
  { id: 'im-7', name: 'Mint Mojito Punch', description: 'Classic refreshing lime and crushed mint cooler.', price: 110, category: 'Ice Mocktails', image: '/images/menu_shake.jpg' },

  // Coffee Frappe
  { id: 'cf-1', name: 'Classic Cold Coffee', description: 'Thick blended cold coffee with vanilla ice cream.', price: 120, category: 'Coffee Frappe', image: '/images/menu_shake.jpg' },
  { id: 'cf-2', name: 'Chocolate Frappe', description: 'Cold coffee blended with rich chocolate syrup and chips.', price: 120, category: 'Coffee Frappe', image: '/images/menu_shake.jpg' },
  { id: 'cf-3', name: 'Caramel Cold Coffee', description: 'Sweet caramel drizzle blended into thick cold coffee.', price: 120, category: 'Coffee Frappe', image: '/images/menu_shake.jpg' },
  { id: 'cf-4', name: 'Hazelnut Cold Coffee', description: 'Nutty hazelnut flavor in our classic frappe.', price: 120, category: 'Coffee Frappe', image: '/images/menu_shake.jpg' },
  { id: 'cf-5', name: 'Vanilla Frappe', description: 'Smooth vanilla bean blended with espresso and milk.', price: 120, category: 'Coffee Frappe', image: '/images/menu_shake.jpg' },

  // Special
  { id: 'sp-1', name: 'Vada Pav', description: 'Classic Mumbai style spicy potato slider with chutneys.', price: 50, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-2', name: 'Bun Muska', description: 'Soft sweet bun slathered with butter.', price: 50, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-3', name: 'Garlic Toast', description: 'Crispy toasted bread with garlic butter and herbs.', price: 40, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-4', name: 'Pizza Toast', description: 'Toast topped with pizza sauce, veggies, and cheese.', price: 40, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-5', name: 'Butter Toast', description: 'Simple, comforting crispy buttered toast.', price: 40, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-6', name: 'Maggi', description: 'Street style spicy masala Maggi noodles.', price: 69, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-7', name: 'Achari Aloo Stuffed Kulcha', description: 'Soft bread stuffed with tangy pickle-flavored potato.', price: 90, category: 'Special', image: '/images/menu_special.jpg' },
  { id: 'sp-8', name: 'Paneer Stuffed Kulcha', description: 'Spiced cottage cheese stuffed in soft Indian bread.', price: 90, category: 'Special', image: '/images/menu_special.jpg' },

  // Sandwiches
  { id: 'sw-1', name: 'Aloo Tikki Grilled', description: 'Crispy potato patty inside a grilled sandwich.', price: 50, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-2', name: 'Vegetable Grilled', description: 'Fresh crunchy veggies grilled with spices.', price: 50, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-3', name: 'Paneer Tikka Grilled', description: 'Spiced paneer cubes grilled to perfection.', price: 50, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-4', name: 'Onion Corn Grilled', description: 'Sweet corn and onions with melted cheese.', price: 50, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-5', name: 'Cheese Corn Sandwich', description: 'Classic cheesy and sweet corn filling.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-6', name: 'Bombay Sandwich', description: 'Street-style sandwich with veggies, potato, and green chutney.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-7', name: 'Veg Sandwich', description: 'Simple and fresh vegetable sandwich.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-8', name: 'Achari Aloo Sandwich', description: 'Tangy pickle-flavored potato filling.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-9', name: 'Tandoori Crisp Sandwich', description: 'Tandoori spiced filling grilled until crisp.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-10', name: 'Mayo Crisp Sandwich', description: 'Creamy mayo and veggie filling.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-11', name: 'Peanut Butter Sandwich', description: 'Classic creamy peanut butter sandwich.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-12', name: 'Fruit Jam Sandwich', description: 'Sweet mixed fruit jam sandwich.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' },
  { id: 'sw-13', name: 'Nutella Sandwich', description: 'Decadent chocolate hazelnut spread sandwich.', price: 80, category: 'Sandwiches', image: '/images/menu_sandwich.jpg' }
];
