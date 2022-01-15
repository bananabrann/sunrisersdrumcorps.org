import { Moment } from "moment";

export interface NewsItem {
  id: string;
  title: string;
  body: string;
  publishedDate: Moment | Date;
}

// NOTE -- Newline and spacing is maintained by the CSS property white-space: pre-line
export const newsData: Array<NewsItem> = [
  {
    id: "test",
    title: "New rocksmither obtained",
    body: `
    Tempor aliquip cupidatat culpa tempor qui est enim esse laborum elit. Quis quis adipisicing mollit nisi. Aute exercitation et pariatur duis sunt ipsum tempor. Deserunt consequat voluptate elit et sit. Ipsum irure reprehenderit dolore labore sit ut irure non sunt Lorem anim. Velit pariatur aliqua eiusmod exercitation est dolore aliquip veniam proident esse incididunt.

Proident tempor laborum do laboris culpa reprehenderit mollit commodo. Culpa fugiat minim aliqua esse commodo deserunt id adipisicing. Voluptate deserunt elit ipsum ad. Labore nulla reprehenderit cillum proident ipsum. Laboris occaecat dolor labore est mollit.
    `,
    publishedDate: new Date(),
  },
  {
    id: "1",
    title: "Second diddley secured for tri-fiddley",
    body: `
    Culpa veniam aliqua ex ipsum proident id consequat enim et fugiat. Nulla laboris enim est reprehenderit non. Elit laboris non reprehenderit irure fugiat labore pariatur. Nulla sit voluptate sunt sunt laboris veniam laboris et laboris sint do qui exercitation dolore. Veniam ad voluptate non id ad duis excepteur dolor commodo fugiat et proident ipsum minim.

    Veniam labore minim proident minim non Lorem culpa veniam aliquip est cupidatat. Sint eiusmod qui elit aliqua excepteur dolore fugiat excepteur occaecat sint adipisicing adipisicing est. Nostrud commodo duis sunt veniam do aliqua nisi do culpa eiusmod consectetur ad. Laborum in dolore veniam tempor consequat adipisicing quis Lorem aute laborum minim. Lorem pariatur irure ullamco aliqua non et nulla sint ad.

    Consequat nisi Lorem laboris esse do veniam. Deserunt Lorem ipsum duis labore nisi non duis adipisicing Lorem laboris pariatur eiusmod. Exercitation nulla culpa nostrud in aute non ad anim Lorem dolor tempor laboris consectetur irure. Magna nostrud duis cillum occaecat. Laboris non fugiat incididunt aute quis deserunt cillum elit eiusmod. Proident enim nisi anim tempor laborum esse ad ipsum excepteur. Pariatur exercitation duis aliquip ad pariatur eu.
    `,
    publishedDate: new Date(),
  },
];
