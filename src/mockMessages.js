import MEDIA from "./constants/media";

const mockMessages = [
  { id: "1", text: "Hey! How are You?", isPrimary: true, hasAvatar: true },
  {
    id: "2",
    text: "How should I call you?",
    isPrimary: true,
    hasAvatar: false,
  },
  {
    id: "3",
    isPrimary: true,
    hasAvatar: false,
    image: {
      id: 1,
      content:
        "https://cdn.eventplanner.net/imgs/xr9078_how-to-maximize-the-power-of-surprise-at-your-events@2x.jpg",
    },
  },
  { id: "4", text: "I'm fine, and you?", isPrimary: false, hasAvatar: true },
  {
    id: "5",
    text: "You can call me John",
    isPrimary: false,
    hasAvatar: false,
  },
  { id: "6", text: "Great!", isPrimary: true, hasAvatar: true },
  {
    id: "7",
    text: "Show me your projects",
    isPrimary: false,
    hasAvatar: false,
  },
  {
    id: "8",
    text: "Here it goes:",
    isPrimary: true,
    hasAvatar: true,
  },
  {
    id: "9",
    isPrimary: true,
    hasAvatar: false,
    media: [
      {
        id: 2,
        type: MEDIA.GITHUB,
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        type: MEDIA.TWITTER,
        title: "Dolor sit amet",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "https://www.google.com",
      },
      {
        id: 4,
        type: MEDIA.LINKEDIN,
        title: "Conjctur Sun",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "https://www.google.com",
      },
    ],
  },
];

export default mockMessages;
