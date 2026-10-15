export interface CaseStudyFeature {
  id: string;
  titleKey: string;
  descKey: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  poster?: string;
}

export interface CaseStudySubApp {
  id: string;
  name: string;
  subdomain: string;
  descKey: string;
  mediaSrc: string;
  secondaryMediaSrc?: string;
  liveUrl?: string;
}

export interface CaseStudyChallenge {
  id: string;
  titleKey: string;
  descKey: string;
}

export interface CaseStudyItem {
  id: "kkol" | "loles";
  name: string;
  taglineKey: string;
  logo?: string;
  heroVideo?: string;
  heroPoster: string;
  roleKey?: string;
  timelineKey?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  overviewStoryKey: string;
  overviewGoalKey: string;
  features: CaseStudyFeature[];
  subApps?: CaseStudySubApp[];
  challenges: CaseStudyChallenge[];
  nextProjectId: "kkol" | "loles";
}

export const caseStudies: Record<string, CaseStudyItem> = {
  kkol: {
    id: "kkol",
    name: "Karwińska Olimpiada",
    taglineKey: "kkol.tagline",
    logo: "/projects/kkol/logo.svg",
    heroVideo: "/video_placeholder.mp4",
    heroPoster: "/projects/kkol/home.png",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    liveUrl: "https://kkol.pl",
    overviewStoryKey: "kkol.overviewStory",
    overviewGoalKey: "kkol.overviewGoal",
    features: [
      {
        id: "schedule",
        titleKey: "kkol.features.schedule.title",
        descKey: "kkol.features.schedule.desc",
        mediaType: "image",
        mediaSrc: "/projects/kkol/personal_schedule.png",
      },
      {
        id: "tournaments",
        titleKey: "kkol.features.tournaments.title",
        descKey: "kkol.features.tournaments.desc",
        mediaType: "image",
        mediaSrc: "/projects/kkol/tournaments.png",
      },
      {
        id: "ranking",
        titleKey: "kkol.features.ranking.title",
        descKey: "kkol.features.ranking.desc",
        mediaType: "image",
        mediaSrc: "/projects/kkol/ranking.png",
      },
      {
        id: "poll",
        titleKey: "kkol.features.poll.title",
        descKey: "kkol.features.poll.desc",
        mediaType: "image",
        mediaSrc: "/projects/kkol/poll.png",
      },
    ],
    subApps: [
      {
        id: "dartes",
        name: "Dartes",
        subdomain: "dart.kkol.pl",
        descKey: "kkol.subApps.dartes.desc",
        mediaSrc: "/projects/kkol/dartes/home.png",
        liveUrl: "https://dart.kkol.pl",
      },
      {
        id: "kkolBot",
        name: "KKOL Bot",
        subdomain: "Discord Automation & Polls",
        descKey: "kkol.subApps.bot.desc",
        mediaSrc: "/projects/kkol/kkolBot/availabilityCheck.png",
        secondaryMediaSrc: "/projects/kkol/kkolBot/funfact.png",
      },
    ],
    challenges: [
      {
        id: "permissions",
        titleKey: "kkol.challenges.permissions.title",
        descKey: "kkol.challenges.permissions.desc",
      },
      {
        id: "ecosystem",
        titleKey: "kkol.challenges.ecosystem.title",
        descKey: "kkol.challenges.ecosystem.desc",
      },
    ],
    nextProjectId: "loles",
  },
  loles: {
    id: "loles",
    name: "LOLES",
    taglineKey: "loles.tagline",
    logo: "/projects/loles/logo.svg",
    heroVideo: "/projects/loles/preview.mp4",
    heroPoster: "/projects/loles/home.png",
    liveUrl: "https://loles.lkostyk.com",
    roleKey: "loles.role",
    timelineKey: "loles.timeline",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Riot Games API",
      "Local Storage Engine",
    ],
    overviewStoryKey: "loles.overviewStory",
    overviewGoalKey: "loles.overviewGoal",
    features: [
      {
        id: "matchup",
        titleKey: "loles.features.matchup.title",
        descKey: "loles.features.matchup.desc",
        mediaType: "image",
        mediaSrc: "/projects/loles/matchup.png",
      },
      {
        id: "notes",
        titleKey: "loles.features.notes.title",
        descKey: "loles.features.notes.desc",
        mediaType: "image",
        mediaSrc: "/projects/loles/notes.png",
      },
      {
        id: "stats",
        titleKey: "loles.features.stats.title",
        descKey: "loles.features.stats.desc",
        mediaType: "image",
        mediaSrc: "/projects/loles/stats.png",
      },
    ],
    challenges: [
      {
        id: "performance",
        titleKey: "loles.challenges.performance.title",
        descKey: "loles.challenges.performance.desc",
      },
      {
        id: "offline",
        titleKey: "loles.challenges.offline.title",
        descKey: "loles.challenges.offline.desc",
      },
    ],
    nextProjectId: "kkol",
  },
};
