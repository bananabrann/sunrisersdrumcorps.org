/*
  NOTE -- This method of loading data manually is a temporary
  measure, and not intended to be the final method of updating
  staff information.
*/

export interface StaffObject {
  id: string;
  name: string;
  jobTitle: string;
  category: string;
  biography: string | null;
  imageUrlSymbolicObjectName?: string | null;
  email?: string;
}

/*
// NOTE - Copy and paste convenience

{
  id: "",
  name: "",
  jobTitle: "",
  category: "",
  biography: ``,
  imageUrlSymbolicObjectName: ""
}

*/

export const staffData: Array<StaffObject> = [
  {
    id: "carlos",
    name: "Carlos Becerra",
    jobTitle: "Caption Head",
    category: "percussion",
    biography: `
    Carlos was born and raised in Port Chester, NY. His playing and marching career started at Port Chester High School under the direction of Robert C. Vitti at which he was involved in the marching band, concert band, and indoor percussion programs.

    At an early age, he was already involved with drum corps., indoor percussion, and music ensemble groups. After graduating high school in 2003, he was named Bass Tech for the Port Chester High School Marching Band, then elevated to Battery Tech, and later named Percussion Caption Head from 2012-2018.

    In 2015, Port Chester won the USBands Group 5A Best Percussion title under his direction. In 2018 and 2019, Carlos was named snare Tech for the Westhill High School Marching Band and Winter Percussion programs from Stamford, Connecticut. During his time at Westhill High School, they won the USBands Group 3A Best Percussion title in the Fall of 2018 and help them to an appearance at WGI Finals in 2019.

    In the Spring of 2019, he was named lead snare Tech and later named the Percussion Caption Head and Director of Percussion for the Trumbull High School Golden Eagle Marching Band and Winter Percussion programs from Trumbull, Connecticut. He has helped lead them to multiple WGI and BOA appearances during his time.

    Carlos is no stranger to the Sunrisers having taught in 2019 and late last season.

    “I’m honored to have Carlos on board working in this dual role.  His passion to bring a rewarding experience to our membership and staff is inspiring.  Carlos,  with his level headed approach will help guide our Corps into a successful future this year and beyond”.  David Hobart, Executive Director

    Carlos is honored to have studied under educators such as Robert C. Vitti, John Oddo, Michael Messina, Robert Villanova, Austin Avery, and Matthew E. Bauer. Outside of being an educator, Carlos gives private lessons throughout Westchester County, NY and Fairfield County, Ct. areas.
    `,
    imageUrlSymbolicObjectName: "staff/carlos.jpg",
  },

  {
    id: "tim",
    name: "Tim Doran",
    jobTitle: "Caption Head",
    category: "brass",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "schmitt",
    name: "Lewis Schmitt",
    jobTitle: "Brass Technician",
    category: "brass",
    biography: null,
    imageUrlSymbolicObjectName: "staff/schmitt.png",
  },

  {
    id: "michael",
    name: "Michael Valente",
    jobTitle: "Front Ensemble Coordinator",
    category: "percussion",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "cameron",
    name: "Cameron Gutierrez",
    jobTitle: "Percussion Instructor",
    category: "percussion",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "aaron",
    name: "Aaron Gregory",
    jobTitle: "Percussion Instructor",
    category: "percussion",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "david",
    name: "David Hobart",
    jobTitle: "Executive Director",
    category: "design",
    biography: `
    Id esse excepteur nostrud dolore aliqua ex eiusmod officia pariatur. Laboris laborum et aute qui ullamco sunt fugiat cillum anim exercitation nostrud do veniam. Minim dolor voluptate ea minim proident exercitation excepteur elit in. Non fugiat culpa officia aliquip ullamco id magna dolore et mollit velit irure. Ea sit est proident id.

Dolore ea aute qui nostrud et labore sit occaecat ullamco occaecat ut mollit incididunt. Nisi ipsum mollit nisi non ex sint. Elit laborum labore sunt aliqua laborum. Fugiat ipsum do ex ex eiusmod. Deserunt tempor est dolore veniam aliquip do exercitation occaecat ea velit adipisicing. Id adipisicing quis consectetur labore officia exercitation ullamco eu cupidatat proident do. Aliqua minim laboris deserunt laboris nostrud esse officia.

Consectetur dolore quis deserunt voluptate minim dolor cillum dolor. Aliqua consectetur amet commodo fugiat deserunt enim esse laboris amet laboris dolor deserunt. Amet sit reprehenderit elit eiusmod elit adipisicing laboris quis ex. Tempor dolor irure culpa nostrud.

Proident veniam ipsum qui pariatur elit eu ea nulla occaecat. Eiusmod sit nostrud eu commodo cupidatat amet officia proident et culpa duis non dolor enim. In dolor anim aliqua cupidatat aute consequat. Id est sit enim exercitation excepteur consectetur sunt amet. Et sint qui duis nostrud amet in id. Duis ad eu reprehenderit ut voluptate adipisicing in aliqua dolore minim est labore.
    `,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
    email: "dhobart1@gmail.com",
  },

  {
    id: "budd",
    name: "Budd Williams",
    jobTitle: "Program Coordinator, Visual Supervisor",
    category: "design,visual",
    biography: `
    Budd has been involved with many color guard programs in the United States & Japan teaching drum corps, marching band, and winter guard.  Budd states, "my heart holds a special place for this activity and I enjoy the tremendous growth it has evolved into over the past 26 years.  My passion has always been educating the new faces of today that have just been introduced to the organizations I have been part of".
    
    Beginning in 1980, Budd began his marching experience as a percussionist with the Connecticut Valley Crusaders which was a local parade corps from Enfield, CT. He also marched the Connecticut Hurricanes in 1987, the Bushwackers in 1988 and marched/taught the Sunrisers from 1994-1999.  His teaching experience has not only been with all age corps, he has also taught within the DCI arena.   Those corps were the Boston Crusaders 2000-2001, the Cadets in 2002, the Crossmen from 2003-2004, Capital Regiment in 2005 and Teal Sound from 2008-2009.   

    "I have been given the opportunity to work with some of the most elite Techs in the activity such as April Gilligan-Martinez, Jim Moore, Brian Murphy, James Mahoney, Travis Estler, Michael James, Michelle Owens, Greg Lagola & Jeff Sacktig.  These people still influence my teaching /writing today and I am very grateful for their time they spent educating me".

    Budd has spent many years marching and teaching winter guard.  He has marched with Aurora 1984-1985, Silver Falcons 1986, Conquest 1987-1990 & St Ann's 2000-2002.  His taught at Aurora 1985, Zenith 1990, Somers HS 1992-1993, Cheshire HS 1995-1996, Braddock Independent 2004, McEachern HS 2002-2006, Hiram HS 2004-2007, South Paulding HS 2006-2011, North Paulding HS 2008-2011, Lassiter HS 2008-2012, Paulding Independent 2008 & 2010, Sparta HS 2013-2015, UConn 2015 & Blessed Sacrament 2015-present.

    In addition to teaching & marching, Budd is a drill/visual designer writing for various programs throughout the east coast and he is currently an adjudicator for US Bands.

    David Hobart, Executive Director "Budd has a proud history here with the Sunrisers and I am ecstatic that he will be bringing his wealth of knowledge, passion, and skill back home".
    `,
    imageUrlSymbolicObjectName: "staff/budd.jpg",
    email: "email@email.com",
  },

  {
    id: "frank",
    name: "Frank Mauriello",
    jobTitle: "Director of Music",
    category: "design",
    biography: `
    Frank received his B.M. in Music Education and his M.A. in Music Theory and Composition at the C.W. Post Campus of Long Island University and has performed in many ensembles in his time there such as, the Percussion Ensemble, Wind Ensemble, Symphonic Band, Orchestra, and the Pep Band. Frank’s achievements include the Coordinator of Music Scholarship Award.

    Frank was the assistant director and the front ensemble arranger for “Rage”, L.I.’s first Independent Indoor Marching Percussion Ensemble. In addition, he has arranged, instructed, and directed several competitive marching bands, such as Garden City High School, Roslyn High School, Eastport-South Manor High School, Seaford High School, Division Avenue High School, and Mineola High School.

    Currently, Frank is the Director of Bands at Roslyn High School on Long Island. His responsibilities include the Wind Ensemble, Symphonic Band, Jazz Band and the Marching Band. The Marching Bulldogs’ achievements have been noted in New York State, including performances at the Syracuse Carrier Dome in the NYSFBC Circuit as well as Disney World in Orlando, FL.

    Frank’s great aspiration is to combine his range of experience with his ability to be a kindhearted, enthusiastic and intelligent teacher, who will make a positive contribution both musically and educationally.

    Frank's dedication to the advancement of the Sunrisers should be noted. He was part of the team in roles such as Staff Coordinator and Program Coordinator from 2013-2016. He has had a steady hand in the development of this corps in previous years.

    "I could not be happier to have Frank on board with the Sunrisers once again.  His desire to facilitate growth and excellence within this Organization is remarkable.  Please join me in welcoming Frank back home!" - David Hobart, Executive Director
    `,
    imageUrlSymbolicObjectName: "staff/frank.png",
  },

  {
    id: "tom",
    name: "Tom Synder",
    jobTitle: "Brass Arranger",
    category: "design",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "rudy",
    name: "Rudy Flores",
    jobTitle: "Battery Arranger",
    category: "design",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/woman.png",
  },

  {
    id: "scott",
    name: "Scott Tomlin",
    jobTitle: "Drill Designer",
    category: "design",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "lori",
    name: "Lori Tomlin",
    jobTitle: "Color Guard Drill Designer and Supervisor",
    category: "design, colorguard",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/woman.png",
  },

  {
    id: "neil",
    name: "Neil Cain",
    jobTitle: "Front Ensemble Arranger",
    category: "design",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "noreen",
    name: "Noreen LaNasa",
    jobTitle: "Co-Caption Head",
    category: "visual",
    biography: `
    Noreen served in the role of Visual Caption Head then later as program coordinator for the 2021 season for the Sunrisers.  She was also on the visual team in 2018 as a Tech.  Noreen was a marching member of the Jersey Surf from 2004-2007.  Then she marched Fusion Core in 2013.

    In 2005, she joined Hicksville high school as a visual Tech. She taught there for seven years. Noreen currently teaches at the Sachem high school as assistant band director, show designer, and on visual staff.

    Noreen attended Hofstra University and graduated with a music education degree.
    `,
    imageUrlSymbolicObjectName: "staff/noreen.png",
  },

  {
    id: "alfredo",
    name: "Alfredo Gumbs",
    jobTitle: "Co-Caption Head",
    category: "visual",
    biography: `
    Alfredo has taught with various high school music programs in Northern NJ since 2015.

    Currently, Alfredo is working with Glen Ridge high school, and he was also recently hired as the visual caption head at Passaic County Technical Vocational Institute. 

    Alfredo attended Seton Hall University, where he graduated with a Psychology degree. He currently works as a Special Education teacher and a behavioral therapist and has worked with children and young adults on the spectrum for more than ten years.
    `,
    imageUrlSymbolicObjectName: "staff/alfredo.png",
  },

  {
    id: "scully",
    name: "Alec Scully",
    jobTitle: "Visual Consultant",
    category: "visual",
    biography: `
    Alec marched with the Hawthorne Caballeros from 2014 to 2016.  Alec marched with the Crossmen in 2017 and then returned to Caballeros on visual staff in 2018-2019.

    Alec graduated from West Chester University, where he marched with the Golden Rams. He majored in Computer Science and currently works as a .NET Developer.
    `,
    imageUrlSymbolicObjectName: "staff/scully.jpg",
  },

  {
    id: "arthur",
    name: "Jordan Arthur",
    jobTitle: "Visual Tech",
    category: "visual",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "remy",
    name: "Remy Perez",
    jobTitle: "Visual Tech",
    category: "visual,brass",
    biography: null,
    imageUrlSymbolicObjectName: "staff/remy.png",
  },

  {
    id: "angelo",
    name: "Angelo Oliver",
    jobTitle: "Visual Tech",
    category: "visual",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "leon",
    name: "Leon Pooran",
    jobTitle: "Visual Tech",
    category: "visual",
    biography: null,
    imageUrlSymbolicObjectName: "staff/leon.jpeg",
  },

  {
    id: "antonio",
    name: "Antonio Hernandez",
    jobTitle: "Visual Tech",
    category: "visual",
    biography: null,
    imageUrlSymbolicObjectName: "staff/antonio.jpeg",
  },

  {
    id: "pat",
    name: "Pat Bocker",
    jobTitle: "Visual Tech",
    category: "visual",
    biography: null,
    imageUrlSymbolicObjectName: "staff/pat.png",
  },

  {
    id: "nick",
    name: "Nick Ashley",
    jobTitle: "Caption Head",
    category: "colorguard",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "paige",
    name: "Paige MacKay",
    jobTitle: "Color Guard Technician",
    category: "colorguard",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/woman.png",
  },

  {
    id: "stephanie",
    name: "Stephanie Perdikos",
    jobTitle: "Color Guard Technician",
    category: "colorguard",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/woman.png",
  },

  {
    id: "holland",
    name: "Chris Holland",
    jobTitle: "Brass Technician",
    category: "brass",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },

  {
    id: "moya",
    name: "Jeremiah Moya",
    jobTitle: "Brass Technician",
    category: "brass",
    biography: null,
    imageUrlSymbolicObjectName: "staff/defaults/man.png",
  },
];
