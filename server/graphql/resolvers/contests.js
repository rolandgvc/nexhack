const { AuthenticationError, UserInputError } = require("apollo-server");

const Contest = require("../../models/Contest");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  Query: {
    async getContests() {
      try {
        const contests = await Contest.find().sort({ createdAt: -1 });
        return contests;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getContest(_, { contestId }) {
      try {
        const contest = await Contest.findOne({ slug: contestId });
        if (contest) {
          return contest;
        } else {
          throw new Error("Contest not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createContest(
      _,
      { contestInput: { title, body, prizes, header, slug, isFeatured } },
      context
    ) {
      // TODO: Check if wallet is authenticated
      const user = {
        address: "0x0",
        username: "0x0",
      };

      if (title.trim() === "") {
        throw new Error("Contest title must not be empty");
      }
      if (body.trim() === "") {
        throw new Error("Contest body must not be empty");
      }

      const newContest = new Contest({
        title,
        body,
        header,
        slug,
        prizes,
        isFeatured,
        participants: [user.address],
        createdBy: user.address,
        createdAt: new Date().toISOString(),
      });

      const contest = await newContest.save();

      return contest;
    },
    async deleteContest(_, { contestId }, context) {
      // TODO: Check if wallet is authenticated
      const user = {
        address: "0x0",
        username: "0x0",
      };

      try {
        const contest = await Contest.findOne({ contestId });
        if (user.address === contest.createdBy) {
          await contest.delete();
          return "Contest deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
