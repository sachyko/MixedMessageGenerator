const randomBibleVerse = () => {
  const verse = [
    "And when you’re doubting again, Remember this promise, I the Lord will make it happen in the right  time. (Isaiah 60:22)",
    "God is making a way. (Isaiah 43:19:)",
    "I can do all this through him who gives me strength. (Philippians 4:13)",
    "Behold I am doing a new thing: Now it springs & forth. Do you not perceive it? (Isaiah 4 3:19)",
    "Cast all your anxieties on him, because he cares for you. (Peter 1 5:7)",
    "I know that you can do all things; no purpose of your can be thwarted. (Job 42:2)",
    "God’s plan: Prosperity, hope, and a bright future. (Jeremiah 29:11 (NIV))",
    "Your steps aligned: embrace God’s guiding hand. (Proverbs 16:9  (NIV))",
    "You are crafted for greatness: fulfilling God’s prepared works. (Ephesians 2:10  (NIV):)",
    "Divine assurance all things working for good. (Romans 8:28  (NIV))",
  ];
  return verse[Math.floor(Math.random() * verse.length)];
};

const randomPositiveAffirmation = () => {
  const affirmation = [
    "I am successful.",
    "I am confident.",
    "I am powerful.",
    "I am strong.",
    "I am getting better and better everyday.",
    "All I need is right now.",
    "I am unstoppable force of nature.",
    "I am living with abundance.",
    "I am filled with focus.",
    "I can be whatever I want to be.",
  ];
  return affirmation[Math.floor(Math.random() * affirmation.length)];
};

const randomRelaxationActivity = () => {
  const activities = [
    "writing a journal.",
    "meditating.",
    "going to the gym.",
    "going to the park.",
    "getting a massage.",
    "pampering day.",
    "swimming.",
    "going to a cafe.",
    "making a vision board.",
    "reading a book.",
  ];
  return activities[Math.floor(Math.random() * activities.length)];
};

console.log("Your Bible Verse for today is", randomBibleVerse());
console.log(
  "Your Positive Affirmation for today is",
  randomPositiveAffirmation()
);
console.log(
  "Your relaxation activity that we recommend is",
  randomRelaxationActivity()
);
