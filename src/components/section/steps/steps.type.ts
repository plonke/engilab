export type Step = {
  index: number;
  title: string;
  subtitle: string;
  image: string;
  actionItems: {
    client: string[];
    contractor: string[];
  };
};
