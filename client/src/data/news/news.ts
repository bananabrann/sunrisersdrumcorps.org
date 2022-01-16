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
  {
    id: "fibbly-squibbly",
    title: "Fibbly Squibbly to perform Dibbly Libbly",
    body: `
    Anim tempor nostrud sit aute ad est laboris fugiat do consectetur excepteur. Qui non qui labore eiusmod mollit duis deserunt commodo. Sit adipisicing enim exercitation proident exercitation ea eu et cillum nisi officia irure esse quis. Elit adipisicing exercitation cupidatat sit aliquip eiusmod nostrud voluptate cupidatat incididunt.

    Dolor qui ullamco laboris excepteur adipisicing labore ullamco. Aute consectetur cupidatat id adipisicing nisi quis labore reprehenderit. Elit incididunt officia culpa exercitation ea laborum duis dolor sunt est. Et veniam voluptate esse dolor esse exercitation ex minim proident eu sunt eu occaecat. In duis pariatur commodo excepteur laboris laboris exercitation aute cillum.

    Id aute duis excepteur voluptate eiusmod eu amet proident. Lorem dolor ex consectetur occaecat sit. Pariatur commodo non in Lorem reprehenderit cillum veniam amet fugiat ut laborum. Dolore veniam consectetur deserunt enim amet excepteur nulla aute laborum aliqua. Et do dolore commodo commodo nisi nostrud commodo non quis eiusmod esse anim ullamco mollit. Consequat qui incididunt culpa sit adipisicing sint qui eu nisi velit et laborum officia.

    Esse pariatur elit deserunt excepteur ea sunt dolore qui sit dolor eiusmod culpa. Ea commodo elit eu cupidatat consequat reprehenderit nulla laboris. Tempor laborum elit reprehenderit consectetur veniam sit non.

    Commodo minim pariatur cillum ad commodo esse tempor adipisicing incididunt. Fugiat consectetur pariatur qui aliqua consequat elit excepteur id ut exercitation aliqua deserunt culpa. Qui veniam culpa dolor sit veniam officia elit elit cillum ipsum. Laboris excepteur exercitation exercitation cupidatat enim deserunt. Minim mollit do fugiat ipsum consectetur esse irure.
    `,
    publishedDate: new Date(),
  },
];
