export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'kullhad-chai',
    name: 'Kullhad Chai',
    description:
      'Classic masala chai served in an earthen cup for that authentic earthy flavor.',
    price: 20.0,
    image: '',
  },
  {
    id: 'masala-maggi',
    name: 'Masala Cheese Maggi',
    description:
      'Our signature spicy Maggi loaded with veggies and melting cheese.',
    price: 60.0,
    image: '',
  },
  {
    id: 'bun-maska',
    name: 'Bun Maska',
    description:
      'Soft bun generously slathered with sweet and salty butter, perfect with chai.',
    price: 30.0,
    image: '',
  },
  {
    id: 'samosa',
    name: 'Punjabi Samosa',
    description:
      'Crispy, flaky pastry filled with spiced potato and peas.',
    price: 15.0,
    image: '',
  },
  {
    id: 'cold-coffee',
    name: 'Thick Cold Coffee',
    description:
      'Classic thick and frothy cold coffee, the perfect summer cooler.',
    price: 50.0,
    image: '',
  },
  {
    id: 'paneer-sandwich',
    name: 'Grilled Paneer Sandwich',
    description:
      'Crispy grilled sandwich stuffed with spiced paneer tikka filling.',
    price: 80.0,
    image: '',
  },
];
