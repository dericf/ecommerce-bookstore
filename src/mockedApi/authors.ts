export type AuthorInfo = { imgSrc: string; summary: string };

/**
 * Static placeholder dataset for author info
 */
export const authorInfo: Record<string, AuthorInfo> = {
  "C. S. Lewis": {
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1e/C.s.lewis3.JPG",
    summary:
      "Lewis, in full Clive Staples Lewis, (born November 29, 1898, Belfast, Ireland [now in Northern Ireland]—died November 22, 1963, Oxford, Oxfordshire, England), Irish-born scholar, novelist, and author of about 40 books, many of them on Christian apologetics, including The Screwtape Letters and Mere Christianity.",
  },
  Euclid: {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg/440px-Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg",
    summary:
      "Euclid , (flourished c. 300 bc, Alexandria, Egypt), Greek mathematician of antiquity, known primarily for his highly influential treatise on geometry, the Elements. He founded a school in Alexandria during the reign of Ptolemy I. Little is known of his life, but there are many anecdotes.",
  },
  "Albert Schweitzer": {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Bundesarchiv_Bild_183-D0116-0041-019%2C_Albert_Schweitzer.jpg",
    summary:
      "Albert Schweitzer (1875-1965) was an Alsatian-German religious philosopher, musicologist, and medical missionary in Africa. He was known especially for founding the Schweitzer Hospital, which provided unprecedented medical care for the natives of Lambaréné in Gabon.",
  },
};
