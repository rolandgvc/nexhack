const { AuthenticationError, UserInputError } = require("apollo-server");

const NFT = require("../../models/NFT");

module.exports = {
  Query: {
    async getNFTs() {
      try {
        const NFTs = await NFT.find().sort({ createdAt: -1 });
        return NFTs;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getNFT(_, { nftId }) {
      try {
        const NFT = await NFT.findOne({ nftId });
        if (NFT) {
          return NFT;
        } else {
          throw new Error("NFT not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createNFT(
      _,
      { NFTInput: { image,
        title,
        description,
        addresses,
        shares } },
      context
    ) {
      if (title.trim() === "") {
        throw new Error("NFT title must not be empty");
      }
      if (description.trim() === "") {
        throw new Error("NFT body must not be empty");
      }

      const newNFT = new NFT({
        image,
        title,
        description,
        addresses,
        shares,
        timestamp: new Date().toISOString(),
      });

      const NFT = await newNFT.save();

      return NFT;
    },
  },
};
