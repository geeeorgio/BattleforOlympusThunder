export const REWARDS_IMAGES = {
  first_strike_regular: require('../assets/images/rewards/firstStrike.png'),
  first_strike_blur: require('../assets/images/rewards/firstStrikeBlured.png'),
  friendly_thunder_regular: require('../assets/images/rewards/friendlyThunder.png'),
  friendly_thunder_blur: require('../assets/images/rewards/friendlyThunderBlured.png'),
  mind_reader_regular: require('../assets/images/rewards/mindReader.png'),
  mind_reader_blur: require('../assets/images/rewards/mindReaderBlured.png'),
  perfect_storm_regular: require('../assets/images/rewards/perfectStorm.png'),
  perfect_storm_blur: require('../assets/images/rewards/perfectStormBlured.png'),
};

export const REWARDS_LIST = [
  {
    id: 'first_strike',
    name: 'First Strike',
    description: 'Make the first successful strike in the game.',
    isClaimed: false,
    regularImage: REWARDS_IMAGES.first_strike_regular,
    blurImage: REWARDS_IMAGES.first_strike_blur,
  },
  {
    id: 'friendly_thunder',
    name: 'Friendly Thunder',
    description: 'Play 10 matches with friends.',
    isClaimed: false,
    regularImage: REWARDS_IMAGES.friendly_thunder_regular,
    blurImage: REWARDS_IMAGES.friendly_thunder_blur,
  },
  {
    id: 'mind_reader',
    name: 'Mind Reader',
    description:
      'Guess the location of your opponent’s lightning bolt twice in a row.',
    isClaimed: false,
    regularImage: REWARDS_IMAGES.mind_reader_regular,
    blurImage: REWARDS_IMAGES.mind_reader_blur,
  },
  {
    id: 'perfect_storm',
    name: 'Perfect Storm',
    description: 'Win without losing a single lightning bolt.',
    isClaimed: false,
    regularImage: REWARDS_IMAGES.perfect_storm_regular,
    blurImage: REWARDS_IMAGES.perfect_storm_blur,
  },
];
