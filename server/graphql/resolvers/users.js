const { UserInputError } = require("apollo-server");
const { validateUserProfileInput } = require("../../utils/validators");
const User = require("../../models/User");

module.exports = {
  Query: {
    async getUserByAddress(_, { address }) {
      try {
        return await User.findOne({ address });
      } catch (err) {
        throw new Error(err);
      }
    },
    async getUserByUsername(_, { username }) {
      try {
        return await User.findOne({ username });
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async registerUserAddress(_, { address }) {
      // Validate address is base58
      const regEx = /^[1-9A-HJ-NP-Za-km-z]{44}$/;
      // if (!address.match(regEx)) {
      //   throw new UserInputError("Invalid wallet address");
      // }

      // Check if address already exists
      const user = await User.findOne({ address });
      if (user) {
        throw new UserInputError("Address already exists");
      }

      const newUser = new User({
        address,
        avatar: "",
        username: "user",
        name: "User",
        bio: "",
        email: "",
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();
      console.log(res);

      return {
        ...res._doc,
        id: res._id,
      };
    },

    async updateUserProfile(
      _,
      { userProfileInput: { address, avatar, username, name, bio } }
    ) {
      // Validate user input
      // const { valid, errors } = validateUserProfileInput(username);
      // if (!valid) {
      //   throw new UserInputError("Errors", { errors });
      // }
      // Check if new username is not taken
      const user = await User.findOne({ username });
      if (user && user.address !== address) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }

      const updatedUser = await User.findOneAndUpdate(
        { address },
        { avatar, username, name, bio },
        { new: true }
      );

      const res = await updatedUser.save();

      return {
        ...res._doc,
        id: res._id,
      };
    },
  },
};
