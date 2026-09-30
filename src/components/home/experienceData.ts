export interface RoleItem {
  id: string;
  titleKey: string;
  typeKey: string;
  periodKey: string;
}

export interface ExperienceGroup {
  id: string;
  companyKey: string;
  totalPeriodKey?: string;
  logo: string;
  roles: RoleItem[];
}

export const experiences: ExperienceGroup[] = [
  {
    id: "procforce",
    companyKey: "procforce.company",
    totalPeriodKey: "procforce.totalPeriod",
    logo: "/experience/job1.jpg",
    roles: [
      {
        id: "procforce-fullstack",
        titleKey: "procforce.role1.title",
        typeKey: "procforce.role1.type",
        periodKey: "procforce.role1.period",
      },
      {
        id: "procforce-intern",
        titleKey: "procforce.role2.title",
        typeKey: "procforce.role2.type",
        periodKey: "procforce.role2.period",
      },
    ],
  },
];
