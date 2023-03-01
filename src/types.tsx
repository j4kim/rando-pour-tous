export type Section = {
  fields: {
    title: string;
    id: string;
  };
  sys: any;
};

export type MenuProps = {
  sections: Section[];
};
