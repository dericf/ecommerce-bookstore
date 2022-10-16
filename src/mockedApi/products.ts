import { Product } from "types/models";
const dataset: Product[] = [
  {
    id: 1,
    author: "C. S. Lewis",
    title: "The Magician's Nephew",
    description:
      "Digory let out a scream. “What's happened to Polly?” “Congratulate me, my dear boy,” said Uncle Andrew, rubbing his hands. “My experiment has succeeded. The little girl's gone – vanished – right out of this world.” When Digory and Polly discover Uncle Andrew's secret workshop, they are tricked into touching some magic rings that take them right out of this world. But even Uncle Andrew doesn't realise the wonders that lie ahead as they discover the gateway to the magical land of Narnia, where many thrilling adventures await them.",
    category: "Fiction",
    price: 10.0,
    imageSrc: "https://covers.openlibrary.org/b/id/10660220-L.jpg",
  },
  {
    id: 2,
    author: "C. S. Lewis",
    title: "The Silver Chair",
    description: "Jill and Eustace must rescue the Prince from the evil Witch.",
    price: 6.0,
    category: "Fiction",
    imageSrc: "https://covers.openlibrary.org/b/id/10645816-L.jpg",
  },
  {
    id: 3,
    author: "Euclid",
    title: "Euclidis elementorum libri XV",
    description:
      "The classic Heath translation, in a completely new layout with plenty of space and generous margins. An affordable but sturdy student and teacher sewn softcover edition in one volume, with minimal notes and a new index/glossary",
    price: 20,
    category: "Mathematics",
    imageSrc: "https://covers.openlibrary.org/b/id/11868398-L.jpg",
  },
  {
    id: 22,
    author: "Albert Schweitzer",
    title: "J. S. Bach",
    description: "Translated and expanded from the 1908 German edition",
    price: 5,
    category: "Biography",
    imageSrc: "https://covers.openlibrary.org/b/id/5970986-L.jpg",
  },
  {
    id: 5,
    author: "C. S. Lewis",
    title: "Voyage of the Dawn Treader",
    description:
      'Lucy, Edmund, and their cousin travel back to Narnia through a painting where they board a ship named "The Dawn Treader." They find King Caspian and a mouse on the ship and they find mystical creatures and go on a mission that will decide Narnia\'s fate!',
    price: 16,
    category: "Fiction",
    imageSrc: "https://covers.openlibrary.org/b/id/11423770-L.jpg",
  },
];

export const getAllProducts = async (): Promise<Product[]> => {
  // Note: uses fake dataset
  return dataset;
};

export const getAllByAuthor = (author: string): Product[] => {
  // Note: uses fake dataset
  return dataset.filter((row) => row.author === author);
};

export const getProductById = (itemId: number): Product | undefined => {
  // Note: uses fake dataset
  return dataset.find((product) => product.id === itemId);
};

/**
 *
 * @returns a random product item to be featured along with all other products from that author
 */
export const getFeaturedProducts = (): Product[] => {
  // Note: uses fake dataset
  const randomIndex = Math.floor(Math.random() * dataset.length);
  return getAllByAuthor(dataset[randomIndex].author);
};
