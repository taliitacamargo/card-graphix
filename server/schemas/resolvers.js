const { AuthenticationError } = require('apollo-server-express');
const { Profile, Card, Component } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // Talita's resolvers' (find function) edits start here
    cards: async (parent, { profileId }) => {
      const params = profileId ? { profileId } : {};
      return Card.find(params).sort({ createdAt: -1 });
    },
    card: async (parent, { CardId }) => {
      return Card.findOne({ _id: cardId });
    },
    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.user._id }).populate('cards')
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // and ends here
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    // Talita's mutations' editing starts here 
    createCard: async (parent, { cardId }, context) => {
      if (context.profile) {
        const card = await Card.create({
          cardId, logo, components
        });
        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { cards: card._id } }
        );
        return card;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    removeCard: async (parent, { cardId }) => {
      return Card.findOneAndDelete({ _id: cardId });
    },

    updateCard: async (parent, { cardId }) => {
      return Card.findOneAndUpdate(
        { _id: cardId },
        {
          $addToSet: {
            logo, components
          }
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  }
};

  module.exports = resolvers;