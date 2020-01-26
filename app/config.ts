// *** api ***
const api = {
  pony: {
    createMaze: 'https://ponychallenge.trustpilot.com/pony-challenge/maze',
    addDiscountCode: campaignCode => `/discount/campaign/${campaignCode}/campaignCode`,
  },
};
// *** Locale Config ***
const language = 'en';
const projectTitle = 'pony-challenge';

const config: IConfig = {
  api,
  language,
  projectTitle,
};

export default config;

interface IConfig {
  api: any;
  language: string;
  projectTitle: string;
}
